import React, { useEffect, useRef } from "react";

interface IRoundProps {
    initPosition: number;
}

export function Round({ initPosition }: IRoundProps){
    return <div className="game_block game_round" style={{'--init-position': initPosition + '%'}}>
        r
    </div>
}