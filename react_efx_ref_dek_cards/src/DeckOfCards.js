// DeckOfCards.js
import React, { useState, useEffect } from "react";
import axios from "axios";

/*
    - When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card.
    - Every time you click the button, display a new card, until there are no cards left in the deck. If you try to draw when there are no cards remaining, an alert message should appear on the screen with the text “Error: no cards remaining!
    - The goal here is to focus on React and not CSS so please get the core functionality working and then get a code review. Do not focus on CSS at all for now.
*/

function DeckOfCards(props) {

    console.log("DECKOFCARDS MOUNTED");
    
    // useState for both the deck and the card that will be used by this component
    const [deck, setDeck] = useState('');
    const [drawnCard, setDrawnCard] = useState('');
    
    // State to keep track of when the cards are being shuffled
    const [isShuffling, setIsShuffling] = useState(false);
    
    // useEffect to get deck of cards from the api and save it in state
    // this is called *after* component first added to DOM
   useEffect(function fetchDeckOfCardsWhenMounted() {
        // GET A NEW SHUFFLED DECK API CALL TO https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
        /** Example response
            {
                "success": true,
                "deck_id": "3p40paa87x90",
                "shuffled": true,
                "remaining": 52
            }
        */
        // Check if there's a deck in localStorage
        const storedDeck = localStorage.getItem("deck");
        if (storedDeck.remaining > 0) {
            // If there's a deck in localStorage, use it while it has cards remaining
            console.log("WE HAVE A DECK");
            setDeck(JSON.parse(storedDeck));
        } else {
            // If there's no deck in localStorage, fetch a new one
            console.log("GETTING A DECK");
            // defining our async axios call
            async function fetchDeck() {
                try {
                    const deckResult = await axios.get(
                    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
                    );
                    setDeck(deckResult.data);
                    // Store the deck in localStorage
                    localStorage.setItem("deck", JSON.stringify(deckResult.data));
                } catch (error) {
                    console.error("Error fetching deck:", error);
                }
            }
            // making the axios call to fecth the deck
            fetchDeck();
        }
        
    }, []); //Empty array to make it only execute once.
    

    const drawCardHandler = async () => {

        console.log("YOU CLICKED DRAW A CARD!!");
        if (deck) {
            try {
            // pop a card from the top of the shuffled deck - use with api calls
            // DRAW A CARD WITH THE API CALL TO https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1
            const cardDrawResult = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
            );
            console.log("Card Draw Result:", cardDrawResult);
            console.log("Card Draw Result Data:", cardDrawResult.data);
            // IF WE GET A NO MORE CARDS ERROR, LET THE USER KNOW with an alert message should appear on the screen with the text "Error: no cards remaining!" and delete the deck from local storage
            if (cardDrawResult.data.remaining === 0) {
                alert("Error: no cards remaining!");
              } else {
                // Update the remaining count in the deck
                const updatedDeck = { ...deck, remaining: cardDrawResult.data.remaining };
                setDeck(updatedDeck);
                
                // Update the deck in local storage
                localStorage.setItem("deck", JSON.stringify(updatedDeck));
        
                setDrawnCard(cardDrawResult.data.cards[0]);
              }
            } catch (error) {
              console.error("Error drawing card:", error);
            }
          }
    }

    const shuffleDeckHandler = async () => {
        // Set the loading state to true
        setIsShuffling(true);

        console.log("SHUFFLING!!!");
        // get the deck id and call the api to shuffle the deck for us pls and thank you
        try {
            // SHUFFLE THE DECK WITH THE API CALL TO https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
            const shuffleResult = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`
                );
                console.log("Shuffle Result:", shuffleResult);
            
            // Update the deck in state and local storage with the shuffled deck
            const shuffledDeck = { ...deck, remaining: shuffleResult.data.remaining };
            setDeck(shuffledDeck);
            localStorage.setItem("deck", JSON.stringify(shuffledDeck));
            
            // set drawnCard back to ''
            setDrawnCard('');
        } catch (error) {
            console.error("Error shuffling deck:", error);
        } finally {
            // Set the loading state back to false when the shuffle is completed
            setIsShuffling(false);
        }
    }

      

    return(
        <div className="DeckOfCards">
            <div className="DeckOfCards-info">
                <p>deck id: <b>{deck ? <i>{deck.deck_id}</i> : <i>- loading -</i>}</b> </p>
                <p>deck remaining: <b>{deck ? <i>{deck.remaining}</i> : <i>- loading -</i>}</b> </p>
            </div>
            <button className="DeckOfCards-draw-button" onClick={drawCardHandler} >Draw A Card</button>
            {isShuffling ? 'Shuffling...' : <button className="DeckOfCards-shuffle-button" onClick={shuffleDeckHandler}> Shuffle </button>}
           

            <div className="DeckOfCards-card-container"> 
                <img 
                    className="DeckOfCards-card-img" 
                    alt="I AM A CARD" 
                    src={drawnCard !== '' ? drawnCard.image : "https://deckofcardsapi.com/static/img/back.png" }
                />
                
            </div>
        </div>
    )
}

export default DeckOfCards;
