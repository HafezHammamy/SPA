import React from "react";

const TicketContext = React.createContext({
  tickets: [],
  currentPage: 1,
  pageSize: 3,
  setCurrentPage: (pageNumber) => {},
});

export default TicketContext;
