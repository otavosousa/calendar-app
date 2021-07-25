import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import FactoryMonth  from '../../factories/FactoryMonth'
import FactoryWeek  from '../../factories/FactoryWeek'
import FactoryReminder from '../../factories/FactoryReminder'
import { Table, Row } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function Month(){
    
    // HOOKS
    const navigation = useNavigation()

    // FACTORIES
    const factoryMonth = new FactoryMonth()
    const factoryWeek = new FactoryWeek()
    const factoryReminder = new FactoryReminder()
    const reminders = useSelector(state => state.reminders.data)

    // HANDLES

    const handleToPageDay = (value) => {
        navigation.navigate('Day', {
            day: value
        })
    }

    const handleGetReminders = async () => {

        const datas = await factoryReminder.get()
        
        datas.forEach(data => factoryReminder.actionAdd(data))
    }

    useEffect(() => {

        handleGetReminders()
    },[])

    // COMPONENTS
    const handleSelectDay = (value) => {

        const isReminder = reminders.some(reminder => reminder.day === value)

        return (

            <TouchableOpacity onPress={() => handleToPageDay(value)} style={styles.calendarItem}>
                <View>
                    <Text style={styles.calendarBodyText} >{value}</Text>
                </View>
                <View style={styles.calendarItemSpan}>
                    {isReminder && <View style={styles.span}/>}
                </View>
            </TouchableOpacity>
        )
        
    };

    return(
        
        <View style={styles.container}>
            <View style={styles.headers}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{factoryMonth.getName()}</Text>
                </View>
            </View>
            <View style={styles.main}>
                <Table>
                    <Row data={factoryWeek.getNames().map(name => name[0])} style={styles.calendarHead} textStyle={styles.calendarHeadText}/>
                    {factoryMonth.getDays().map((months, index) => (
                        <Row data={months.map(month => month != "" ? handleSelectDay(month) : month )} key={String(index)}/>
                    ))}
                </Table>
            </View>
        </View>
    )
}

export default Month