import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

function FactoryReminder(){

    const reminder = {}
    const dispatch = useDispatch()

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

    async function edit(data){

        const response = await AsyncStorage.getItem('@calendar-reminders')

        if(response) {

            const responseData = JSON.parse(response)
            const reminders = responseData.filter(reminder => reminder.id !== data.id)
            await AsyncStorage.setItem('@calendar-reminders', JSON.stringify([...reminders, data]))
            actionEdit(data)
        }
    }

    async function del(data){

        const response = await AsyncStorage.getItem('@calendar-reminders')

        if(response) {
            const responseData = JSON.parse(response)
            const reminders = responseData.filter(reminder => reminder.id !== data.id)
            await AsyncStorage.setItem('@calendar-reminders', JSON.stringify([...reminders]))
            actionDelete(data)
        }
    }

    function actionAdd(data) {

        return dispatch({type: 'ADD_REMINDER', data})
    }

    function actionEdit(data) {

        return dispatch({type: 'EDIT_REMINDER', data })
    }

    function actionDelete(data) {

        return dispatch({type: 'DELETE_REMINDER', data })
    }

    function actionCache(data) {

        return dispatch({type: 'CACHE_REMINDER', data })
    }

    function actionReset() {

        return dispatch({type: 'RESET_REMINDER'})
    }

    reminder.get = get
    reminder.set = set
    reminder.edit = edit
    reminder.del = del
    reminder.actionAdd = actionAdd
    reminder.actionEdit = actionEdit
    reminder.actionCache = actionCache
    reminder.actionDelete = actionDelete
    reminder.actionReset = actionReset

    return reminder
}

export default FactoryReminder