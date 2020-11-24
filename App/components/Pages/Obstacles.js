import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ObstacleList } from "./ObstacleList";
import { addObstacles } from "./addObstacle";

const { Navigator, Screen } = createStackNavigator();

export function Obstacles ({ navigation }) {
    return (
            <Navigator>
                <Screen name="obstacleList" options={{title:"Obstacle List" }} component={ ObstacleList } />
                <Screen name="addObstacle" options={{title:"Add Obstacle" }} component={ addObstacles } />
            </Navigator>
    )
}