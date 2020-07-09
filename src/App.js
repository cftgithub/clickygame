import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards
  };

  clickCard = id => {
    // Display the card is clicked
    console.log(id);
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Clicky Game</h1>
        {this.state.cards.map(card => (
          <Card
            clickCard={this.clickCard}
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
