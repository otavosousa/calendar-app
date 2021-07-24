import { createStore, combineReducers } from 'redux'
import remindersReducer from '../reducers/remindersReducer'

const reducers = combineReducers({
    reminders: remindersReducer,
})

const store = createStore(reducers)

export default store