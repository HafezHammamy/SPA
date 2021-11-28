import React from "react";

import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Github Tracker</h1>
      </div>
      <div className={classes.nav}></div>
    </header>
  );
};

export default Header;
