import React, { useEffect } from 'react';
import classes from './Cockpit.css';
const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('save data to the clould!');
    });

    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  const assignedClasses = [];
  if (props.persons.length < 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>It is really works!!!</p>
      <button onClick={props.clicked}>Switch Name</button>
    </div>
  );
};

export default cockpit;
