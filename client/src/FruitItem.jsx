import React from 'react';

const FruitItem = (props) => {
    return (
      <li>{props.name} ~~ price: {props.price} ~~ quantity: {props.quantity}
      <button onClick={() => { props.steal(props.name) }}>Steal</button>
      </li>
    );
};

export default FruitItem;
