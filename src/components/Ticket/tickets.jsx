import React, { useContext } from "react";
import TicketContext from "../../store/ticket-context";
import Ticket from "./ticket";

const Tickets = (props) => {
  const { tickets } = useContext(TicketContext);
  return tickets.map((item) => <Ticket details={item} key={item.id} />);
};

export default Tickets;
