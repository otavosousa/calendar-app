import React, {useState} from 'react'
import {View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native'
import styles from './styles'
import FactoryWeather from '../../factories/FactoryWeather'
import FactoryReminder from '../../factories/FactoryReminder';

export default function ModalLocal(props){

    // STATES
    const factoryReminder = new FactoryReminder()
    const [local, setLocal] = useState('')
    const {modalLocalVisible, setModalLocalVisible} = props
    const factoryWeather = new FactoryWeather()

    // HANDLES

    const handleGetWeather = async() => {

      const response = await factoryWeather.get(local)
      if(response.error) {

        return handleSetReminder({weather: 'Sem referência', local})
      }

      const data = await response['weather'][0].main
      const weather = factoryWeather.translate(data)
      handleSetReminder({weather, local})
    }

    const handleSetReminder = (obj) => {

        const data = obj

        factoryReminder.actionCache(data)

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

