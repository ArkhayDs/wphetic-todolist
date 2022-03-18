// Handle the default display of the Edit button
import React from "react";
import HandleButton from "./HandleButton";

export default function HandleModifButton({status, cardEdit, setcardEdit}) {
    switch (status) {
        case false:
            if(cardEdit === false) {
                return <HandleButton customClass="btn-secondary btn-sm" onClick={() => {setcardEdit(true)}} text="Edit" />
            } else {
                return <></>
            }
            break;
        case true:
            return <></>
            break;
    }
}
