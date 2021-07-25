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

    btnExit: {
      
      alignItems: 'flex-end'
    },

    btnExitText: {

      color: '#535353',
      fontWeight: '600',
      fontSize: 24
    },

})

export default styles