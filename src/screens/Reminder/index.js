import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux'
import ModalTime from '../../components/ModalTime';
import ModalColor from '../../components/ModalColor';
import ModalLocal from '../../components/ModalLocal';

function Reminder(){

    // HOOKS
    const route = useRoute()
    const dispatch = useDispatch()
    const navigation = useNavigation()

    // STATES
    const reminder = useSelector(state => state.reminder.data)
    const [title, setTitle] = useState('')
    const [timeIsStart, setTimeIsStart] = useState(false)
    const [modalTimeVisible, setModalTimeVisible] = useState(false)
    const [modalColorVisible, setModalColorVisible] = useState(false)
    const [modalLocalVisible, setModalLocalVisible] = useState(false)
    

    // HANDLES
    const handleSave = async () => {

        dispatch({type: 'ADD_REMINDER', data: {
            ...reminder, 
            id: Math.random().toString(36).substring(2),
            title,
            day: route.params.day
        }})
        
        handleExit()
    }

    const handleModalTime = (value) => {

        setTimeIsStart(value)
        setModalTimeVisible(!modalTimeVisible)
    }

    const handleExit = () => {
        dispatch({type: 'RESET_REMINDER'})
        navigation.goBack()
    }

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
                <Text style={styles.confirmItemText}>Salvar</Text>
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
            </View>
        </View>
    )
}

export default Reminder