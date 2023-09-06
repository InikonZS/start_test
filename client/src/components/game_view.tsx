import React from "react";
import "./game_view.css";

interface IGameViewProps {
    isStarted: boolean
}

export function GameView({ isStarted }:IGameViewProps){
    return <div className="game_wrapper">
        {isStarted ? (
             ''
        ) : ''}
        <>
            <div className="game_block1">
                1
            </div>
            <div className="game_block2">
                2
            </div>
            <div className="game_round">
                r
            </div>
        </>  
    </div>
}