import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HomeButton } from "../Assets/HomeButton"

import * as Font from 'expo-font';
import { Link } from "@react-navigation/native";



export function Home( { navigation }) {
    const [loaded] = Font.useFonts({
        SourceSansProLight: require("../../assets/SourceSansPro-Light.ttf"),
        SourceSansProRegular: require("../../assets/SourceSansPro-Regular.ttf"),
    });
    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <View style={styles.banner_container}>
                <View style={styles.banner}>
                    <Text style={styles.headerTxt}>Unify</Text>
                   
                </View>
                
            </View>
            <View style={styles.bannerTextContainer}>
                <View style={styles.bannerText}>
                    <Text style={styles.text}>If you live an honest life, you will make friends</Text>
                </View>
            </View>
            <View style={styles.rounded}></View>
            <View style={styles.buttonContainer}>
                <HomeButton title="Identify Obstacle" onPress={() => navigation.navigate("Obstacles")} pic="../../assets/target.png" />
                <HomeButton title="Solutions List" onPress={() => navigation.navigate("Solutions")} pic="../../assets/target.png"/>
                <HomeButton title="Goals List" onPress={() => navigation.navigate("Goals")} pic="../../assets/target.png"/>
                <HomeButton title="Tasks List" onPress={() => navigation.navigate("Tasks")} pic="../../assets/target.png"/>
                <HomeButton title="Finished Events" onPress={() => navigation.navigate("Finished")} pic="../../assets/target.png"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#151e1f",
        height: Dimensions.get("screen").height
    },
    banner_container:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    bannerTextContainer:{
        backgroundColor:"#77a3bd",
        height: '10%',
        width: '120%',
        borderBottomStartRadius: 800,
        borderBottomEndRadius: 800,
        overflow : 'hidden',
        right: '10%'
    },
    bannerText:{
        width: Dimensions.get("screen").width - 5,
        padding: 20,
        left: '10%',
        
    },
    text:{
        fontSize: 20,
        color: "#5e7480",
        textAlign: "center",
        fontFamily: "SourceSansProLight"
    },
    banner:{
        alignItems: "center",
        backgroundColor: "#77a3bd",
        width: Dimensions.get("screen").width,

    },
    headerTxt:{
        fontSize: 28,
        color: "#d0d7db",
        fontFamily: "SourceSansProRegular"
    },
    buttonContainer:{
        height: Dimensions.get("screen").height / 1.33,
        marginTop: Dimensions.get('screen').height / 40,
        width: Dimensions.get("screen").width - 20,
        alignSelf: "center"
    },
})