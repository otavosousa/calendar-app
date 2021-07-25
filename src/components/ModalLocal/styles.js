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
      height: '95%'
    },
    btnExitText: {

      color: '#535353',
      fontWeight: '600',
      fontSize: 20
    },
    inputText: {
      borderRadius: 10,
      padding: 15,
      color: '#535353',
      fontSize: 22,
      fontWeight: '600'
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputTextContainer: {
    marginTop: 30
  }

})

export default styles