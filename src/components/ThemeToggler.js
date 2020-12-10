import React from "react";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";

const ThemeToggler = ({ toggelTheme }) => {
  return (
    <div className="tumbler__wrapper">
      <button onClick={toggelTheme} className="tumbler"></button>
      <img
        onClick={toggelTheme}
        style={{ width: "12px" }}
        src={sun}
        alt="logo sun"
      />
      <img
        onClick={toggelTheme}
        style={{ width: "12px" }}
        src={moon}
        alt="logo moon"
      />
    </div>
  );
};

export default ThemeToggler;
