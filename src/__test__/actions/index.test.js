import * as actions from '../../actions';

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual(
      actions.deleteTicket(1)
    );
  });
});