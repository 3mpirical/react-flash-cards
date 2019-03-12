import React from "react";

class NewCardForm extends React.Component {
    state = {
        question: "",
        answer: "",
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCard(this.state);
        console.log("new event form submitted");
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
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

export { NewCardForm };