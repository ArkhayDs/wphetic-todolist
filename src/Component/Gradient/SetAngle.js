import React from "react";

export default function SetAngle({angle,setAngle}) {
    return(
        <div className="form-group align-items-center justify-content-center gap-3 mb-3">
            <label htmlFor="setAngle" className="text-warning" style={{fontWeight:"bold",fontSize:"1.5em"}}>Set Angle</label>
            <input type="number" className="form-control"  name="setAngle" value={angle} onChange={e => {setAngle(e.target.value)}}></input>
            <input type="range" className="form-range" name="setAngle" min="0" max="360" value={angle} onChange={e => {setAngle(e.target.value)}}></input>
        </div>
    )
}