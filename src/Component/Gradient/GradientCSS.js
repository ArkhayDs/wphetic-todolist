import React from "react";

export default function GradientCSS({gradient}) {

    return (
        <div className="text-center">
            <h4>Add to your clipboard :</h4>
            <button className="btn btn-outline-black" style={{fontSize:"1.5em"}} onClick={() => {navigator.clipboard.writeText(gradient)}}>{gradient}</button>
        </div>
    )
}