import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import '../App.css'
import Image from './Image'

import TicketControl from './TicketControl'



function App() {

    return (
      <React.Fragment>
        <Header/>
        <Image/>
        <TicketControl/>
      </React.Fragment>
    );

}

export default App;