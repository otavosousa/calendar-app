import React, {useState, useEffect} from 'react'
import {View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import styles from './styles'
import FactoryTime from '../../factories/FactoryTime';
import { useDispatch } from 'react-redux'

export default function ModalTime(props){

    // HOOKS
    const dispatch = useDispatch()

    // STATES
    const factoryTime = new FactoryTime()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const { 
        timeIsStart, 
        setModalTimeVisible, 
        modalTimeVisible 
    } = props

    // HANDLES
    const handleModalVisible = () => {
        setHours()
        setMinutes()
        setModalTimeVisible(!modalTimeVisible)
    }

    const handleSetReminder = () => {

        let data = {}
        if(timeIsStart) data = {start: `${hours}:${minutes}`}
        else data = {finish: `${hours}:${minutes}`}

        dispatch({type: 'EDIT_REMINDER', data })
        handleModalVisible()
    }
    
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTimeVisible}
    >

        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={handleModalVisible}>
            <View style={{ height: '70%', width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={[styles.modalView, styles.shadow]}>
            <TouchableOpacity style={styles.btnExit} onPress={handleSetReminder}>
              <Text style={styles.btnExitText}>Selecionar</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 15}}>
                <Text style={styles.text}>Hora</Text>
                <Text style={styles.text}>Minuto</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Picker
                    style={styles.picker}
                    selectedValue={hours}
                    onValueChange={(itemValue, itemIndex) =>
                        setHours(itemValue)
                    }
                >
                    {factoryTime.getHours().map((hour, index) => (
                        <Picker.Item label={`0${hour}`.slice(-2)}  value={`0${hour}`.slice(-2)} key={String(index)}/>
                    ))}
                </Picker>
                <Picker
                    style={styles.picker}
                    selectedValue={minutes}
                    onValueChange={(itemValue, itemIndex) =>
                        setMinutes(itemValue)
                    }
                >
                    {factoryTime.getMinutes().map((minute, index) => (
                        <Picker.Item label={`0${minute}`.slice(-2)} value={`0${minute}`.slice(-2)} key={String(index)}/>
                    ))}
                </Picker>
            </View>
          </View>

        </View>
      </Modal>
    )
}

