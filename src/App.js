import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(info => this.setState({characters: info.results}))
  }

  render() {
    return (
      <div className="App">
        <Container characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
