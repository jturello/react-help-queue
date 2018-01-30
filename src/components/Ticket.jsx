import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return(
    <div>
      <h3>3a - Thato and Haley</h3>
      <p><em>Firebase will not save record!</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
