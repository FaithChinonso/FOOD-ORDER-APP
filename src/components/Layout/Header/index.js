import { Fragment } from "react";
import HeaderCartButton from "../HeaderCartButton";

import mealsImage from "../../../assets/headerMeal.jpg";
import classes from "./style.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foi Plat</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a plate of abacha" />
      </div>
    </Fragment>
  );
};
export default Header;
