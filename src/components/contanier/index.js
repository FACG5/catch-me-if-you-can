import React, { Component } from "react";
import Ball from "../ball";
import "./index.css";

class Contanier extends Component {
  state = {
    score: 0,
    endGame:false
  };

  getBall = async callback => {
    await this.setState({
      score: this.state.score + 1,
    });
    callback();
    await this.setState({
    });
  };

clearContainer = () => {
setTimeout(async() => {

await this.setState({endGame:true})

}, 20000);
}

componentWillMount() {
  this.clearContainer();
}

  render() {
    if(this.state.endGame){
      return(
        <h1 className="game-result">
        The Game Has Ended!
        </h1>
      )
    }
    return (
      <React.Fragment>
        <h1 className="h1-contanier">The score : {this.state.score}</h1>
        <div className="div-contanier">
          <Ball onClick={this.getBall} />
        </div>
      </React.Fragment>
    );
  }
}

export default Contanier;
