import React, { Component } from "react"; 
import axios from "axios";

class BasketballPlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      currentPlayer: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  // handleChange = (event) => {

  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  // handleSubmit = (event) => {

  // }

  handleSubmit(event) {
    event.preventDefault();
    // this is where we will pass in the information tracked on state to the API call;
    axios
      .get(`https://nba-players.herokuapp.com/players-stats/${this.state.lastName}/${this.state.firstName}`)
      .then(res => res.data)
      .then(currentPlayer => this.setState({currentPlayer: currentPlayer}))
      .catch(err => console.log(err));
  }

  handleCancel(event) {
    this.setState({firstName: "", lastName: "", currentPlayer: {}});
    console.log(this.state);
  }

  render() {
    // initial render;
    // when state changes, a re-render will occur;
    // so, on the first render, we'll "see" the empty string rendered;
    // on the re-render, we'll see the current player's name and team name;
    // console.log("the state in render", this.state);
    return (
      <div>
      Full Name of Player: {this.state.currentPlayer.name}
      <br></br>
      Team Name of Player: {this.state.currentPlayer.team_name}

      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        <br></br>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <br></br>
        <button>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
      </div>
    )
  }
}

export default BasketballPlayerForm;