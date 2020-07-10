import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
import Navbar from './components/Nav';
import Heading from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    message: "Click an Image to Start"
  };

  clickCard = id => {
    const found = this.state.cards.find((card) => card.id === id)
    if (found.clicked === false) {
      found.clicked = true;
      this.state.cards.sort(() => Math.random() - 0.5);
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1
        });
      }
      if (this.state.score + 1 === 12) {
        this.winner();
      }
      else {
        this.setState({
          score: this.state.score + 1,
          message: "Correct!"
        });
      }
    }
    else {
      this.state.characters.sort(() => Math.random() - 0.5);
      this.restart();
    }
    // Display the card is clicked
    console.log(id);
  }
  
  render() {
    return (
      <div>
      <Navbar message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
      <Heading />
      <Wrapper>
        {this.state.cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            click={this.clickCard}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
