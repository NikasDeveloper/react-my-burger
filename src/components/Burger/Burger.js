import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  const separator = '-';
  const ingredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, key) => {
      return <BurgerIngredient key={igKey + separator + key} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
