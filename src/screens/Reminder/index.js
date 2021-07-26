import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux'
import ModalTime from '../../components/ModalTime';
import ModalColor from '../../components/ModalColor';
import ModalLocal from '../../components/ModalLocal';
import FactoryReminder from '../../factories/FactoryReminder';

function Reminder(){

    // HOOKS
    const route = useRoute()
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const factoryReminder = new FactoryReminder()

    // STATES
    const reminder = useSelector(state => state.reminder.data)
    const reminders = useSelector(state => state.reminders.data.filter(reminder => reminder.day === route.params.day))
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState('')
    const [timeIsStart, setTimeIsStart] = useState(false)
    const [modalTimeVisible, setModalTimeVisible] = useState(false)
    const [modalColorVisible, setModalColorVisible] = useState(false)
    const [modalLocalVisible, setModalLocalVisible] = useState(false)
    

    // HANDLES
    const handleSave = async () => {

        const verify = handleVerification()

        if(verify) {

            const data = {
                ...reminder, 
                id: isEdit ? reminder.id : Math.random().toString(36).substring(2),
                title,
                day: route.params.day
            }
    
            if(isEdit) await factoryReminder.edit(data)
            else await factoryReminder.set(data)
    
            handleExit()
        }

    }

    const handleDelete = async () => {

        await factoryReminder.del(reminder)
        handleExit()
    }

    const handleAlerDelete = () => {

        Alert.alert(
            'Deletar evento', 
            'Você tem certeza que quer deletar o evento?',
            [
                {
                    text: "Cancelar"
                },
                { text: "Deletar", onPress: handleDelete }
            ])
    }

    const handleAlertVerify = (msg) => {

        Alert.alert(
            'Ops, algo deu errado!',
            msg
        )
    }

    const handleVerification = () => {
        let verification = false

        function getMinutes(num){
            return (Number(num.slice(0,2))*60) + Number(num.slice(3,5))
        }

        if(title.length === 0) {
            return handleAlertVerify('Você deve preencher o campo de título')
        }

        const start = getMinutes(reminder.start)
        const finish = getMinutes(reminder.finish)
        const calc = finish - start

        if(calc <= 0) {
            return handleAlertVerify('Altere o campo de horário')
        }

        verification = true
        return verification
    }

    const handleModalTime = (value) => {

        setTimeIsStart(value)
        setModalTimeVisible(!modalTimeVisible)
    }

    const handleExit = () => {
        factoryReminder.actionReset()
        navigation.goBack()
    }

    useEffect(() => {

        if(route.params.reminder) {

            const reminderEdit = reminders.filter(item => item.id === route.params.reminder.id)[0]
    
            factoryReminder.actionCache(reminderEdit)
            setTitle(reminderEdit.title)
            setIsEdit(true)
        }
    }, [])

    // COMPONENTS
    const Modals = () => (
        <>
            <ModalTime 
                timeIsStart={timeIsStart}
                modalTimeVisible={modalTimeVisible}
                setModalTimeVisible={setModalTimeVisible}
            />

            <ModalColor
                setModalColorVisible={setModalColorVisible}
                modalColorVisible={modalColorVisible}
            />
            <ModalLocal
                setModalLocalVisible={setModalLocalVisible}
                modalLocalVisible={modalLocalVisible}
            />
        </>
    )



    return(
        <View style={styles.container}>

            <Modals />

            <View style={styles.header}>
              <TouchableOpacity style={styles.confirmItem} onPress={handleExit}>
                <Text style={styles.confirmItemText}>Cancelar</Text>
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{`Novo evento`}</Text>
              </View>
              <TouchableOpacity style={styles.confirmItem} onPress={() => handleSave()}>
                <Text style={styles.confirmItemText}>{isEdit ? 'Editar' : 'Salvar'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View>
                    <TextInput
                        style={styles.inputText}
                        enablesReturnKeyAutomatically={true}
                        onChangeText={text => setTitle(text)}
                        placeholder={'Título'}
                        placeholderTextColor="#BDBDBD"
                        value={title}
                        maxLength = {30}
                    />
                </View>
                <View style={[styles.section, {alignItems: 'flex-start'}]}>
                    <View style={styles.sectionText}>
                        <Feather name="clock" size={24} color="#535353" />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => handleModalTime(true)}>
                            <Text style={styles.sectionText}>Começa em: {reminder.start}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleModalTime(false)}>
                            <Text style={styles.sectionText}>Termina em: {reminder.finish}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.section} onPress={() => setModalLocalVisible(!modalLocalVisible)}>
                    <View style={styles.sectionText}>
                        <Feather name="map-pin" size={24} color="#535353" />
                    </View>
                    <View>
                        <Text style={styles.sectionText}>Local: {reminder.local}</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
                            <Feather name="umbrella" size={12} color="black" />
                            <Text style={{paddingLeft: 5}}>Tempo: {reminder.weather}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.section}
                    onPress={() => setModalColorVisible(!modalColorVisible)}>
                    <View style={[styles.sectionDiagram, {backgroundColor: reminder.color}]}></View>
                    <View>
                        <Text style={styles.sectionText}>Cor</Text>
                    </View>
                </TouchableOpacity>
                {isEdit &&
                    <TouchableOpacity style={styles.deleteBtn} onPress={handleAlerDelete}>
                        <Feather name="trash" size={20} color='#EF5350' />
                        <Text style={[styles.confirmItemText, {color: '#EF5350', paddingLeft: 20}]}>Excluir</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default Reminder