const INITIAL_STATE = {
    data: []
}

function reminders(state=INITIAL_STATE, action) {

    switch(action.type) {
        
        case 'ADD_REMINDER': 
            return {...state, data: [...state.data, action.data ]}
        case 'EDIT_REMINDER': 
            return {...state, data: [...state.data.filter(reminder => reminder.id !== action.data.id), action.data ]}
        case 'DELETE_REMINDER': 
            return {...state, data: [...state.data.filter(reminder => reminder.id !== action.data.id)]}
        default:
            return state
    }
}

export default reminders