import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));



const items = [
  {
    id: 1,
    title: 'TODOAPP',
    navigation: 'Todo',
    backgroundColor: '#89b2f5',
    border:'#125fdb'
  },
  {
    id: 2,
    title: 'Home',
    navigation: 'Home',
    backgroundColor: '#a7f09c',
    border:'#2ccc14'
  },
  {
    id: 3,
    title: 'Test',
    navigation: 'Test',
    backgroundColor: '#f07590',
    border:'#de1642'
  },
  {
    id: 4,
    title: 'Item 4',
    navigation: '',
    backgroundColor: '#ebf08b',
    border:'#e2ed15'
  },
  // {
  //   id: 5,
  //   title: 'Item 5',
  //   backgroundColor: 'orange',
  // },
];


const IntroScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();

  const darkScheme = {
    color: colorScheme === 'dark' ? '#fff' : '#000'
  }

  return (
   
      <ScrollView style={styles.container}>
        <View style={styles.sectionContainer}>
          {
            items && items.map((item, i) => {
              return (
                <TouchableOpacity
                  disabled={item?.navigation == '' ? true : !item.navigation}
                  onPress={() => navigation.navigate(item?.navigation ? item.navigation : '')}
                  key={i} style={[styles.boxContainer, { backgroundColor: item.backgroundColor,borderWidth:2,borderColor:item.border }]}>
                  <Text style={darkScheme}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          }

        </View>
      </ScrollView>
 
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    borderRadius:5,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    elevation:5,
  },

})