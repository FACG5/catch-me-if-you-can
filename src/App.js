import React, { Component } from 'react';
import './App.css';
import Contanier from './components/contanier';
import Fasebook from './components/fasebook';

class App extends Component {
  state = {
    name: null,
    picture: null
  }

  handlerData = (dataOfFb) => {
    this.setState({ name: dataOfFb.name, picture: dataOfFb.picture  })
  }
  
  render() {
    return (
      <div className="App">
        <Fasebook onChange={(e) => this.handlerData(e)}/>
        { this.state.name && <Contanier picture={this.state.picture} name={this.state.name} />}
      </div>
    );
  }
}

export default App;
