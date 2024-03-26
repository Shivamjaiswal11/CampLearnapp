import React, { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

 const TestScreen =()=> {


  const [arr, setArr] = useState([]);
  const onPressBtn = () => {
    let data = {
      id: arr?.length + 1,
      isGrey: false,
    };
    setArr([...arr, data]);
  };
  const onPressCircle = (item, index) => {
    // console.log(item);
    setArr((prevArr) => {
      const updatedArr = [...prevArr];
      if (updatedArr[index]) {
        updatedArr[index].isGrey = !updatedArr[index].isGrey;
      }
      return updatedArr;
    });
  };
  const selectedCircle = arr?.filter((item) => item?.isGrey);

  return (
    <SafeAreaView style={styles.app}>
      <Button title="Add circle" onPress={onPressBtn} />
      <Text>{`Count of Circle : ${selectedCircle.length}`}</Text>
      <FlatList
        data={arr ?? []}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              height: 100,
              width: 100,
              backgroundColor: item?.isGrey ? "grey" : "white",
              borderWidth: 1,
              borderRadius: 100,
              marginBottom: 10,
            }}
            onPress={() => onPressCircle(item, index)}

          >
            {/* <View style={{ backgroundColor: "grey" }}></View> */}
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
export default TestScreen

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  logo: {
    height: 80,
  },
  header: {
    height: 100,
    width: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

