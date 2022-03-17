import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Title from "./Component/Title";
import Form from "./Component/Form";
import CardList from "./Component/CardList";
import Limiter from "./Middleware/Limiter";

export default function App() {

    // TODO : voir les getElementById -> l'alerte reste après le 1er element supprimé

    const [cards, setCards] = useState([]);
    const [limiter,setLimiter] = useState(false);

  return (
    <>
        <Title/>
        <Form setCards={setCards} limiter={limiter}/>
        <CardList texth1={"Tâches à faire !"} statusValue={false} cards={cards} setCards={setCards} />
        <CardList texth1={"Tâches faites !"} statusValue={true} cards={cards} setCards={setCards} />
        <Limiter cards={cards} setLimiter={setLimiter} limiter={limiter}/>
    </>
  )
}