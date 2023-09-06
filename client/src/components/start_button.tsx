import React from "react";

interface IStartButtonProps {
    onClick: ()=>void;
    time: Date;
    isStarted: boolean
}

export function StartButton({ onClick, time, isStarted }: IStartButtonProps){
    return <button onClick={()=>{
        onClick();
    }}>
        {
        isStarted ? (
            <div>
                {time.getUTCMinutes() ? `${time.getUTCMinutes()} : ${time.getUTCSeconds()}` : `${time.getSeconds()}`}
            </div>
        ):(
            "start"
        )
        }
    </button>
}