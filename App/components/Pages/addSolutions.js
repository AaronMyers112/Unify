import React, { useState, useRef } from "react";
import { StyleSheet,  Text, View, Dimensions, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { generate } from "shortid";
import { HomeButton } from "../Assets/HomeButton";
import { useObstacles, useSolutions } from "../Hooks/hooks";

export function addSolutions({ route, navigation }) {
    const { input: input, area: area, emotion: emotion, specific: specific, id: id } = route.params;

    var solution = {
        id: generate(),
        area: "Entertainment",
        emotion: "forward",
        input: ""
    }

    const [inputValue, setValue] = useState("");
    const txtInput = useRef();
    console.log(input)
    const {solutions, addSolutions} = useSolutions();
    return (
        <>
            <View style = {styles.container}>
                <View style={styles.obstacle_container}>
                    <View><Text style={styles.headerText}>Obstacle</Text></View>
                    <View><Text>{emotion}</Text></View>
                    <View><Text>{area}</Text></View>
                    <View><Text>{input}</Text></View>
                </View>

                <View style = {styles.solution_container}>
                    <View><Text style = {styles.headerText}>Solution</Text></View> 
                    <View style={styles.dropDown_column}>
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
                            onChangeItem={item => solution.area = item.value}
                            />
                        </View>
                        <View style={styles.dropDown}>
                            <DropDownPicker 
                                items={[
                                    {label:'Forward Looking', value: 'forward'},
                                    {label:'Past Experience', value: 'past'},
                                    {label:'Physical Health', value: 'physical'},
                                    {label:'Socially Directed', value: 'social'},
                                    {label:'Competence', value: 'comp'},
                                    {label:'Ethics', value: 'ethics'}
                                ]}
                                defaultValue = "forward"
                                zIndex={1}
                                containerStyle={{height: 40}}
                                onChangeItem={item=> solution.emotion = item.value}
                            />
                        </View>
                    </View>
                    <View style={styles.inputCnt}>
                        <TextInput 
                            ref={txtInput}
                            stlye={styles.txtInput}
                            value={inputValue}
                            onChangeText={setValue}
                            autoCapitalize="none"
                            placeHolder="What is the solution?"
                        />
                    </View>
                    <HomeButton title="Submit" onPress={() => {
                        solution.input = inputValue;
                        addSolutions(solution.id, solution.area, solution.emotion, solution.input);
                        console.log(solution);
                    }}/>
                    <HomeButton title="Next" onPress={() => {navigation.navigate("Solutions", {screen: "solutionsList"})
                        
                    }}/>
                </View>
            </View> 
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        alignItems: "center",
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    obstacle_container:{
        margin: Dimensions.get('screen').height / 50,
        borderBottomWidth: 2,
        borderBottomColor: "black",
        height: Dimensions.get('screen').height / 5,
        width: Dimensions.get('screen').width - 20
    },
    solution_container:{
        margin: Dimensions.get('screen').height / 50,
        height: Dimensions.get('screen').height / 5,
        width: Dimensions.get('screen').width - 10
    },
    headerText:{
        fontSize: Dimensions.get('screen').width / 10,
        borderBottomWidth: 0.5,
        borderBottomColor:"grey",
        textAlign: "center",
        margin: Dimensions.get('screen').height / 60
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
        padding: 5
    }
})