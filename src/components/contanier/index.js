import React, { Component } from "react";
import Ball from "../ball";
import "./index.css";

class Contanier extends Component {
  state = {
    score: 0,
    endGame:false,
    timer: 20
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

count = () =>{
  setInterval(async() => {
    await this.setState({timer: this.state.timer-=1})
    }, 1000);
}

componentWillMount() {
  this.clearContainer();
  this.count();
}

  render() {

    if(this.state.endGame){
      return(
        <React.Fragment>
        <h1 className="game-result">
        Game Over!
        </h1>
        <h2 className="t-contanier">Your Score: {this.state.score}</h2>
        <div className="div-img">
          <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG45.png" alt="0" />
        </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <h1 className="h1-contanier">Welcome {this.props.name}</h1>
        <h2 className="h2-contanier">The Score: {this.state.score}</h2>
        <h3 className="t-contanier">Timer: {this.state.timer}</h3>
        <div className="div-contanier">
          <Ball onClick={this.getBall}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Contanier;
