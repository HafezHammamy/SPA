import React, { useEffect, useState } from "react";
import getTickets from "../Servises/githubService";
import TicketContext from "./ticket-context";

const TicketProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    setTickets(await getTickets());
    setIsLoading(false);
  }, []);

  const setCurrentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const defaultTicketContext = {
    tickets: tickets,
    currentPage: currentPage,
    pageSize: 3,
    setCurrentPage: setCurrentPageHandler,
    isLoading: isLoading,
  };
  return (
    <TicketContext.Provider value={defaultTicketContext}>
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
