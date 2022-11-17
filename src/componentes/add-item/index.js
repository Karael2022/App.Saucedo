import React from "react";
import { View,TextInput, Button } from "react-native";
import { styles } from "./styles";

const AddItem =({task, onHandleTask, onHandleChange}) => {
    return (
        <View style = {styles.inputContainer}>
        <TextInput 
          style = {styles.input} 
          value={task}
          placeholder = "Ingrese Tarea a realizar"
          onChangeText={onHandleChange} 
        />
        <Button disabled={!task} title='Add' color ='#caadde' onPress={onHandleTask}/>
      </View>
    )

}  
export default AddItem;
