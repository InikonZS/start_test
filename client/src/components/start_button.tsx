import React from "react";
import "./start_button.css";
interface IStartButtonProps {
    onClick: ()=>void;
    time: Date;
    isStarted: boolean
}

export function StartButton({ onClick, time, isStarted }: IStartButtonProps){
    return <button className="start_button" onClick={()=>{
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