import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './styles'

function Day(){

  // HOOKS
  const route = useRoute()

    return(

        <View style={styles.container}>
          <Text>{route.params.day}</Text>
        </View>
    )
}

export default Day