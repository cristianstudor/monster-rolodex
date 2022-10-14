import React, { Component } from 'react';
import { CardList } from '../components/card-list/card-list.component';
import { SearchBox } from '../components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  
  onSearchChange = (event) =>  {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className='search-box' 
          placeholder='search monsters'
          onChangeHandler={this.onSearchChange}
        />
        <CardList monsters={filterdMonsters} />  
      </div>
    );
  }
}

export default App;
