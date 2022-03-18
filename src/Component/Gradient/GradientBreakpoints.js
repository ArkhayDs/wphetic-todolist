import SetColors from "./SetColors";
import SetAngle from "./SetAngle";
import React from "react";

export default function GradientBreakpoints({listColors,setlistColors,angle,setAngle}) {

    return (
        <div className="app-conainer d-flex align-items-center justify-content-around flex-column text-center">
            <SetColors key={listColors[0].id} color={listColors[0]} listColors={listColors} setlistColors={setlistColors} id={listColors[0].id}/>
            <SetColors key={listColors[1].id} color={listColors[1]} listColors={listColors} setlistColors={setlistColors} id={listColors[1].id}/>
            <SetColors key={listColors[2].id} color={listColors[2]} listColors={listColors} setlistColors={setlistColors} id={listColors[2].id}/>
            <SetAngle angle={angle} setAngle={setAngle}/>
        </div>
    )
}