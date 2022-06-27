import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react'

import styles from './App.component.style';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) =>{
    Alert.alert(
      "Thông báo !!!",
      "Bạn có chắc chắn muốn xóa công việc này không?",
      [
        { 
          text: "OK", 
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          }
        },
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo list</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index+1} onDeleteTask={()=>handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
