import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// remove const mainTicketList = [ ... ]. We no longer want these.

function TicketList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
          {Object.values(props.ticketList).map((ticket) =>
           <Ticket
              whenTicketClicked = { props.onTicketSelection }
              names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              formattedWaitTime = {ticket.formattedWaitTime}
              id={ticket.id}
              key={ticket.id}/>
          )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;