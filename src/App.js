import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from './components/Nav';
import Heading from './components/Header';
import Footer from './components/Footer';
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    message: "Click a Flower to Play"
  };

  clickCard = id => {
    const found = this.state.cards.find((card) => card.id === id)
    if (found.clicked === false) {
      found.clicked = true;
      this.state.cards.sort(() => Math.random() - 0.5);
      // this.setState({
      //   score: this.state.score + 1,
      //   message: "Nice!"
      // });

      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1
        });
      }
      if (this.state.score + 1 === 12) {
        this.win();
        // this.setState({
        //   score: 0,
        //   message: "YOU WIN!"
        // });
        // alert("You Win!")
        // this.restart();
      }
      else {
        this.setState({
          score: this.state.score + 1,
          message: "Nice!"
        });
      }
    }
    else {
      this.state.cards.sort(() => Math.random() - 0.5);
      // if (this.state.score > this.state.highScore) {
      //   this.setState({
      //     highScore: this.state.score
      //   });
      // alert("Oops! You clicked that card twice.");
      this.restart();
    }
    // Display the card clicked
    console.log(id);
  }

  restart = () => {
    this.state.cards.forEach((card) => (
      card.clicked = false
    ));
    this.setState({
      score: 0,
      message: "Try to beat the Top Score!"
    });
  };

  win = () => {
    this.state.cards.forEach((card) => (
      card.clicked = false
    ));
    this.setState({
      score: 0,
      message: "YOU WIN!"
    });
    // this.restart();
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
