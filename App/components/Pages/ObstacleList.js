import React, {useEffect, useCallback} from "react"
import { FlatList } from "react-native-gesture-handler";
import { View, Text, TouchableHighlight, Dimensions, StyleSheet } from "react-native";

import { useObstacles } from "../Hooks/hooks"
import { ObstacleListItem } from "../Assets/obstacleListItem"
import { addObstacles } from "./addObstacle";
import { useFocusEffect } from "@react-navigation/native";



export function ObstacleList({ navigation }) {
    const{ obstacles, addObstacles, removeItem } = useObstacles();
    return(
        <>
            <TouchableHighlight onPress={() => navigation.navigate('Obstacles', {screen: 'addObstacle'})} style={styles.addButtonContainer}>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>+ Add</Text>
                    </View>
            </TouchableHighlight>
            {obstacles.length == 0? <Text>Add an Obstacle to continue</Text> : null}
            <FlatList
                data={obstacles}
                renderItem={({ item }) => { 
                    return(
                        
                        <ObstacleListItem 
                            id={item.id}
                            area={item.area}
                            emotion={item.emotion}
                            specific={item.specific}
                            input={item.input}
                            onPress={() => {navigation.navigate("Solutions", {screen: "solutionList", params:{id: item.id, 
                                area: item.area, 
                                emotion: item.emotion, 
                                specific: item.specific, 
                                input: item.input}})}}
                            onRemove={() => removeItem(item.id)}
                        />
                    )
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    addButtonContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        paddingBottom: Dimensions.get("screen").width / 15,
        paddingTop: Dimensions.get("screen").width / 20,        
        justifyContent: "flex-end",
    },
    addButton:{
        width: Dimensions.get("screen").width / 4,

    },
    addButtonText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "grey"
    }
})