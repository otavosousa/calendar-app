import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      
      modalView: {
        backgroundColor: "white",
        borderRadius: 30,
        padding: 20,
        width: '100%',
        height: '35%'
      },

    text:{
      fontWeight: '600',
      fontSize: 22,
      color: 'black',
    },

    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 10
    },

    btnExit: {
      
      alignItems: 'flex-end'
    },

    btnExitText: {

      color: '#535353',
      fontWeight: '600',
      fontSize: 24
    },
    picker:{
      width: '50%'
    },
    text: {
      fontSize: 20,
      color: '#535353',
      fontWeight: '500'
    }

})

export default styles