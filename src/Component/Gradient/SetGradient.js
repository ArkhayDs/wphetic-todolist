import React from "react";

import {useEffect} from "react";

export default function SetGradient({listColors, angle, setGradient, gradient}) {

    useEffect(() => {
        setGradient('linear-gradient('+angle+'deg, '+ listColors[0].code + ', '+ listColors[1].code + ', '+ listColors[2].code + ')')
        console.log(gradient);
    });

    return (
        <></>
    )
}