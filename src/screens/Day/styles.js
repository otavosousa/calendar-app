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
        top: '95%',
        left: '85%'
    }
})

export default styles