// Hande the display of some buttons
import React from "react";
import HandleButton from "./HandleButton";

export default function HandleStatusButton({cardEdit, handleStatus, SaveEditedCard, status}) {
    switch(cardEdit) {
        case false:
            switch (status) {
                case true:
                    return  <HandleButton customClass="btn-warning" onClick={handleStatus} text="Undone" />;
                    break;
                case false:
                    return <HandleButton customClass="btn-success" onClick={handleStatus} text="Done" />;
                    break;
                default :
                    return <></>
            }
            break;
        case true:
            return <HandleButton customClass="btn-warning" onClick={SaveEditedCard} text="Save" />;
            break;
    }
}