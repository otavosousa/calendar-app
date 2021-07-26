const INITIAL_STATE = {
    data: { 
        id: '',
        title: '', 
        start: '00:00', 
        finish: '00:00', 
        local: '', 
        color : '#3498DB',
        day: '',
        weather: ''
    }
}

function reminder(state=INITIAL_STATE, action) {

    switch(action.type) {
        
        case 'CACHE_REMINDER': 
            return {...state, data: Object.assign(state.data, action.data)}
        case 'RESET_REMINDER': 
            return {...state, data: { 
                id: '',
                title: '', 
                start: '00:00', 
                finish: '00:00', 
                local: '', 
                color : '#3498DB',
                day: '',
                weather: ''
            }}
        default:
            return state
    }
}

export default reminder