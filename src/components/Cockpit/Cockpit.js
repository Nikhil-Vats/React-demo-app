import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    let assignedclasses= []; 
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    btnClass = classes.Red;
    if(props.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <h1>Hi, I am a react app.</h1>
        <p className={assignedclasses.join(' ')}>This is really working!</p>
        <div>
          <button 
            className={btnClass}
            onClick={() => props.clicked()}>Toggle Persons
          </button>
        </div>
        </div>
    );
};

export default cockpit;