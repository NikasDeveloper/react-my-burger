import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  const separator = '-';
  let ingredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, key) => {
        return <BurgerIngredient key={igKey + separator + key} type={igKey} />;
      });
    })
    .reduce((arr, el) => [...arr, ...el], []);
  console.log(ingredients);
  if (ingredients.length === 0) ingredients = <p>Please start adding ingredients!</p>;
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
