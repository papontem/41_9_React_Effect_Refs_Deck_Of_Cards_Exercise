import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import DeckOfCards from "./DeckOfCards";


function App() {
	// Create a new React application, which contains the following components:

	// App - this component should render the deck of cards, one card at a time.
	// DeckOfCards - Place your state that contains all of the cards here and use effects. This component should render the card component along with the button to draw a card component
	console.log("APP MOUNTED");
	return (
		<div className="App">
			<Header />

			<DeckOfCards/>

			<Footer />
		</div>
	);
}

export default App;
