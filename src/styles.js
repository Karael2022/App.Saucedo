import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F4F5',
    },
    
    
    listContainer:{
      marginHorizontal: 20,
    },
    listTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#4f3b78',
    },
    
  
    modalContainer:{
      justifyContent : 'center',
      alignItems:'center',
      marginTop:50,
      paddingVertical:20,
  
    },
  
    modalTitle:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10, 
    },
    modalDetailContainer:{
      paddingVertical:20,
      justifyContent:'center',
      alignItems: 'center',
    },
    modalDetailText:{
      paddingLeft: 20,
      fontSize: 16,
      color: '#212121',
    },
  
    selectedTask:{
      fontSize:14,
      color: '#212121',
      fontWeight:'bold',
      paddingVertical:10,
    },
    modalButtonContainer:{
      width:'65%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal:70,
    }
  });