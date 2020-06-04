import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// import logo from './logo.svg';
import './App.css';
/*Auto generated default JSX function */
// function App() {
//   return (    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

/* this is actually the same but using class instead of functions */
class App extends Component {
  constructor () {
    super(); //this function calls the constructor method inside the component class
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this); we have tp write this if we don't use ES6 way of bind context
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(Json => this.setState({'monsters' : Json}))
  }

  handleChange = e =>{          // ES6 arrow functions leverage (use all the potential) to bind "this" context inside this function
    this.setState({'searchField' : e.target.value });  // this way of binding context is called lexicalbinding
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )      
    return (      
      <div className="App">        
        <h1> Monsters Rolodex!</h1>
        <SearchBox 
          handleChange = {this.handleChange} 
          placeholder = "Search Monsters" 
        />
        <CardList monsters={filteredMonsters} />                      
      { //First pratice with JSX
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>{this.state.string}</p>
      //   <button onClick={() => this.setState({ 'string' : "Salchipapa con carne"})}>Salchipapa</button>
      // </header>
    }
    </div>
    );
  }
}

export default App;
