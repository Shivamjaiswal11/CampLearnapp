import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { getproductbyid } from '../services/ApiCalls'
import { useQuery } from '@tanstack/react-query'

const ProductByIdScreen = ({route}) => {
    const {item_id} = route?.params 
    const quesydata = useQuery({ queryKey: ['products',String(item_id)], queryFn: getproductbyid(item_id), staleTime: 10000, })
    console.log('Product data',quesydata)
  return (
  
     <View style={{alignSelf:'center',borderWidth:1,width:'100%'}}>
        {/* <Image source={{uri:item?.thumbnail}} style={{height:150,width:"100%"}}/>
      <Text>{item?.brand}</Text> */}
    </View>

  )
}

export default ProductByIdScreen

const styles = StyleSheet.create({})