import React from 'react';
import classes from './Backdrop.css'

const backdrop = props => {
  let content = null;
  if (props.show) content = <div className={classes.Backdrop} onClick={props.clicked} />;
  return content;
}
export default backdrop;