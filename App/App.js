import React from "react";
import { getPathFromState, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//importing components
import { Home } from "./components/Pages/home"
import { Obstacles } from "./components/Pages/Obstacles"
import { Solutions } from "./components/Pages/Solutions"
import { Goals } from "./components/Pages/Goals"
import { Tasks } from "./components/Pages/Tasks"
import { Finished } from "./components//Pages/Finished"
import { ObstacleList } from "./components/Pages/ObstacleList"
import { SolutionsList } from "./components/Pages/SolutionsList";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home"  component={ Home } />
        <Screen name="Obstacles"   component={ Obstacles } />
        <Screen name="Solutions"  options={{ title: "Solutions" }} component={ Solutions } />
        <Screen name="SolutionsList" options={{ title: "SolutionsList" }} component={ SolutionsList } />
        <Screen name="Goals"  options={{title: "Goals List" }} component={ Goals } />
        <Screen name="Tasks"  options={{title: "Tasks List" }} component={ Tasks } />
        <Screen name="Finished"  options={{title: "Finished Events" }} component={ Finished } />
        
      </Navigator>
    </NavigationContainer>
  )
}