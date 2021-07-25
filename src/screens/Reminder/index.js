import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux'
import ModalTime from '../../components/ModalTime';
import ModalColor from '../../components/ModalColor';

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

    return(
        <View style={styles.container}>
            <ModalTime 
                timeIsStart={timeIsStart}
                modalTimeVisible={modalTimeVisible}
                setModalTimeVisible={setModalTimeVisible}
            />

            <ModalColor
                setModalColorVisible={setModalColorVisible}
                modalColorVisible={modalColorVisible}
            />

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
                <View style={styles.section}>
                    <View style={styles.sectionText}>
                        <Feather name="clock" size={24} color="#535353" />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={styles.sectionText}>Começa em:</Text>
                            <Text style={styles.sectionText}>Termina em:</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => handleModalTime(true)}>
                                <Text style={styles.sectionText}>{reminder.start}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleModalTime(false)}>
                                <Text style={styles.sectionText}>{reminder.finish}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[styles.section, {alignItems: 'center'}]}>
                    <View style={styles.sectionText}>
                        <Feather name="map-pin" size={24} color="#535353" />
                    </View>
                    <View>
                        <Text style={styles.sectionText}>Local</Text>
                    </View>
                </View>
                <View style={[styles.section, { alignItems: 'center'}]}>
                    <View style={[styles.sectionDiagram, {backgroundColor: reminder.color}]}></View>
                    <TouchableOpacity onPress={() => setModalColorVisible(!modalColorVisible)}>
                        <Text style={styles.sectionText}>Cor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Reminder