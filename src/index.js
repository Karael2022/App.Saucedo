import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import { AddItem ,TaskItem } from './componentes/index';


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
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
    )

    const onHandleCancel =() => {
      setModalVisible(!modalVisible);
    }

    const onHandleDeleteItem =() => {
      setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
      setModalVisible(!modalVisible);
    }

    const onHandleChange = (text) => setTask(text); 

  return (
    <View style={styles.container}>
      <AddItem task={task} onHandleTask= {onHandleTask} onHandleChange={onHandleChange}/>
      <View style={styles.listContainer}>
      <Text style = {styles.listTitle}>ToDo List</Text>
      </View>
      
      <FlatList
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
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

