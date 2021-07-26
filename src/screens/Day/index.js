import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import FactoryMonth  from '../../factories/FactoryMonth'
import FactoryTime from '../../factories/FactoryTime';

function Day(){

    // HOOKS
    const route = useRoute()
    const navigation = useNavigation()
    const reminders = useSelector(state => state.reminders.data.filter(reminder => reminder.day === route.params.day))

    // FACTORY
    const factoryMonth = new FactoryMonth()
    const factoryTime = new FactoryTime()

    // HANDLES
    const handlePageReminder = (value, reminder) => {
        navigation.navigate('Reminder', {
            day: value,
            reminder
        })
    }

    // COMPONENTS
    const Item = (props) => {

        function getMinutes(num){
            return (Number(num.slice(0,2))*60) + Number(num.slice(3,5))
        }

        const { data } = props

        const start = getMinutes(data.start)
        const finish = getMinutes(data.finish)

        const height = finish - start

        return(
            <TouchableOpacity 
                style={[styles.bodyItem, {height, backgroundColor: data.color, top: start }]}
                onPress={() => handlePageReminder(data.day, data)}>
                <Text style={styles.bodyItemText}>{data.title}</Text>
            </TouchableOpacity>
        )
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <View style={styles.nav}>
                        {factoryTime.getHours().map(hour => (
                            <View style={styles.navItem} key={`h${hour}`}>
                                <Text style={styles.navItemText}>{`0${hour}`.slice(-2) + ':00'}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.body}>
                        {reminders.map((reminder, index) => {
                            return(
                                <Item data={reminder} key={reminder.id}/>
                            )}  
                        )}
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity style={styles.createItem} onPress={() => handlePageReminder(route.params.day)}>
                <View style={styles.createIcon}>
                    <Feather name="plus-circle" size={52} color="#757575" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Day