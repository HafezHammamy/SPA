import React, { useCallback, useEffect, useState } from "react";
import getTickets, { getTicketsCount } from "../Servises/githubService";
import TicketContext from "./ticket-context";

const TicketProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [ticketsCount, setTicketsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, SetError] = useState(null);

  const setCurrentPageHandler = async (pageNumber = 1) => {
    setIsLoading(true);
    try {
      setCurrentPage(pageNumber);
      setTickets(await getTickets(pageNumber, pageSize));
      const tCount = await getTicketsCount();
      setTicketsCount(tCount);
    } catch (error) {
      SetError(error.message);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setCurrentPageHandler();
  }, []);

  const defaultTicketContext = {
    tickets: tickets,
    count: ticketsCount,
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
