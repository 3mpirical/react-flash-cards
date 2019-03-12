import React from "react";

class EditCardForm extends React.Component {
    state = {
        id: this.props.card.id,
        question: this.props.card.question ,
        answer: this.props.card.answer,
        editing: false,
        flipped: this.props.card.flipped,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateCard(this.state);
        console.log("edit event form submitted");
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form  className="edit-card-form" onSubmit={this.handleSubmit} >
                <input 
                    required
                    type="text"
                    placeholder="Question..."
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}
                />
                <input 
                    required
                    type="text"
                    placeholder="...Answer"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                />
                <button type="submit" >Submit</button>

            </form>
        )
    }
}


export { EditCardForm };