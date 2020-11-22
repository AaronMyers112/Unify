import React from "react"
import { FlatList } from "react-native-gesture-handler";

import { useObstacles } from "./hooks"
import { ObstacleListItem } from "./obstacleListItem"

export function ObstacleList({ navigation }) {
    const{ obstacles, addObstacles } = useObstacles();
    return(
        <>
        
            <FlatList
                data={obstacles}
                renderItem={({ item }) => { 
                    return(
                        
                        <ObstacleListItem 
                            id={item.id}
                            area={item.area}
                            emotion={item.emotion}
                            specific={item.specific}
                            input={item.input}
                            onPress={() => {navigation.navigate("Solutions", { id: item.id, 
                                area: item.area, 
                                emotion: item.emotion, 
                                specific: item.specific, 
                                input: item.input })}}
                        />
                    )
                }}
            />
        </>
    )
}

