import React from "react";
import classes from "./cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.dimgray;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.darkcyan);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>Welcome</p>
      <button className={btnClass} onClick={props.clicked}>
        Show, hide Persons
      </button>
    </div>
  );
};

export default cockpit;
