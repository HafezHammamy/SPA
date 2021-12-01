import React from "react";

const TicketContext = React.createContext({
  tickets: [],
  count: 0,
  currentPage: 1,
  pageSize: 3,
  setCurrentPage: (pageNumber) => {},
});

export default TicketContext;
