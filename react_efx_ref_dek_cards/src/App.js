import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import DeckOfCards from "./DeckOfCards";


function App() {
	// Create a new React application, which contains the following components:

	// App - this component should render the deck of cards, one card at a time.
	// When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card.
	//Every time you click the button, display a new card, until there are no cards left in the deck. If you try to draw when there are no cards remaining, an alert message should appear on the screen with the text “Error: no cards remaining!
	// The goal here is to focus on React and not CSS so please get the core functionality working and then get a code review. Do not focus on CSS at all for now.
	return (
		<div className="App">
			<Header />

			<DeckOfCards/>

			<Footer />
		</div>
	);
}

export default App;
