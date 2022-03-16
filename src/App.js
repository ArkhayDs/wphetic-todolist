import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from "./Component/Title";
import Card from "./Component/Card";
import Form from "./Component/Form";

export default function App() {

    const [cards, setCards] = useState([]);

  return (

    <>
        <Title/>
        <Form setCards={setCards}/>
        <h1>Liste à faire :</h1>
        <div className="row row-cols-2 row-cols-md-4 g-2 p-5">
            {cards.filter(e => e.status == false).map(
                (card) => (
                    <Card key={card.id} id={card.id} title={card.title} content={card.content} status={card.status} setCards={setCards} cards={cards}/>
                )
            )}
        </div>


        <h1>Liste done :</h1>
        <div className="row row-cols-2 row-cols-md-4 g-2 p-5">
            {cards.filter(e => e.status == true).map(
                (card) => (
                    <Card key={card.id} id={card.id} title={card.title} content={card.content} status={card.status} setCards={setCards} cards={cards}/>
                )
            )}
        </div>
    </>
  )
}