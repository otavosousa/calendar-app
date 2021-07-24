import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: Constants.statusBarHeight,
     padding: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmItem: {
        paddingBottom: 20
    },
    titleContainer: {
        paddingBottom: 20,
    },
    titleText: {

        color: '#535353',
        fontWeight: 'bold',
        fontSize: 30,
    },
    confirmItemText: {
        fontSize: 20
    },
    main: {

        marginTop: 30
    },

    inputText: {
        borderRadius: 10,
        padding: 15,
        color: '#616161',
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        fontSize: 25,
        fontWeight: '600'
    },
    section: {

        marginTop: 20,
        flexDirection: 'row',
    },
    sectionText: {
        fontSize: 20,
        padding: 10
    },
    sectionDiagram: {
        width: 24,
        height: 24,
        backgroundColor: 'blue',
        margin: 10,
        borderRadius: 5
    }
})

export default styles