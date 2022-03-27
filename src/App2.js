import { dividerClasses } from "@mui/material";
import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "The OG Starters:",
      list: ["charmander", "bulbasaur", "squirtle"],
    };
    console.log("Timer constructor called");
  }
  onClick = () => {
    if (this.state.counter === 0) {
      this.setState({
        counter: this.state.counter + 1,
        message: "The Hoen Starters:",
        list: ["torchick", "grotle", "mudkip"],
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
        message: "The OG Starters:",
        list: ["charmander", "bulbasaur", "squirtle"],
      });
    }
  };
  changeMessage = (newMessage) => {
    this.setState({
      message: newMessage,
    });
  };

  render() {
    const { counter, message, list, onClick } = this.state;
    return (
      <div className="timer">
        <h5>{counter}</h5>
        <button
          className="btn btn-warning"
          onClick={() => this.changeMessage("COCK")}
        >
          Click Me!
        </button>
        <button className="btn btn-warning">Second Button</button>
        <div className="title">{message}</div>
        <div className="list">
          {list.map((pokemon) => {
            return <div className="pokemon">{pokemon}</div>;
          })}
        </div>
        <h1>{this.state.message}</h1>
        <h1>{message}</h1>
        <h2></h2>
      </div>
    );
  }
}
export default Timer;

// class Logger extends Component {
//   //This component is triggered whenever the parent component recieves a new set of Props
//   //does not call during mount
//   //usually developers use this lifecycle method to update state in response to a change in props
//   UNSAFE_componentWillReceiveProps(newProps) {
//     console.log("componentWillReceiveProps() is Triggered");
//     console.log(newProps);
//   }
//   render() {
//     return <div>{this.props.time}</div>;
//   }
// }
