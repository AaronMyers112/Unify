import React from "react";
import { StyleSheet, TouchableHighlight, Text, View, Dimensions } from "react-native";

export function ObstacleListItem({id, area, emotion, specific, input, onPress = f => f}) {
    return (
            <TouchableHighlight 
                underlayColor="#c7c7c7"
                onPress={() => onPress()}
            >
                <View 
                    style={styles.listItem}
                >
                    <View style={styles.area}>
                        <Text>{area}</Text>
                    </View>
                    <View>
                        <Text>{emotion}({specific})</Text>
                    </View>
                    <View>
                        <Text>{input}</Text>
                    </View>
                </View>
            </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listItem:{
        margin: Dimensions.get("screen").width / 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "gray"
    },
    area: {

    }
})