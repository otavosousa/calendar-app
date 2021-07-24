const INITIAL_STATE = {
    data: []
}

function reminders(state=INITIAL_STATE, action) {

    switch(action.type) {
        
        case 'ADD_REMINDER': 
            return {...state, data: [...state.data, action.data ]}
        default:
            return state
    }
}

export default reminders