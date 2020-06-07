import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import BasketballPlayerForm from "./components/BasketballPlayerForm";
// import GamesPlayed from "./components/GamesPlayed";
import { BasketballPlayerForm, GamesPlayed } from "./components";

/*

[DONE]: I want to use an external API to grab information about a basketball player;
[DONE]: Specifically, I am concerned with two things for my project: their full name and their team name;

[DONE]: I want a form that allows a user to input the first name and last name of the player;
[DONE]:  - Let's make a separate component that will accomplish this goal;

[DONE]: I want to display/render the full name of the basketball player and their team name;

[DONE]: I want to make a cancel button
  - This will revert us back to not just empty text inputs, but also removes the current player on the state;
  - I'm thinking that this will involve a button, with an onClick listener, and then a handleClick method;

[DONE]: I want to extend the featureset of my application to showcase the amount of games the NBA player played;
  - So, all I need to do is grab the "games_played" key within the JSON Response Object and populate that to the UI;

*/

/*

                                                  <App />
                                                     |
                                                     |
                                                     |
                        <BasketballPlayerForm /> --------- <GamesPlayed />

*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearCurrentPlayer = this.clearCurrentPlayer.bind(this);
  }

  handleSubmit(event, firstName, lastName) {
    event.preventDefault();
    axios
      .get(
        `https://nba-players.herokuapp.com/players-stats/${lastName}/${firstName}`
      )
      .then((res) => res.data)
      .then((currentPlayer) => {
        this.setState({ currentPlayer: currentPlayer });
        console.log("currentPlayer on App State", currentPlayer);
      })
      .catch((err) => console.log(err));
  }

  clearCurrentPlayer() {
    this.setState({currentPlayer: {}});
  }

  render() {
    return (
      <div className="App">
        {console.log("APP STATE", this.state)}
        Full Name of Player: {this.state.currentPlayer.name}
        <br></br>
        Team Name of Player: {this.state.currentPlayer.team_name}

        <BasketballPlayerForm handleSubmit={this.handleSubmit} clearCurrentPlayer={this.clearCurrentPlayer} />
        <GamesPlayed gamesPlayed={this.state.currentPlayer.games_played} />
      </div>
    );
  }
}

export default App;
