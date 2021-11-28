import React, { useContext } from "react";
import TicketContext from "../../store/ticket-context";
import Ticket from "./ticket";
import paginate from "../../utils/paginate";

const Tickets = (props) => {
  const { tickets, pageSize, currentPage } = useContext(TicketContext);
  let pageData = [...tickets];
  pageData = paginate(pageData, currentPage, pageSize);
  return pageData.map((item) => <Ticket details={item} key={item.id} />);
};

export default Tickets;
