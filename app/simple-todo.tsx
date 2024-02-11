import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Button, FlatList, Modal, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/simple-todo';

const DATA = [
  { id: '1', title: 'Coding', completed: false, color: '#EBC58C' },
  { id: '2', title: 'Gaming', completed: false, color: '#EBC58C' },
  { id: '3', title: 'Cycling', completed: false, color: '#EBC58C' }
]

export default function SimpleTodoPage() {
  const [items, setItems] = useState(DATA)
  const [text, setText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const addNewTodo = () => {
    let newTodo = {
      id: (items.length + 1).toString(),
      title: text,
      completed: false,
      color: '#EBC58C'
    }

    setItems([...items, newTodo])
    setText('')
    setIsModalVisible(false)
  }

  const markItemCompleted = (item: any) => {
    const itemIndex = items.findIndex(currItem => currItem.id === item.id)

    if (itemIndex !== -1) {
      const updatedItems = [...items]
      updatedItems[itemIndex] = { ...items[itemIndex], completed: !items[itemIndex].completed }
      console.log(updatedItems)
      setItems(updatedItems)
    }
  }

  const TodoItem = (props: any) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => markItemCompleted(props.item)}>
        <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText}>{props.item.title}</Text>
      </TouchableOpacity >
    )
  }

  const addButton = () => {
    return (
      <TouchableOpacity style={styles.icon} onPress={() => setIsModalVisible(true)} >
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.input} onChangeText={setText} value={text} />
            <Button title='Add Todo' onPress={addNewTodo} />
          </View>
        </View>
      </Modal>

      <FlatList
        style={styles.list}
        data={items}
        renderItem={({ item }) => TodoItem({ item })}
        keyExtractor={item => item.id}
        ListFooterComponent={addButton}
      />

    </SafeAreaView>
  );
}

