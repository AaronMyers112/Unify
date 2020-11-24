import { useEffect, useState } from 'react';
import { AsyncStorage } from "react-native";
import { Solutions } from '../Pages/Solutions';

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

    const addObstacles = (id, area, emotion, specific, input ) => {
        const newObstacle = {id, area, emotion, specific, input}
        setObstacels([newObstacle, ...obstacles])
    };
    
    const removeItem = (id) => {
        AsyncStorage.removeItem(id);
    };

    return{obstacles, addObstacles, removeItem};
}

export const useSolutions = () => {
    const [solutions, setSolutions] = useState([]);

    const loadSolutions = async () => {
        const solutionData = await AsyncStorage.getItem("@OrganisationApp:Solutions");

        if (solutionData) {
            const solutions = JSON.parse(solutionData);
            setSolutions(solutions)
        }
    }

    useEffect(() => {
        if(solutions.length) return;
        loadSolutions();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("@OrganisationApp:Solutions", JSON.stringify(solutions));
    }, [solutions]);

    const addSolutions = (id, area, emotion, input) => {
        const newSolution = {id, area, emotion, input}
        setSolutions([newSolution, ...solutions])
    };

    return{solutions, addSolutions}
}