import React from "react";
import { getPathFromState, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//importing components
import { Home } from "./components/home"
import { Obstacles } from "./components/Obstacles"
import { Solutions } from "./components/Solutions"
import { Goals } from "./components/Goals"
import { Tasks } from "./components/Tasks"
import { Finished } from "./components/Finished"
import { ObstacleList } from "./components/ObstacleList"

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home"  component={ Home } />
        <Screen name="Obstacles"  options={{title:"Obstacle List" }} component={ Obstacles } />
          <Screen name="ObstacleList" options={{title: "Obstacle List"}} component={ ObstacleList } />
        <Screen name="Solutions"  options={{title: "Solutions" }} component={ Solutions } />
        <Screen name="Goals"  options={{title: "Goals List" }} component={ Goals } />
        <Screen name="Tasks"  options={{title: "Tasks List" }} component={ Tasks } />
        <Screen name="Finished"  options={{title: "Finished Events" }} component={ Finished } />
        
      </Navigator>
    </NavigationContainer>
  )
}