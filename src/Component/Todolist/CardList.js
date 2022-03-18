import Card from "./Card";
import React from "react";

export default function CardList({texth1, statusValue, cards, setCards}) {
    const status = statusValue;

    return (
        <>
        <h1>{texth1}</h1>
        <div className="row row-cols-2 row-cols-md-4 g-2 p-5">
            {cards.filter(e => e.status == status).map(
                (card) => (
                    <Card key={card.id} id={card.id} title={card.title} content={card.content} status={card.status} setCards={setCards} cards={cards}/>
                )
            )}
        </div>
        </>
    )
}