import React, { useContext } from "react";

import classes from "./header.module.css";
import TicketContext from "./../../store/ticket-context";

const Header = () => {
  const ctx = useContext(TicketContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Github Remix Issues</h1>
      </div>
      <div className={classes.nav}>
        <div>
          Issues
          {ctx.count > 0 && <span className={classes.badge}>{ctx.count}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
