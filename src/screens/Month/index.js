import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import FactoryMonth  from '../../factories/FactoryMonth'
import { Table, Row } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'

function Month(){
    
    // HOOKS
    const navigation = useNavigation()

    // FACTORY
    const factoryMonth = new FactoryMonth()

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
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{factoryMonth.getName()}</Text>
                </View>
                <View>
                    <Table>
                        <Row data={factoryMonth.getDaysName()} style={styles.calendarHead} textStyle={styles.calendarHeadText}/>
                        {factoryMonth.getDaysNumber().map((months, index) => (
                            <Row data={months.map(month => month != "" ? handleSelectDay(month) : month )} key={String(index)}/>
                        ))}
                    </Table>
                </View>
            </View>
        </View>
    )
}

export default Month