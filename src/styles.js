import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F4F5',
    },
    inputContainer : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal:20,
      marginVertical:40,
    },
    input: {
      width:'80%',
      borderBottomWidth: 1,
      borderBottomColor: '#9a848f',
      paddingVertical:5,
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
    listItemContainer:{
      marginVertical:10,
      paddingVertical: 20,
      backgroundColor:'#4f3b78',
      borderRadius:5,
      alignItems:'center',
      padding:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listItem:{
      fontStyle:'italic',
      color:'#f6f6f6',
      paddingHorizontal:10,
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
    },
  });