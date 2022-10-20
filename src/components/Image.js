import React from 'react';
import ticketsImage from './../img/tickets-image.png'

function Image(){
  return(
    <React.Fragment>
      <img src={ticketsImage} alt="An image of tickets"/>
      <hr/>
    </React.Fragment>
  )
}

export default Image