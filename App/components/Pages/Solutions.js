import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { addSolutions } from "./addSolutions";
import { SolutionsList } from "./SolutionsList";

const { Navigator, Screen } = createStackNavigator();

export function Solutions ({ navigation }) {
    return (
            <Navigator>
                <Screen name="solutionList" options={{title:"Solution List" }} component={ SolutionsList } />
                <Screen name="addSolution" options={{title:"Add Solution" }} component={ addSolutions } />
            </Navigator>
    )
}