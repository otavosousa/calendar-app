import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'; 

function Reminder(){

    // STATES
    const [title, setTitle] = useState()

    // HOOKS
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.confirmItem} onPress={() => navigation.goBack()}>
                <Text style={styles.confirmItemText}>Cancelar</Text>
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{`Novo evento`}</Text>
              </View>
              <TouchableOpacity style={styles.confirmItem} onPress={() => navigation.goBack()}>
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
                            <Text style={styles.sectionText}>Começa em</Text>
                            <Text style={styles.sectionText}>Termina em</Text>
                        </View>
                        <View>
                            <Text style={styles.sectionText}>22:05</Text>
                            <Text style={styles.sectionText}>23:05</Text>
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
                    <View style={styles.sectionDiagram}>

                    </View>
                    <View>
                        <Text style={styles.sectionText}>Cor</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Reminder