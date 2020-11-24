import React from "react";
import { StyleSheet, TouchableHighlight, Text, View, Dimensions, RefreshControl, AsyncStorage } from "react-native";


export function SolutionListItem({id, area, emotion, input, onPress = f => f}) {
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
                        <Text style={styles.emotion}>{emotion}</Text>
                    </View> 
                    <View>
                        <Text style={styles.input}>{input}</Text>
                    </View>
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