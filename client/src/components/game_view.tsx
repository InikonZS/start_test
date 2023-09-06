import React, { useEffect, useRef, useState } from "react";
import "./game_view.css";

interface IGameViewProps {
    isStarted: boolean;
}

export function GameView({ isStarted }:IGameViewProps){
    const blockRef = useRef<HTMLDivElement>();
    const wrapperRef = useRef<HTMLDivElement>();
    const [initPosition, setInitPosition] = useState(0);
    
    useEffect(()=>{
        const wrapperBounds = wrapperRef.current.getBoundingClientRect();
        const blockBounds = blockRef.current.getBoundingClientRect();
        const relTop = ((blockBounds.top - wrapperBounds.height / 2) / blockBounds.height * 100);
        console.log(wrapperBounds.height, blockBounds.top, relTop);
        setInitPosition(relTop);
    }, [isStarted]);

    return <div className="game_wrapper" ref={wrapperRef}>
        <div className="game_block1" ref={blockRef}>
            1
        </div>
        <div className="game_block2">
            2
        </div>
        {isStarted && <div className="game_round" style={{'--init-position': initPosition + '%'}}>
            r
        </div>}
    </div>
}