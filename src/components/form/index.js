import React, { Component } from 'react';
import "./index.css";

class Form extends Component {
    state = {
      input: '',
    };
    handleChange = event => {
      const value = event.target.value;
      this.setState({ input: value });
    };

    onClick1 = () => {
        this.props.onchange(this.state.input)
    }

    render() {
        
      return (
        <div className="div-postion">
          <label htmlFor="name"></label>
          <input
            placeholder="Please enter your name "
            className="input-name"
            type="text"
            id="name"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" className="input-submit" onClick={() =>this.onClick1()} value="send" />
        </div>
      );
    }
  }

  
export default Form;