import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { reset } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo, editTodo } from '../store/todoSlice';

const TodoListScreen = () => {
    const todos = useSelector(state => state.todos)
    console.log(todos?.todolist)
    const [currenttodo, setcurrenttodo] = useState('')
    const [currentSelecttodo, setcurrentSelecttodo] = useState(null)
    const colorScheme = useColorScheme();
    const dispatch = useDispatch();
    const darkScheme = {
        color: colorScheme === 'dark' ? '#fff' : '#000'
    }
    const darkSchemeBack = {
        backgroundColor: colorScheme === 'dark' ? '#fff' : '#000'
    }
    const Reset = () => {
        dispatch(reset());
    }

    const addNewTodo = () => {
        if (!currenttodo?.trim()) {
            Alert.alert('Please enter grocery name')
        }
        else {
            dispatch(addTodo(currenttodo));
            setcurrenttodo('');
        }

    }
    const DeletecurrentTodo = (id) => {
        console.log('Deleting current',id)
          dispatch(deleteTodo(id))
    }
    const SelectUpdatecurrentTodo = (todo) => {
        setcurrenttodo(todo?.title)
        setcurrentSelecttodo(todo?.id)
       

    }

    const UpdatecurrentTodo = () => {
        dispatch(editTodo({id:currentSelecttodo,title:currenttodo}))
        setcurrenttodo('')
        setcurrentSelecttodo(null)
       

    }
    return (
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 16, }}>
            <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center', justifyContent: 'center' }}>


                <TextInput
                    value={currenttodo}
                    onChangeText={(text) => setcurrenttodo(text)}
                    style={{ width: '75%', padding: 5, ...darkSchemeBack, color: '#000' }}
                />
                <TouchableOpacity
                    onPress={currentSelecttodo ? UpdatecurrentTodo : addNewTodo}
                    style={{ width: '25%', backgroundColor: 'blue', alignItems: 'center', padding: 10 }}
                >
                    <Text style={darkScheme}>{currentSelecttodo ? "UPDATE" :"ADD"}</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>


                {todos &&
                    todos?.todolist?.map((todo) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                key={todo?.id} style={{ paddingTop: 5, flexDirection: 'row', gap: 10, padding: 10, backgroundColor: 'red', justifyContent: 'space-between',alignItems:'center',marginTop:5 }}>
                                <Text style={darkScheme} >{todo?.title}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        onPress={() => DeletecurrentTodo(todo.id)}
                                        style={{ padding: 5, backgroundColor: 'green', marginRight: 6 }}  >
                                        <Text style={darkScheme} >Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => SelectUpdatecurrentTodo(todo)}
                                        style={{ padding: 5, backgroundColor: 'grey' }}>
                                        <Text style={darkScheme} >Update Todo</Text>
                                    </TouchableOpacity>
                                </View>

                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TodoListScreen

const styles = StyleSheet.create({})