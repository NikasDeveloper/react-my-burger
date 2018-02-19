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
    {controls.map(control => (
      <BuildControl
        key={control.type}
        label={control.label}
        added={() => { props.ingredientAdded(control.type) }}
      />
    ))}
  </div>
);

export default buildControls;
