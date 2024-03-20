import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromBucket } from '../store/bucketSlice'
const BucketItem = () => {
    const mybucketsiiem = useSelector(state => state.mybuckets)
    const colorScheme = useColorScheme();
    const dispatch = useDispatch();

    const darkScheme = {
        color: colorScheme === 'dark' ? '#fff' : '#000'
    }

const RemoveExitItem = (item)=> {
    dispatch(removeFromBucket(item))

}

    return (
        <View>
            {
                mybucketsiiem.length == 0

                    ? <Text style={darkScheme}>NO Item in Bucket</Text>
                    : <View>
                        {
                            mybucketsiiem.map((item, index) => {
                                return (
                                    <View key={index} style={{flexDirection:'row',padding:5 }}>
                                        <Text style={darkScheme}>{item.brand}</Text>
                                        <Text style={darkScheme}> X {item.quantity}</Text>
                                        <TouchableOpacity onPress={()=>RemoveExitItem({id:item?.id})} style={{}}>
                                        <Text style={darkScheme} > - </Text>
                                        </TouchableOpacity>
                                       
                                    </View>
                                )
                            })
                        }
                    </View>
            }

        </View>
    )
}

export default BucketItem

const styles = StyleSheet.create({})