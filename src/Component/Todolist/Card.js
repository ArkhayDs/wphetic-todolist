import React, {useState} from "react";
import DisplayCardContent from "./DisplayCardContent";
import HandleStatusButton from "./Buttons/HandleStatusButton";
import HandleModifButton from "./Buttons/HandleModifButton";
import HandleDeleteButton from "./Buttons/HandleDeleteButton";

export default function Card({id, title, content, status, setCards, cards}) {

    const [cardEdit, setcardEdit] = useState(false);
    const [titleEdit, settitleEdit] = useState(title);
    const [contentEdit, setcontentEdit] = useState(content);

    // Allow the modification of the status from 'todo' to 'done'
    function handleStatus() {
        switch(status) {
            case true:
                status = false;
                break;
            case false:
                status = true;
                break;
        }
        let newCardList = cards.map(e => {
            if(e.id === id) {
                return {...e, status: status
                }
            }
            return e;
        });
        setCards(newCardList);
    }

    // Save the edited card to the list
    function SaveEditedCard() {
        setcardEdit(false);
    }

    // return the component
    return (
        <div className="card mb-5 mx-auto" style={{maxWidth:'400px', minWidth:'250px'}}>
            <HandleModifButton status={status} cardEdit={cardEdit} setcardEdit={setcardEdit} />
            <div className="card-body">
                <DisplayCardContent titleEdit={titleEdit} contentEdit={contentEdit} settitleEdit={settitleEdit} setcontentEdit={setcontentEdit} title={title} content={content} cardEdit={cardEdit} />
                <div className="row">
                    <div className="col">
                        <HandleDeleteButton cards={cards} setCards={setCards} id={id}/>
                    </div>
                    <div className="col">
                        <HandleStatusButton cardEdit={cardEdit} handleStatus={handleStatus} SaveEditedCard={SaveEditedCard} status={status}/>
                    </div>
                </div>
            </div>
        </div>
    )
}