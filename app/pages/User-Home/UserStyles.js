import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    size: {
        margin: '3%',
    }, 
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3%',
    },
    separator: {
      borderBottomColor: "#FFC306",
      borderBottomWidth: 1,
    },
    paddingAdjust:{
      paddingRight: "1%",
    },
    titles: {
        fontSize: 18,
        color: '#A5A5A5'
    },
    iboxContent:{
      backgroundColor: 'white',
      width: '100%',
      height: '100%'
    }
 

})