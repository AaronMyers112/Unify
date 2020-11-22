import { useEffect, useState } from 'react';
import { AsyncStorage } from "react-native";

export const useObstacles = () => {
    const [obstacles, setObstacels] = useState([]);

    const loadObstacles = async () => {
        const obstacleData = await AsyncStorage.getItem("@OrganisationApp:Obstacles");

        if(obstacleData) {
            const obstacles = JSON.parse(obstacleData);
            setObstacels(obstacles); 
        }
    }

    useEffect(() => {
        if (obstacles.length) return;
        loadObstacles();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("@OrganisationApp:Obstacles", JSON.stringify(obstacles));
    }, [obstacles]);

    const addObstacles = (id, area, emotion, specific, input) => {
        const newObstacle = {id, area, emotion, specific, input}
        setObstacels([newObstacle, ...obstacles])
    };

    return{obstacles, addObstacles};
}