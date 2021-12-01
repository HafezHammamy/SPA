import React, { useEffect, useState } from "react";
import getTickets from "../Servises/githubService";
import TicketContext from "./ticket-context";

const TicketProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, SetError] = useState(null);

  useEffect(async () => {
    setIsLoading(true);
    try {
      SetError(null);
      setTickets(await getTickets(currentPage, pageSize));
    } catch (error) {
      console.log(error.message);
      SetError(error.message);
    }
    setIsLoading(false);
  }, []);

  const setCurrentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const defaultTicketContext = {
    tickets: tickets,
    currentPage: currentPage,
    pageSize: pageSize,
    setCurrentPage: setCurrentPageHandler,
    isLoading: isLoading,
    error: Error,
  };
  return (
    <TicketContext.Provider value={defaultTicketContext}>
      {props.children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
