import React, { Component } from "react";
import "./index.css";

class Ball extends Component {
  state = {
    x: 0,
    y: 0
  };
  changePostion = () => {
    setTimeout(async () => {
      this.changeNow();
      this.changePostion();
    }, 3000);
  };
  changeNow = async () => {
    const xNew = this.getRandomPosition(0, 450) + "px";
    const yNew = this.getRandomPosition(0, 450) + "px";

    await this.setState({
      x: xNew,
      y: yNew
    });
  };

  getRandomPosition = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  componentWillMount() {
    this.changePostion();
  }

  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.changeNow)}
        className="button-ball"
        style={{ top: this.state.y, left: this.state.x }}
      />
    );
  }
}

export default Ball;
