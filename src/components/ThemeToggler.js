import React from "react";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";

const ThemeToggler = ({ toggelTheme }) => {
  return (
    <div className="tumbler__wrapper" onClick={toggelTheme}>
      <button className="tumbler"></button>
      <img style={{ width: "18px" }} src={sun} alt="logo sun" />
      <img style={{ width: "18px" }} src={moon} alt="logo moon" />
    </div>
  );
};

export default ThemeToggler;
