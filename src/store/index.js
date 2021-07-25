import { createStore, combineReducers } from 'redux'
import reminders from '../reducers/remindersReducer'
import reminder from '../reducers/reminderReducer'

const reducers = combineReducers({
    reminders,
    reminder,
})

const store = createStore(reducers)

export default store