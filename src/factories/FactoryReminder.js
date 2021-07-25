import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

function FactoryReminder(){

    const reminder = {}
    const dispatch = useDispatch()
    const store = useSelector(state => state.reminder.data)

    async function get(){
        let reminders = []

        const response = await AsyncStorage.getItem('@calendar-reminders')

        if(response) reminders = JSON.parse(response)

        return reminders
    }

    async function set(data){
        let reminders = []

        const response = await AsyncStorage.getItem('@calendar-reminders')

        if(response) reminders = JSON.parse(response)

        await AsyncStorage.setItem('@calendar-reminders', JSON.stringify([...reminders, data]))

        actionAdd(data)
    }

    function actionAdd(data) {

        return dispatch({type: 'ADD_REMINDER', data})
    }

    reminder.get = get
    reminder.set = set
    reminder.actionAdd = actionAdd

    return reminder
}

export default FactoryReminder