const INITIAL_STATE = {
    data: { 
        id: '',
        title: '', 
        start: '00:00', 
        finish: '01:00', 
        local: '', 
        color : '#3498DB',
        day: ''
    }
}

function reminder(state=INITIAL_STATE, action) {

    switch(action.type) {
        
        case 'EDIT_REMINDER': 
            return {...state, data: Object.assign(state.data, action.data)}
        case 'RESET_REMINDER': 
            return {...state, data: { 
                id: '',
                title: '', 
                start: '00:00', 
                finish: '01:00', 
                local: '', 
                color : '#3498DB',
                day: ''
            }}
        default:
            return state
    }
}

export default reminder