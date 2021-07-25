import React, {useState} from 'react'
import {View, Modal, Text, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import styles from './styles'
import FactoryColor from '../../factories/FactoryColor';
import { useDispatch } from 'react-redux'

export default function ModalColor(props){

    // HOOKS
    const dispatch = useDispatch()

    // STATES
    const factoryColor = new FactoryColor()
    const [color, setColor] = useState('')
    const {modalColorVisible, setModalColorVisible} = props

    // HANDLES
    const handleSetReminder = (obj) => {

        dispatch({type: 'EDIT_REMINDER', data: obj})
        setModalColorVisible(!modalColorVisible)
    }
    
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalColorVisible}
    >

        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => setModalColorVisible(!modalColorVisible)}>
            <View style={{ height: '70%', width: '100%'}}></View>
          </TouchableWithoutFeedback>
          <View style={[styles.modalView, styles.shadow]}>
            <TouchableOpacity style={styles.btnExit} onPress={() => handleSetReminder({color})}>
              <Text style={styles.btnExitText}>Selecionar</Text>
            </TouchableOpacity>
              <Picker
                  selectedValue={color}
                  onValueChange={(itemValue, itemIndex) =>
                      setColor(itemValue)
                  }
              >
                  {factoryColor.getColors().map((color, index) => (
                      <Picker.Item label={color.name} value={color.code} key={String(index)} />
                  ))}
              </Picker>
          </View>
        </View>
      </Modal>
    )
}

