import { generate } from "shortid";
import React, { useState, useRef } from "react";
import { StyleSheet,  Text, View, Dimensions, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { HomeButton } from "./HomeButton";
import { useObstacles } from "./hooks"




export function Obstacles({ navigation }) {
    const {obstacles, addObstacles} = useObstacles();

    const [inputValue, setValue] = useState("");
    const input = useRef();

    {/* object to store the data of the page */}
    var obstacle ={
            id: generate(), 
            input: "",
            area: "Entertainment",
            emotion: "Forward Thinking",
            specific: "Entertainment",
    };

    return (
        <View stlye={styles.container}>
            {/* header for the page */}
            <View style={styles.header}>
                <Text style={styles.headerTxt}>Use this Page to record obstacles impacting your well being</Text>
            </View>
             {/* first drop down menu */}
             <View style={styles.dropDown}>
                <DropDownPicker 
                    items={[
                        {label:'Entertainment', value: 'Entertainment'},
                        {label:'Family', value: 'Family'},
                        {label:'Finance', value: 'Finance'},
                        {label:'Health', value: 'Health'},
                        {label:'Home', value: 'Home'},
                        {label:'Personal', value: 'Personal'},
                        {label:'Relationship', value: 'Relationship'},
                        {label:'Social', value: 'Social'},
                        {label:'Study', value: 'Study'},
                        {label:'Work', value: 'Work'},
                        {label:'Other', value: 'Other'},
                    ]}
                    defaultValue = "Entertainment"
                    
                    containerStyle={{height: 40}}
                    /* adds the dropdown data to object */
                    onChangeItem={item => obstacle.area = item.value}

                />
            </View>
            
                    
            {/* Second set of drop down menus */}
            <View style={[styles.dropDown, styles.row]}>
                <View style={styles.dropDown}>
                    <DropDownPicker 
                        items={[
                            {label:'Forward Looking', value: 'Forward Looking'},
                            {label:'Past Experience', value: 'Past Experience'},
                            {label:'Physical Health', value: 'Physical Health'},
                            {label:'Socially Directed', value: 'Socially Directed'},
                            {label:'Competence', value: 'Competence'},
                            {label:'Ethics', value: 'Ethics'}
                        ]}
                        defaultValue = "Forward Looking"
                        containerStyle={{width:Dimensions.get('screen').width / 2.2, height:40 }}
                        zIndex={1}
                        /* adds dropdown data to object */
                        onChangeItem={item=> obstacle.emotion = item.value}
                    />
                </View>
                <View style={styles.dropDown}>
                    <DropDownPicker 
                        items={[
                            {label:'Entertainment', value: 'Entertainment'},
                            {label:'Family', value: 'Family'},
                            {label:'Finance', value: 'Finance'},
                            {label:'Health', value: 'Health'},
                            {label:'Home', value: 'Home'},
                            {label:'Personal', value: 'Personal'},
                            {label:'Relationship', value: 'Relationship'},
                            {label:'Social', value: 'Social'},
                            {label:'Study', value: 'Study'},
                            {label:'Work', value: 'Work'},
                            {label:'Other', value: 'Other'},
                        ]}
                        defaultValue = "Entertainment"
                        containerStyle={{width:Dimensions.get('screen').width / 2.2, height: 40}}
                        zIndex={1}
                        /* adds dropdown data to object */
                        onChangeItem={item=>  obstacle.specific = item.value}
                    />
                </View>
            </View>
            <View style={styles.inputCnt}>
                <TextInput 
                    ref={input}
                    stlye={styles.txtInput}
                    value={inputValue}
                    onChangeText={setValue}
                    autoCapitalize="none"
                    placeHolder="what is the obstacle?"
                />
            </View>
            <HomeButton 
                title="Submit" 
                style={styles.submit} 
                onPress={() => { 
                    /* adds the input value to the object just before adding to JSON data base */
                    obstacle.input = inputValue;
                    /* reseting fields on the page allowing for next addition */
                    input.current.blur();
                    setValue("");
                    /* adds the data to the JSON file */
                    addObstacles(obstacle.id, obstacle.area, obstacle.emotion, obstacle.specific, obstacle.input);
                }}
            />  
            <HomeButton 
                title="Next" 
                style={styles.submit} 
                onPress={() => navigation.navigate('ObstacleList', {screen: 'ObstacleList'})}
            />      

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "column"
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    header:{
        margin: 10,
        padding: 5
    },
    headerTxt:{
        fontSize: Dimensions.get('screen').height / 50,
        textAlign: "center"
    },
    dropDown:{
        margin: 10
    },
    txtInput :{
        margin: 10
    },
    inputCnt:{
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10
    },
    submit:{
        alignSelf: "flex-end"
    }
})