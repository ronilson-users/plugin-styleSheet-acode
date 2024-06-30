import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function Snippets() {
    const [text, setText] = useState("");
    const [cont, setCont] = useState();
    // Tab next

    return (
        <View style={styles.container}>
            <Text>Welcome to React Native!</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter text"
                value={text}
                onChangeText={setText}
            />
              <Text>Welcome to React Native!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 20,
        width: "100%",
        color: "red"
    }
});
