import React from 'react';

const FruitItem = (props) => {
  if (props.name === "banana") {
    return (
      <li>{props.name} ~~ price: {props.price} ~~ quantity: {props.quantity}
      <button onClick={props.steal}>Steal</button></li>
    )
  } else {
    return (
      <li>{props.name} ~~ price: {props.price} ~~ quantity: {props.quantity}</li>
    );
  }
};

export default FruitItem;
