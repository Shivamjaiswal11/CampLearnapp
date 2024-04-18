import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getallproducts } from '../services/ApiCalls'
import ProductItem from '../components/ProductItem'
const ProductScreen = () => {
    const {
        data,
        isFetching,
        isLoading,
        isError,
        isPending
    } = useQuery({ queryKey: ['products'], queryFn: getallproducts, staleTime: 100000, })

    // console.log('Produc isLoading',isLoading)
    // console.log('Produc isFetching',isFetching)
    // console.log('Produc erorr',isError)
    //  console.log('Product data',data)

    if (isFetching) {
        return (
            <View>
                <ActivityIndicator size={'large'} />
                <Text >Loading...</Text>
            </View>
        )
    }
    if (isPending) {
        return (
            <View>
                
                <Text style={{color:'#000'}}>Loading...</Text>
            </View>


        )
    }

    if (isError) {
        return (
            <View>
                
                <Text  style={{color:'red'}}>Error...</Text>
            </View>


        )
    }
    // console.log('ProductScreen',data?.products )
    return (
        <View>
            <FlatList
                data={data?.products}
                keyExtractor={item => item?.id?.toString()}
                renderItem={({ item }) => <ProductItem item={item} />}
            />
            <Text>ProductScreen</Text>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})