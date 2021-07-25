import React, {useState} from 'react'
import {View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native'
import styles from './styles'
import { useDispatch } from 'react-redux'
import FactoryWeather from '../../factories/FactoryWeather'

export default function ModalLocal(props){

    // HOOKS
    const dispatch = useDispatch()

    // STATES
    const [local, setLocal] = useState('')
    const {modalLocalVisible, setModalLocalVisible} = props
    const factoryWeather = new FactoryWeather()

    // HANDLES

    const handleGetWeather = async() => {

      const response = await factoryWeather.get(local)
      const data = await response['weather'][0].main
      const weather = factoryWeather.translate(data)

      handleSetReminder({weather, local})

    }

    const handleSetReminder = (obj) => {

        dispatch({type: 'EDIT_REMINDER', data: obj})
        setModalLocalVisible(!modalLocalVisible)
    }
    
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalLocalVisible}
    >

        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => setModalLocalVisible(!modalLocalVisible)}>
            <View style={{ height: '70%', width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={[styles.modalView, styles.shadow]}>
            <View style={styles.head}>
              <TouchableOpacity style={styles.btnExit} onPress={() => setModalLocalVisible(!modalLocalVisible)}>
                  <Text style={styles.btnExitText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnExit} onPress={() => {
                handleGetWeather()
              }}>
                  <Text style={styles.btnExitText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputTextContainer}>
              <TextInput
                  style={styles.inputText}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={text => setLocal(text)}
                  placeholder={'Local'}
                  placeholderTextColor="#BDBDBD"
                  value={local}
                  maxLength = {30}
                  autoFocus={true}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
}

