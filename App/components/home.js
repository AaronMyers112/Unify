import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { HomeButton } from "./HomeButton"

export function Home( { navigation }) {
    return (
        <>
            <View style={styles.banner}>
                <Text style={styles.bannerTxt}>Unify</Text>
            </View>

            <HomeButton title="Identify Obstacle" onPress={() => navigation.navigate("Obstacles")} />
            <HomeButton title="Solutions List" onPress={() => navigation.navigate("Solutions")}/>
            <HomeButton title="Goals List" onPress={() => navigation.navigate("Goals")}/>
            <HomeButton title="Tasks List" onPress={() => navigation.navigate("Tasks")}/>
            <HomeButton title="Finished Events" onPress={() => navigation.navigate("Finished")}/>
        </>
    )
}

const styles = StyleSheet.create({
    banner:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    bannerTxt:{
        fontSize: Dimensions.get('screen').height / 20,
        margin: 10,
        padding: 5
    }
})