import React from 'react';

import classes from './Order.css';

const order = props => {
  const ingredients = [];
  Object.entries(props.ingredients).forEach(([name, amount]) => {
    ingredients.push({ name: name, amount: amount });
  });
  const ingredientsOutput = ingredients.map(ingredient => {
    return (
      <span
        key={ingredient.name}
        style={{
          textTransform: "capitalize",
          display: 'inline-block',
          margin: '0 8px',
          padding: '5px',
          border: '1px solid #ccc'
        }}>
        {ingredient.name} ({ingredient.amount})
      </span>
    )
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: <strong>{props.price.toFixed(2)} &euro;</strong></p>
    </div>
  )
};

export default order;