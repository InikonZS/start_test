import React, { useEffect, useRef, useState } from "react";
import "./game_view.css";
import { Block1 } from "./block1";
import { Block2 } from "./block2";
import { Round } from "./round";

interface IGameViewProps {
    isStarted: boolean;
}

export function GameView({ isStarted }:IGameViewProps){
    const wrapperRef = useRef<HTMLDivElement>();
    const [initPosition, setInitPosition] = useState(0);

    return <div className="game_outher" ref={wrapperRef}>
        <div className="game_wrapper">
            <Block1 isStarted={isStarted} wrapperHeight={wrapperRef.current?.getBoundingClientRect().height} onShot={(pos)=>{
                setInitPosition(pos);
            }}></Block1>
            <Block2></Block2>
            {isStarted && <Round initPosition={initPosition}></Round>}
        </div>
    </div>
        
}