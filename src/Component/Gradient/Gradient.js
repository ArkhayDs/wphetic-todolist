import React from "react";
import { useState, useEffect } from "react";

import SetGradient from "./SetGradient";
import GradientCSS from "./GradientCSS";
import GradientBreakpoints from "./GradientBreakpoints";
import Randomizer from "./Randomizer";

export default function Gradient() {

    const [listColors, setlistColors] = useState([{id:1,code:"#fd5b2d"},{id:2,code:"#4505be"},{id:3,code:"#22c2c3"}]);
    const [angle, setAngle] = useState("200");
    const [gradient, setGradient] = useState('');



    return(
        <>
            <br />
            <SetGradient listColors={listColors} angle={angle} setGradient={setGradient} gradient={gradient}/>
            <div className="mx-auto align-middle" style={{width: "95%",background: gradient, border:"5px solid black", borderRadius:"5%", margin:0}}>

                <GradientBreakpoints listColors={listColors} setlistColors={setlistColors} angle={angle} setAngle={setAngle} />

                <Randomizer listColors={listColors} setlistColors={setlistColors} />

                <br />

                <GradientCSS gradient={gradient}/>
            </div>
        </>
    )
}