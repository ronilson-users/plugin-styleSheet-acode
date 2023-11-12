
import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  otherStyle: {
    position: 'absolute',
    justifyContent: 'center',
  }
});

import React from "react";
import { Text, View } from "react-native";

<MyElement style={styles.myClass} />

<MyElement style={styles["my-dashed-class"]} />

const App = () => (
  <View style={styles.container}>
    <Text  style={{ color: 'gray' }}>
      Grey text
    </Text>
  </View>
);
export default App;