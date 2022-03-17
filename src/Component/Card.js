import React, {useState} from "react";
import Limiter from "../Middleware/Limiter";

export default function Card({id, title, content, status, setCards, cards}) {

    const [cardEdit, setcardEdit] = useState(false);
    const [titleEdit, settitleEdit] = useState(title);
    const [contentEdit, setcontentEdit] = useState(content);

    // Handle the depletion of 1 card by filtering it out of the list.
    function handleDelete() {
        let newCardList = cards.filter(e => e.id !== id);
        setCards(newCardList);
    }

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

    // Hande the display of some buttons
    function HandleButton() {
        switch(cardEdit) {
            case false:
                switch (status) {
                    case true:
                        return <button type="submit" className="btn btn-warning" id="inputStatus" onClick={() => handleStatus()}>Undone</button>;
                        break;
                    case false:
                        return <button type="submit" className="btn btn-success" id="inputStatus" onClick={() => handleStatus()}>Done</button>;
                        break;
                    default :
                        return <></>
                }
                break;
            case true:
                return <button className="btn btn-warning" onClick={() => SaveEditedCard()}>Save</button>;
                break;
        }
    }

    // Handle the default display of the Edit button
    function HandleModifButton() {
        switch (status) {
            case false:
                if(cardEdit === false) {
                    return <button className="btn btn-secondary btn-sm" onClick={() => {setcardEdit(true);}}>Edit</button>;
                } else {
                    return <></>
                }
                break;
            case true:
                return <></>
                break;
        }
    }

    // Handle the tisplay of either the content or the edit form
    function DisplayCardContent({titleEdit,contentEdit,settitleEdit,setcontentEdit,title,content,cardEdit}) {
        switch(cardEdit) {
            case false:
                return (
                    <>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                    </>
                )
            break;
            case true:
                return (
                    <>
                    <form className="mx-5 mx-auto">
                        <input className="form-control" name="title" defaultValue={titleEdit} onChange={e => settitleEdit(e.target.value)}/>
                        <input className="form-control" name="content" defaultValue={contentEdit} onChange={e => setcontentEdit(e.target.value)}/>
                    </form><br/>
                    </>
                )
            break;
        }
    }

    // Save the edited card to the list
    function SaveEditedCard() {
        setcardEdit(false);
    }

    // return the component
    return (
        <div className="card mb-5 mx-auto" style={{maxWidth:'400px', minWidth:'250px'}}>
            <HandleModifButton />
            <div className="card-body">
                <DisplayCardContent titleEdit={titleEdit} contentEdit={contentEdit} settitleEdit={settitleEdit} setcontentEdit={setcontentEdit} title={title} content={content} cardEdit={cardEdit} />
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                    <div className="col">
                        <HandleButton />
                    </div>
                </div>
            </div>
        </div>
    )
}