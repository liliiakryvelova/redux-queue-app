import ticketListReducer from '../../reducers/ticket-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as a from '../../actions';


describe('ticketListReducer', () => {

  let action;

  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1 
    }, 2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 
    }
  }

  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = a.addTicket({
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    });
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    const action = a.deleteTicket(1);
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 
      }
    });
  });

});

describe("formVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });
});