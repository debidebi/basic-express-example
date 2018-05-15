import React, { Component } from 'react';
import axios from 'axios';
import FruitItem from './FruitItem';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: ''
    };
  }

  componentDidMount() {
    fetch('/fruit')
      .then((data) => {
        return data.json();
      })
      .then((parsed) => {
        this.setState({
          fruits: parsed.data
        })
      })
  }

  stealFruit = (name) => {
    let oldState = this.state.fruits
    let theRequest;

    let newState = oldState.map((fruitObj) => {
      if ((fruitObj.name === name) && (fruitObj.quantity)) {
        theRequest = {name: fruitObj.name, quantity: fruitObj.quantity - 1};
        return {name: fruitObj.name, price: fruitObj.price, quantity: fruitObj.quantity - 1};
      } else {
        return fruitObj;
      }
    })

    if (theRequest) {
      axios.post('/fruit/remove', theRequest)
        .then((parsed) => {
          this.setState({
            fruits: newState
          })
        })
    }
  }

  render() {
    if (this.state.fruits) {
      let fruitList = this.state.fruits.map((fruit) => {
        // fruit = {name: "banana", price: 1}
        return (<FruitItem name={fruit.name} price={fruit.price} quantity={fruit.quantity} steal={this.stealFruit} />);
      });

      return (
        <div className="App">
          <h3>Welcome to my Fruit Shop</h3>
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
