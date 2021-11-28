import React from "react";
import Card from "../layout/card";
import classes from "./ticket.module.css";
const Ticket = ({ details }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const dateCreated = new Date(details.created_at).toLocaleDateString(
    "en-GB",
    options
  );

  const dateUpdated = new Date(details.updated_at).toLocaleDateString(
    "en-GB",
    options
  );

  return (
    <Card>
      <div className={classes.ticket}>
        <div>
          <img src={details.user.avatar_url} alt="" />
        </div>
        <div className={classes["ticket-content"]}>
          <p>
            <a href={details.user.html_url} target="_blank">
              <strong>{details.user.login}</strong>
            </a>
          </p>
          <p>
            <a href={details.html_url} target="_blank">
              {" "}
              {details.title}
            </a>
          </p>
          <p>
            <span>
              <strong>Created At:</strong> {dateCreated}
            </span>{" "}
            <span>
              {" "}
              <strong>Updated At:</strong> {dateUpdated}
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Ticket;
