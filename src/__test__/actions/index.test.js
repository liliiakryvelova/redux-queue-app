import * as actions from '../../actions';
import * as c from '../../actions/ActionTypes'

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual(
      actions.deleteTicket(1)
    );
  });

  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({
      names: 'Jo and Jasmine', 
      location: '3E', 
      issue: 'Redux not working!', 
      timeOpen: 0,
      formattedWaitTime: 'less than a minute ago', 
      id: 1
    })).toEqual({
      type: c.ADD_TICKET,
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: 'less than a minute ago',
      id: 1
    });
  });
  
});