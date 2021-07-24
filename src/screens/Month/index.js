import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import FactoryMonth  from '../../factories/FactoryMonth'
import FactoryWeek  from '../../factories/FactoryWeek'
import { Table, Row } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'

function Month(){
    
    // HOOKS
    const navigation = useNavigation()

    // FACTORY
    const factoryMonth = new FactoryMonth()
    const factoryWeek = new FactoryWeek()

    // HANDLES

    const handleToPageDay = (value) => {

        navigation.navigate('Day', {
            day: value
        })

    }

    const handleSelectDay = (value) => (
        <TouchableOpacity onPress={() => handleToPageDay(value)}>
          <View >
            <Text style={styles.calendarBodyText} >{value}</Text>
          </View>
        </TouchableOpacity>
      );

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