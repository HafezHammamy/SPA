import React, { useContext } from "react";
import TicketContext from "../../store/ticket-context";
import Tickets from "../Ticket/tickets";
import Pagination from "../UI/pagination";
import classes from "./main.module.css";

const Main = () => {
  const { isLoading, tickets } = useContext(TicketContext);

  let content = "<p>No Tickets Found";

  if (tickets.length > 0) {
    content = <Tickets />;
  }

  if (isLoading) {
    content = "loading ...";
  }

  return (
    <main className={classes.main}>
      {content}
      {!isLoading && <Pagination />}
    </main>
  );
};

export default Main;
