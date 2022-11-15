import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ListViewBase, FlatList, Modal, TouchableOpacity } from 'react-native';


export default function App() {
  const [task, setTask] = useState ('');
  const[taskList,setTaskList] = useState ([]);
  const [modalVisible, setModalVisible] = useState(false);
  const[selectedTask,setselectedTask] = useState(null);


  const onHandleTask =() => {
    setTaskList((prevTaskList) => [...prevTaskList,{id: Math.random().toString(), value: task}]);
    setTask('');
  }
  const onHandleSelected = (item)=> {
    setselectedTask(item);
    setModalVisible(true);
  }

  const rederItem = ({item}) => (
    <TouchableOpacity style={styles.listItemContainer} onPress= {()=> onHandleSelected(item)}>
        <Text style = {styles.listItem}>{item.value}</Text>  
      </TouchableOpacity>
    )

    const onHandleCancel =() => {
      setModalVisible(!modalVisible);
    }

    const onHandleDeleteItem =() => {
      setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
      setModalVisible(!modalVisible);
    }

  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput 
          style = {styles.input} 
          value={task}
          placeholder = "Ingrese Tarea"
          onChangeText= {text => setTask(text)}/>
        <Button disabled={!task} title='Add' color ='#caadde' onPress={onHandleTask}/>
      </View>
      <View style={styles.listContainer}>
      <Text style = {styles.listTitle}>ToDo List</Text>
      </View>
      
      <FlatList
        style={styles.listContainer}
        data={taskList}
        renderItem={rederItem}
        keyExtractor={item => item.id}
      />
      <Modal visible ={modalVisible} animationType='slide'>
        <View style ={styles.modalContainer}>
          <Text style ={styles.modalTitle}> Task Detail</Text>
        </View>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailText}> Are you sure to Delete</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button
            title='Cancel'
            color='#ef9f9f'
            onPress={onHandleCancel}
          />
          <Button 
            title='Delete'
            color='#ef9f9f'
            onPress={onHandleDeleteItem}
          />
        </View>
      </Modal>
    </View>    
    
  );
}

  const styles = StyleSheet.create({
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