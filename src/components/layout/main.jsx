import React, { useContext } from "react";
import Loader from "react-loader-spinner";
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
    content = (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    );
  }
  return (
    <main className={classes.main}>
      <div className={classes.content}>{content}</div>
      {<Pagination count={ctx.count} />}
    </main>
  );
};

export default Main;
