import React, { useEffect, useState } from "react";
import getTickets, { getTicketsCount } from "../Servises/githubService";
import TicketContext from "./ticket-context";

const state = {};

const TicketProvider = (props) => {
  const [tickets, setTickets] = useState([]);
  const [ticketsCount, setTicketsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, SetError] = useState(null);

  async function defaultRun() {
    setIsLoading(true);
    try {
      SetError(null);
      setTickets(await getTickets(currentPage, pageSize));
      const tCount = await getTicketsCount();
      setTicketsCount(tCount);
    } catch (error) {
      SetError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    defaultRun();
  }, []);

  const setCurrentPageHandler = async (pageNumber) => {
    setIsLoading(true);
    setCurrentPage(pageNumber);
    setTickets(await getTickets(pageNumber, pageSize));
    setIsLoading(false);
  };

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
