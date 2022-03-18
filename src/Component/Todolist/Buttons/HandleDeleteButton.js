// Handle the depletion of 1 card by filtering it out of the list.
import React from "react";
import HandleButton from "./HandleButton";

export default function HandleDeleteButton({cards,setCards,id}) {
    return (
        <HandleButton customClass="btn-danger" onClick={() => {
            let newCardList = cards.filter(e => e.id !== id);
            setCards(newCardList)
        }} text="Delete" />
    )
}