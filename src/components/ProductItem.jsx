import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({item}) => {
    const navigation = useNavigation()
    // console.log("item",item)
  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate("ProductByIdScreen",{item_id: item.id})}
    style={{alignSelf:'center',borderWidth:1,width:'100%'}}>
        <Image source={{uri:item?.thumbnail}} style={{height:150,width:"100%"}}/>
      <Text>{item?.brand}</Text>
    </TouchableOpacity>
  )
}

export default ProductItem

const styles = StyleSheet.create({})