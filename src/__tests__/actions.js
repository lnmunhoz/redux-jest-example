import * as actions from '../actions/todos';
import * as actionTypes from '../constants/actionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: actionTypes.ADD_TODO,
      payload: { text }
    }

    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})
