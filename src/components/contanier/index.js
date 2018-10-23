import React, { Component } from "react";
import Ball from "../ball";
import "./index.css";

class Contanier extends Component {
  state = {
    score: 0,
    check: true
  };

  getBall = async callback => {
    await this.setState({
      score: this.state.score + 1,
      check: false
    });
    callback();
    await this.setState({
      check: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="h1-contanier">The score : {this.state.score}</h1>
        <div className="div-contanier">
          <Ball onClick={this.getBall} check={this.state.check} />
        </div>
      </React.Fragment>
    );
  }
}

export default Contanier;
