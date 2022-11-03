import React from 'react';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';


class TicketControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //formVisibleOnPage: false,
      selectedTicket: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if (this.state.selectedTicket != null) {
      this.setState({
        selectedTicket: null,
        editing: false // new code
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const action = a.addTicket(newTicket);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    }
    else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ticket List";
      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
    }
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = 'Return to Ticket List';
    }else{
      currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket}/>
      buttonText = 'Add Ticket';
      
    }
    return(
      <div>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;