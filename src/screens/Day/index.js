import React from 'react'
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from './styles'
import FactoryMonth  from '../../factories/FactoryMonth'
import { Feather } from '@expo/vector-icons'; 

function Day(){

  // HOOKS
  const route = useRoute()
  const navigation = useNavigation()

  // FACTORY
  const factoryMonth = new FactoryMonth()

  // HANDLES
  const handlePageReminder = (value) => {

    navigation.navigate('Reminder', {
        day: value
    })

}

    return(

        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backItemContainer} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={30} color="#757575" />
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{`${route.params.day} de ${factoryMonth.getName()}`}</Text>
              </View>
            </View>
            <View style={styles.main}>
            </View>
            <TouchableOpacity style={styles.createItem} onPress={() => handlePageReminder(route.params.day)}>
                <Feather name="plus-circle" size={60} color="#757575" />
            </TouchableOpacity>
        </View>
    )
}

export default Day