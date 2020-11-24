import React from "react"
import { FlatList } from "react-native-gesture-handler";
import { View, Text, TouchableHighlight, Dimensions, StyleSheet } from "react-native";

import { useSolutions } from "../Hooks/hooks"
import { ObstacleListItem } from "../Assets/obstacleListItem"
import { SolutionListItem } from "../Assets/solutionListItem";

export function SolutionsList({ route, navigation }) {
    const { input: input, area: area, emotion: emotion, specific: specific, id: id } = route.params;
    const{ solutions, addSolutions } = useSolutions();
    return(
        <>
            <TouchableHighlight onPress={() => navigation.navigate('Solutions', {screen: 'addSolution', params: {input, area, emotion, specific, id}})} style={styles.addButtonContainer}>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>+ Add</Text>
                    </View>
            </TouchableHighlight>
            {solutions.length == 0? <Text>Add an Obstacle to continue</Text> : null}
            <FlatList
                data={solutions}
                renderItem={({ item }) => { 
                    return(
                        <SolutionListItem 
                            id={item.id}
                            area={item.area}
                            emotion={item.emotion}
                            input={item.input}
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