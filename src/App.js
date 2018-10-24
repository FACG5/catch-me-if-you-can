import React, { Component } from 'react';
import './App.css';
import Contanier from './components/contanier';

class App extends Component {
  state = {
    name: "salwa",
    picture: null
  }

  handlerData = (dataOfFb) => {
    this.setState({ name: dataOfFb.name, picture: dataOfFb.picture  })
  }


  render() {
    return (
      <div className="App">

      { this.state.name && <Contanier picture={this.state.picture} name={this.state.name} />}
      </div>
    );
  }
}

export default App;
