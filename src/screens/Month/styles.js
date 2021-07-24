import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: Constants.statusBarHeight,
     padding: 20
    },

    titleContainer: {
        paddingBottom: 20,
        borderColor: 'lightgray',
        borderBottomWidth: 1
    },
    titleText: {

        color: '#535353',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'right'
    },

    calendarHead: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },

    calendarHeadText: {
        padding: 10,
        textAlign: 'center',
        color: '#535353',
        fontSize: 20,
        fontWeight: 'bold'
    },
    calendarBodyText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 40
    },
})

export default styles