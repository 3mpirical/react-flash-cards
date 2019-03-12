import React from "react";
import { Card } from "./Card";
import { EditCardForm } from "./EditCardForm";

const CardsList = ({ cards, setEditedTrue, deleteCard, updateCard, toggleFlipped }) => {

    const renderCards = (cards) => {
        return cards.map((card, index) => (
            (card.editing)?
                <EditCardForm key={card.id} card={card} updateCard={updateCard} />
            : 
                <Card 
                    key={index} 
                    card={card} 
                    setEditedTrue={setEditedTrue}
                    deleteCard={deleteCard}
                    toggleFlipped={toggleFlipped}
                />
        ));
    };

    return (
        <div className="cards-container" >
            { renderCards(cards) }
        </div>
    )
}


export { CardsList };