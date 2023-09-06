import React, { useEffect, useRef } from "react";

interface IBlock1Props {
    onShot: (pos: number)=>void;
    wrapperHeight: number;
    isStarted: boolean;
}

export function Block1({ onShot, isStarted, wrapperHeight}: IBlock1Props){
    const blockRef = useRef<HTMLDivElement>();
    useEffect(()=>{
        const blockBounds = blockRef.current.getBoundingClientRect();
        const relTop = ((blockBounds.top - wrapperHeight / 2) / blockBounds.height * 100);
        console.log(wrapperHeight, blockBounds.top, relTop);
        onShot(relTop);
    }, [isStarted]);
    
    return  <div className="game_block game_block1" ref={blockRef}>
        1
    </div>
}