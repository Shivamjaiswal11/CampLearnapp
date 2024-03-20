import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGrocery, } from '../store/grocerySlice'
import BucketItem from '../components/BucketItem'
import { addToBucket } from '../store/bucketSlice'
import { reset } from '../store/actions'
import { useAddnewproductMutation, useGetallproductQuery } from '../services/groceryService'

const HomeScreen = () => {
    const { data, error, isLoading, isError, isFetching, isSuccess } = useGetallproductQuery()
    const [addnewproduct, result] = useAddnewproductMutation();

    console.log("result", result)
    // const groceries = useSelector(state => state.groceries)
    const dispatch = useDispatch();
    const [grociesitem, setgrociesitem] = useState('')

    const colorScheme = useColorScheme();

    const darkScheme = {
        color: colorScheme === 'dark' ? '#fff' : '#000'
    }
    const darkSchemeBack = {
        backgroundColor: colorScheme === 'dark' ? '#fff' : '#000'
    }
    // console.log('groceries',groceries)
    const addNewGrocery = () => {
        addnewproduct({ title: 'BMW Pencil' })
        return
        if (!grociesitem?.trim()) {
            Alert.alert('Please enter grocery name')
        }
        else {
            // dispatch(addGrocery(grociesitem));
            addnewproduct({ title: 'BMW Pencil' })
            setgrociesitem('');
        }

    }

    const addItemInBucket = (item) => {
        // console.log('adding item', item)
        dispatch(addToBucket(item));
    }

    const Reset = () => {

        dispatch(reset());
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 16, }}>
            <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center', justifyContent: 'center' }}>


                <TextInput
                    value={grociesitem}
                    onChangeText={(text) => setgrociesitem(text)}
                    style={{ width: '80%', padding: 5, ...darkSchemeBack, color: '#000' }}
                />
                <TouchableOpacity
                    onPress={Reset}
                    style={{ width: '20%', backgroundColor: 'blue', alignItems: 'center', padding: 10 }}
                >
                    <Text style={darkScheme}>Reset</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={addNewGrocery}
                style={{ width: '100%', padding: 5, backgroundColor: 'blue', alignItems: 'center', marginTop: 10 }}
            >
                <Text style={darkScheme}>Add</Text>
            </TouchableOpacity>


            {isLoading && isFetching && <Text style={darkScheme}>Loading</Text>}
            <ScrollView>


                {data &&
                    data?.products?.map((grocery) => {
                        return (
                            <TouchableOpacity
                                onPress={() => addItemInBucket(grocery)}
                                key={grocery?.id} style={{ paddingTop: 5, flexDirection: 'row', gap: 10, padding: 10, backgroundColor: 'red' }}>
                                <Text style={darkScheme} >+</Text>
                                <Text style={darkScheme} >{grocery?.brand}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
            <BucketItem />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})