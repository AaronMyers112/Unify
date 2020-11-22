import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";

export function HomeButton({title="enter a title", onPress = f => f}) {
    return (
            <TouchableHighlight 
                underlayColor="#c7c7c7" 
                style={styles.button}
                onPress={() => onPress()}
            >
                <View 
                    style={styles.row}
                >
                    <Text style={styles.buttonText} >{title}</Text>
                </View>
            </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "stretch",
    },
    buttonText:{
        fontSize: 30,
        textAlign: "center"
    }
})