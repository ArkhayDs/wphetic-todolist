// Handle the tisplay of either the content or the edit form
import React from "react";

export default function DisplayCardContent({titleEdit,contentEdit,settitleEdit,setcontentEdit,title,content,cardEdit}) {
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