import React from "react";
import { StyleSheet, TouchableHighlight, Text, View, Dimensions, RefreshControl, AsyncStorage } from "react-native";


export function ObstacleListItem({id, area, emotion, specific, input, onPress = f => f, onRemove = f => f}) {
    return (
        <>
            <TouchableHighlight 
                underlayColor="#c7c7c7"
                onPress={() => onPress()}
            >
                <View style={styles.listItem}>
                    <View style={styles.areaContainer}>
                        <Text style={styles.area}>{area}</Text>
                    </View>
                    <View>
                        <Text style={styles.emotion}>{emotion}({specific})</Text>
                    </View>
                    <View>
                        <Text style={styles.input}>{input}</Text>
                    </View>
                </View>
                
            </TouchableHighlight>
            <TouchableHighlight onPress={() => onRemove() }>
                <View>
                    <Text>-</Text>
                </View>
            </TouchableHighlight>
        </>
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
    areaContainer:{
        margin: Dimensions.get('screen').width / 50
    },
    area: {
        fontSize: 20,
        fontWeight: "300"
    },
    emotion: {
        fontSize: 15,
        fontWeight: "200"
    },
    input: {
        fontSize: 10,
        fontWeight: "100"
    }
})