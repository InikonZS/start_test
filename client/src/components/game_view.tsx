import React from "react";

interface IGameViewProps {
    isStarted: boolean
}

export function GameView({ isStarted }:IGameViewProps){
    return <div>
        {isStarted ? 'game view' : 'click start'}
    </div>
}