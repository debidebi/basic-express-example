import React, { Component } from 'react';
import FruitItem from './FruitItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [
        {name: "banana", price: 1, quantity: 10},
        {name: "mango", price: 5, quantity: 10},
        {name: "cherries", price: 3, quantity: 10},
        {name: "dragonfruit", price: 10, quantity: 10},
        {name: "grapefruit", price: 4, quantity: 10},
        {name: "kiwi", price: 6, quantity: 10},
        {name: "grapes", price: 8, quantity: 10}
      ],
      people: ""
    };
  }

  componentDidMount() {
    fetch('/students')
      .then((data) => {
        return data.json()
      })
      .then((parsed) => {
        this.setState({
          people: parsed.data
        })
      })
  }

  stealBanana = () => {
    let bananaCount = this.state.fruits[0].quantity;

    if (bananaCount > 0) {
      this.setState({
        fruits: [
          {name: "banana", price: 1, quantity: (bananaCount - 1)},
          {name: "mango", price: 5, quantity: 10},
          {name: "cherries", price: 3, quantity: 10},
          {name: "dragonfruit", price: 10, quantity: 10},
          {name: "grapefruit", price: 4, quantity: 10},
          {name: "kiwi", price: 6, quantity: 10},
          {name: "grapes", price: 8, quantity: 10}
        ]
      })
    }
  }

  render() {
    let fruitList = this.state.fruits.map((fruit) => {
      // fruit = {name: "banana", price: 1}
      return (<FruitItem name={fruit.name} price={fruit.price} quantity={fruit.quantity} steal={this.stealBanana} />);
    });

    if (this.state.people) {
      let thePeople = this.state.people.map((person) => {
        return (<li>{person.username}</li>)
      })

      return (
        <div className="App">
          <ul>
            {thePeople}
          </ul>
          <ul>
            {fruitList}
          </ul>
        </div>
      );
    } else {
      return (
        <h1> LOADING! </h1>
      )
    }
  }
}

export default App;
