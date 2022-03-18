import Form from "./Form";
import CardList from "./CardList";
import Limiter from "../../Middleware/Limiter";
import React, {useState} from "react";

export default function Todolist() {

    const [cards, setCards] = useState([]);
    const [limiter,setLimiter] = useState(false);

    return (
        <>
            <Form setCards={setCards} limiter={limiter}/>
            <CardList texth1={"Tâches à faire !"} statusValue={false} cards={cards} setCards={setCards} />
            <CardList texth1={"Tâches faites !"} statusValue={true} cards={cards} setCards={setCards} />
            <Limiter cards={cards} setLimiter={setLimiter} limiter={limiter}/>
        </>
    )
}