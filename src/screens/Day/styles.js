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
        borderColor: 'lightgray',
        borderBottomWidth: 1,
    },
    backItemContainer: {
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
    createItem: {

        position: 'absolute',
        top: '100%',
        left: '92%',
    },
    main: {

        marginTop: 20,
        height: 1440,
        width: '100%',
        flexDirection: 'row'
        
    },
    createIcon: {
        backgroundColor: 'white',
        borderRadius: 100
    },
    nav: {
        width: '20%',
        height: 1440,
    },
    navItem: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    navItemText: {
        fontSize: 18
    },
    body: {
        width: '80%',
        height: 1440,
        position: 'relative'
    },
    bodyItem: {
        width: '100%',
        borderRadius: 10,
        position: 'absolute',
        paddingTop: 10,
        paddingLeft: 10,
    },
    bodyItemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    }
})

export default styles