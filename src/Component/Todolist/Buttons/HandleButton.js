import React from "react";

export default function HandleButton({customClass,onClick,text, id}) {
    id = {id} ? "" : "";
    let theClass = "btn "+customClass;
    return (
        <button type="submit" id={id} className={theClass} id="inputStatus" onClick={onClick}>{text}</button>
    )
}