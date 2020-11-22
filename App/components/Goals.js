import React from "react";
import { StyleSheet, FlatList, TouchableHighlight, Text, View } from "react-native";
import { HomeButton } from "./HomeButton"

export function Goals() {
    return (
        <>
            <HomeButton title="Identify Obstacle" />
            <HomeButton title="Obstacle List" />
            <HomeButton title="Goals List" />
            <HomeButton title="Tasks List" />
            <HomeButton title="Finished Events" />
        </>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        alignItems: "center"
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