import React from 'react';
import classes from './Input.css';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case ('textarea'):
      inputElement = <textarea
        className={classes.InputElement}
        value={props.value}
        {...props.elementConfig} onChange={props.changed} />;
      break;
    case ('select'):
      inputElement = (
        <select className={classes.InputElement} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.display}</option>
          ))}
        </select>
      );
      break;
    case ('input'):
    default:
      inputElement = <input
        className={classes.InputElement}
        value={props.value}
        {...props.elementConfig} onChange={props.changed} />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;