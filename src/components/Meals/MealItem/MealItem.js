import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const price = `Rs. ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meals}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div><MealItemForm /></div>
    </li>
  );
}

export default MealItem;
