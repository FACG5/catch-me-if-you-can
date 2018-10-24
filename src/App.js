import React, { Component } from 'react';
import './App.css';
import Contanier from './components/contanier';
import Form from './components/form';

class App extends Component {
  state = {
    name: "" }

  handlerName = (data) => {   
    this.setState({name: data})
  }

  render() {
    return (
      <div className="App">
      { !this.state.name &&  <div  className="form-input">
       <Form onchange={(e) => this.handlerName(e)}/>
      </div>}
      { this.state.name && <Contanier className="contanier" name={this.state.name} />}
      </div>
    );
  }
}

export default App;
