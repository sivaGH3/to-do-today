import * as actionType from '../constants/actionTypes'
import { combineReducers } from 'redux'

const createList = filter => {
	const ids = (state = [], action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case actionType.FETCH_TASKS_SUCCESS:
			return action.response.map(t => t.id)
		default:
			return state
		}
	}
	const isFetching = (state = false, action) => {
		if (action.filter !== filter) {
			return state
		}
		switch (action.type) {
		case actionType.FETCH_TASKS_REQUEST:
			return true
		case actionType.FETCH_TASKS_SUCCESS:
		case actionType.FETCH_TASKS_FAILURE:
			return false
		default:
			return state
		}
	}
	return combineReducers({
		ids,
		isFetching
	})
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching