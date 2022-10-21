import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>GreenMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
}

export default Header;
