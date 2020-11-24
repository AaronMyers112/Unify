import React from "react";
import { StyleSheet, TouchableHighlight, Text, View, Dimensions, Image } from "react-native";

import * as Font from 'expo-font';

export function HomeButton({title="enter a title", onPress = f => f, pic="../../assets/target.png"}) {
    const [loaded] = Font.useFonts({
        SourceSansProLight: require("../../assets/SourceSansPro-Light.ttf"),
        SourceSansProRegular: require("../../assets/SourceSansPro-Regular.ttf"),
    });
    return (
            <TouchableHighlight 
                underlayColor="#c7c7c7" 
                style={styles.button}
                onPress={() => onPress()}
            >
                <View 
                    style={styles.row}
                >
                    <View style={styles.buttonImage}>
                        <Image source={require("../../assets/target.png")} style={{width: 40, height: 40}}/>
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText} >{title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: Dimensions.get("screen").height / 10,
    },
    button: {
        marginTop: 10,
        borderWidth: 2,
        borderTopEndRadius: 50,
        borderBottomStartRadius: 50,
        alignSelf: "stretch",
        backgroundColor:"#77a3bd"
    },
    buttonTextContainer:{
        width: "75%"
    },
    buttonText:{
        fontFamily: "SourceSansProLight",
        fontSize: 30,
        textAlign: "center",
        color:"#1a2c2e",
    },
    buttonImage:{
        borderTopEndRadius: 45,
        borderBottomStartRadius: 45,
        borderWidth: 2,
        width: '25%',
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#f2fcf9"
    }
})