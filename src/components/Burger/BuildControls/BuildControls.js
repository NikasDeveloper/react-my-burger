import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacom', type: 'bacon' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        disabled={props.disabled[control.type]}
        added={() => { props.ingredientAdded(control.type) }}
        removed={() => { props.ingredientRemoved(control.type) }}
      />
    ))}
  </div>
);

export default buildControls;
