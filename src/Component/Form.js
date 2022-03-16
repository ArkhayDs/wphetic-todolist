import {Component} from "react"
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default class Form extends Component {
    setCards = this.props.setCards;

    constructor(props) {
        super(props);

        this.state = {
            title:"",
            content:"",
            status:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTitle = (e) => {
        this.setState({title: e.target.value});
    }

    getContent = (e) => {
        this.setState({content: e.target.value});
    }

    handleSubmit (event) {
        event.preventDefault();
        if (this.state.title !== "" && this.state.content !== "") {
            const newCard = {
                id: generateUniqueID(),
                title: this.state.title,
                content: this.state.content,
                status: false
            };

            this.setCards(prev => [...prev, newCard]);
        }
    }

    render() {
        return (
            <form className="m-5 mx-auto" style={{maxWidth: '450px'}} onSubmit={this.handleSubmit}>
                <h1 className="text-center">Alimentez votre todo !</h1>
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Nom de la tâche</label>
                    <input type="title" className="form-control" id="inputTitle" aria-describedby="titleHelp"
                           onChange={this.getTitle}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputContent" className="form-label">Contenu de la tâche</label>
                    <input type="content" className="form-control" id="inputContent" aria-describedby="contentHelp"
                           onChange={this.getContent}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

