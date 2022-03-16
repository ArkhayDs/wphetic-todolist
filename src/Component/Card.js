export default function Card({id, title, content, status, setCards, cards}) {

    function handleDelete() {
        let newCardList = cards.filter(e => e.id !== id);
        setCards(newCardList);
    }

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

    function HandleButton() {
        switch (status) {
            case true:
                return <button type="submit" className="btn btn-danger" id="inputStatus" onClick={() => handleStatus()}>Undone</button>;
                break;
            case false:
                return <button type="submit" className="btn btn-success" id="inputStatus" onClick={() => handleStatus()}>Done</button>;
                break;
            default :
                return <></>
        }
    }

    return (
        <div className="card mb-5 mx-auto" style={{maxWidth:'450px'}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>

                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger" onClick={() => handleDelete()}>Supprimer</button>
                    </div>
                    <div className="col">
                        <HandleButton />
                    </div>
                </div>
            </div>
        </div>
    )
}