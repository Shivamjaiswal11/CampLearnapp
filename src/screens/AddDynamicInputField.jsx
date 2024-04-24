import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const AddDynamicInputField = () => {
  const [question, setquestion] = useState('')
  const [options, setoptions] = useState(['', ''])

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <Text style={styles.text}>Question</Text>
      <TextInput style={styles.input}
        placeholder={`Enter Your Question`}
        placeholderTextColor={'grey'}
        onChangeText={(text) => setquestion(text)} />

      <Text style={styles.text}>Options</Text>
      {
        options && options.map((option, index) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', }} key={option}>
            <TextInput style={styles.input}
              value={option}
              key={options[index]}
              placeholder={`option ${index + 1}`}
              placeholderTextColor={'grey'}
              onChangeText={(text) => {
                const newOptions = [...options]
                newOptions[index] = text
                setoptions(newOptions)
              }
              }
            />

            <Text
              onPress={() => {
                const removeOptions = [...options]
                removeOptions.splice(index, 1)
                setoptions(removeOptions);
              }}
              style={[styles.text, { right: 10, position: 'absolute', fontSize: 14 }]}>X</Text>
          </View>

        ))
      }

      <View style={{ marginTop: 10 }}>
        <Button title="Add" color='red' onPress={() => setoptions([...options, ''])} />
      </View>


    </View>
  )
}

export default AddDynamicInputField

const styles = StyleSheet.create({

  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',

  },
  input: {

    marginTop: 10,
    width: "100%",
    height: 45,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    color: '#000',
  }
})