import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from "./Component/Title";
import Form from "./Component/Form";
import CardList from "./Component/CardList";

export default function App() {

    const [cards, setCards] = useState([]);

  return (
    <>
        <Title/>
        <Form setCards={setCards}/>
        <CardList texth1={"Tâches à faire !"} statusValue={false} cards={cards} setCards={setCards} />
        <CardList texth1={"Tâches faites !"} statusValue={true} cards={cards} setCards={setCards} />
    </>
  )
}