import React from "react";


const Card = ({ card, setEditedTrue, deleteCard, toggleFlipped }) => {

    return (
        <div className="card">
            <div className="card__type"> { card.flipped? "Answer:" : "Question:" } </div>
            <div className="card__text">
                { card.flipped? card.answer : card.question } 
            </div>
            <button onClick={() => setEditedTrue(card.id) } className="card__edit button" >Edit</button>
            <button onClick={() => deleteCard(card.id) } className="card__delete button" >Delete</button>
            <button onClick={() => toggleFlipped(card.id) } className="card__flip button" >Flip</button>
        </div>
    )
};


export { Card };