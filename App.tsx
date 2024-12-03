import React,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./Styles";
import RenderItem from "./RenderItem";


export interface Task {
  title: string,
  done: boolean,
  date: Date
}


export default function App() {
  const [text,setText] = useState("");
  const [tasks,setTasks] = useState<Task[]>([]);

  const addTask = ()=>{
    if(text == ""){
      Alert.alert("Por favor Ingrese la nueva actividad");
      return;
    }
    const temp =[...tasks];
    const newTask ={
      title:text,
      done:false,
      date:new Date()
    };
    temp.push(newTask);
    setTasks(temp);
    setText("");
  };
  const markDone = () => {
    console.log("mark done")
  };
  const deleteFunction = () => {
    console.log("delete")

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput value={text} placeholder="Agregar una nueva tarea" style={styles.TextInput} 
          onChangeText={(t:string)=> setText(t)}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({ item }) => <RenderItem item={item} deleteFunction={deleteFunction} markDone={markDone} />}
          data={tasks} />
      </View>
    </View>
  );
}