import axios from "axios";
/*
    - When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card.
    - Every time you click the button, display a new card, until there are no cards left in the deck. If you try to draw when there are no cards remaining, an alert message should appear on the screen with the text “Error: no cards remaining!
    - The goal here is to focus on React and not CSS so please get the core functionality working and then get a code review. Do not focus on CSS at all for now.
*/

function DeckOfCards(props) {
    
    console.log("DECKOFCARDS MOUNTED");
    // useEffect to get deck of cards from the api and save it in state
    // useState for both the deck and the card that currently selected.

    const getDeck = () => {}
    
    
    const drawCardHandler = () => {
        console.log("YOU CLICKED DRAW A CARD!!");
    }

    return(
        <div className="DeckOfCards">
            <button className="DeckOfCards-draw-button" onClick={drawCardHandler} >Draw A Card</button>
            <div className="DeckOfCards-card-container"> 
                <img 
                    className="DeckOfCards-card-img" 
                    alt="I AM A CARD" 
                    src="https://deckofcardsapi.com/static/img/back.png"
                />
                
            </div>
        </div>
    )
}
export default DeckOfCards;


// /** GitHub Profile Component --- shows info from GH API */

// function ProfileViewer() {
//   const [profile, setProfile] = useState(null);

//   // this is called *after* component first added to DOM
//   useEffect(function fetchUserWhenMounted() {
//     async function fetchUser() {
//       const userResult = await axios.get(
//         "https://api.github.com/users/elie");
//       setProfile(userResult.data);
//     }
//     fetchUser();
//   }, []);

//   return (
//     <div>{profile ? <h2>{profile.name}</h2> : <i>(loading)</i>}</div>
//   );
// };