import {useState} from "react"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default function Form({setCards,limiter}) {
    const [formTitle, setformTitle] = useState('');
    const [formContent, setformContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (formTitle !== "" && formContent !== "") {
            const newCard = {
                id: generateUniqueID(),
                title: formTitle,
                content: formContent,
                status: false
            };

            if(limiter === false) {
                setCards(prev => [...prev, newCard]);
            } else {
                document.getElementById('addTodo').onclick = () => { alert("Wowowo, tout doux bijou. Tu as déjà 10 cartes de to-do à faire. Tu penses pas qu'il serait temps de s'y mettre d'abord ?");}
            }

        }
    }

    return (
        <form className="m-5 mx-auto" style={{maxWidth: '450px'}} onSubmit={handleSubmit}>
            <h1 className="text-center">Alimentez votre todo !</h1>
            <div className="mb-3">
                <label htmlFor="inputTitle" className="form-label">Nom de la tâche</label>
                <input type="title" className="form-control" id="inputTitle" aria-describedby="titleHelp"
                       onChange={e => setformTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputContent" className="form-label">Contenu de la tâche</label>
                <input type="content" className="form-control" id="inputContent" aria-describedby="contentHelp"
                       onChange={e => setformContent(e.target.value)}/>
            </div>
            <button type="submit" id="addTodo" className="btn btn-primary">Submit</button>
        </form>
    )
}