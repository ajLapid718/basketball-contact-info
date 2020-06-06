import React from 'react';
import './App.css';
import BasketballPlayerForm from "./BasketballPlayerForm";

/*

[DONE]: I want to use an external API to grab information about a basketball player;
[DONE]: Specifically, I am concerned with two things for my project: their full name and their team name;

[DONE]: I want a form that allows a user to input the first name and last name of the player;
[DONE]:  - Let's make a separate component that will accomplish this goal;

[DONE]: I want to display/render the full name of the basketball player and their team name;

I want to make a cancel button
  - This will revert us back to not just empty text inputs, but also removes the current player on the state;
  - I'm thinking that this will involve a button, with an onClick listener, and then a handleClick method;

*/

function App() {
  return (
    <div className="App">
      <BasketballPlayerForm />
    </div>
  );
}

export default App;
