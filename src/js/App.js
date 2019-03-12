import React, { Component } from 'react';
import { NewCardForm } from "./NewCardForm";
import { CardsList } from "./CardsList";

class App extends Component {
  state = {
    cards: [
      {id: 1, question: "Why is the sky blue?", answer: "It just is.", editing: false, flipped: false},

      {id: 2, question: "What is a mineral?", answer: "Chemicals arranged in repeating patterns (crystals)", editing: false, flipped: false},

      {id: 3, question: "Why do politicians lie?", answer: "They believe it is for the greater good.", editing: false, flipped: false},

      {id: 4, question: "Why are deserts dry?", answer: "Places are deserts because they are dry.", editing: false, flipped: false},

      {id: 5, question: "Is Santa Clause real?", answer: "No. Just, no.", editing: false, flipped: false},
    ]
  };

  addCard = (card) => {
    card.editing = false;
    card.flipped = false;
    card.id = this.state.cards.length * Math.random();
    const cards = [card, ...this.state.cards];
    this.setState({ cards })
  }

  deleteCard = (id) => {
    const cards = this.state.cards.filter((card) => {
      if(card.id !== id) return card;
    })
    this.setState({ cards });
  }

  updateCard = (updatedCard) => {
    const cards = this.state.cards.map((card) => {
      return (updatedCard.id === card.id)? updatedCard : card;
    })
    this.setState({ cards });
  }

  setEditedTrue = (id) => {
    const cards = this.state.cards.map((card) => {
      if(card.id === id) card.editing = true;
      return card;
    })
    this.setState({ cards });
  }

  toggleFlipped = (id) => {
    const cards = this.state.cards.map((card) => {
      if(card.id === id) card.flipped = !card.flipped;
      return card;
    });
    this.setState({ cards });
  }


  render() {
    return (
      <div className="app-container">
        <h1>Note Cards</h1>
        <hr/>
        <h3>Create New Card</h3>
        < NewCardForm addCard={this.addCard} />
        <hr/>
        <CardsList 
          cards={this.state.cards}
          setEditedTrue={this.setEditedTrue}
          deleteCard={this.deleteCard}
          updateCard={this.updateCard}
          toggleFlipped={this.toggleFlipped}
        />
      </div>
    );
  }
}

export default App;
