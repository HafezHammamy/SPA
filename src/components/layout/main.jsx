import React, { useContext } from "react";
import TicketContext from "../../store/ticket-context";
import Tickets from "../Ticket/tickets";
import Pagination from "../UI/pagination";
import classes from "./main.module.css";

const Main = () => {
  const ctx = useContext(TicketContext);

  let content = "No Tickets Found";

  if (ctx.tickets.length > 0) {
    content = <Tickets />;
  }

  if (ctx.isLoading) {
    content = "loading ...";
  }
  console.log(ctx);
  return (
    <main className={classes.main}>
      {content}
      {!ctx.isLoading && <Pagination count={ctx.count} />}
    </main>
  );
};

export default Main;
