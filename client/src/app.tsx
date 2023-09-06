import React, { useEffect, useState } from "react";
import {GameView} from "./components/game_view";
import {StartButton} from "./components/start_button";

export function App(){
    const [isStarted, setStarted] = useState(false);
    const [initialTime, setInitialTime] = useState(0);
    const [timerValue, setTimerValue] = useState(0);
    const roundTime = 10000;
    useEffect(()=>{
        if (!isStarted) return;

        const timer = setInterval(()=>{
            const nextTimerValue = Math.max(roundTime - (Date.now() - initialTime), 0);
            setTimerValue(nextTimerValue);
            if (nextTimerValue == 0){
                setStarted(false);
            }
        }, 200);

        return ()=>{
            clearInterval(timer);
        }
    }, [isStarted]);

    return <div>
        <StartButton 
            onClick={()=>{
                if (!isStarted){
                    console.log('start')
                    setStarted(true);
                    setInitialTime(Date.now());
                }
            }}
            isStarted={isStarted}
            time={new Date(timerValue)}
        ></StartButton>
        <GameView isStarted={isStarted}></GameView>
    </div>
}