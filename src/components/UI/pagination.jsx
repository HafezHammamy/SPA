import React, { Fragment, useContext } from "react";
import TicketContext from "../../store/ticket-context";

import classes from "./pagination.module.css";
const Pagination = (props) => {
  const ticketsCtx = useContext(TicketContext);

  const pagesCount = Math.ceil(ticketsCtx.tickets.length / ticketsCtx.pageSize);

  const moveToPageHandler = (PageNumber) => {
    ticketsCtx.setCurrentPage(PageNumber);
  };

  let paginationHTML = [];
  for (let i = 1; i <= pagesCount; i++) {
    paginationHTML.push(
      <li
        onClick={moveToPageHandler.bind(null, i)}
        className={ticketsCtx.currentPage === i ? classes.active : ""}
        key={i}
      >
        {i}
      </li>
    );
  }

  return (
    <Fragment>
      <div>
        <ul className={classes.pagination}>
          {paginationHTML.map((link) => link)}
        </ul>
      </div>
    </Fragment>
  );
};

export default Pagination;
