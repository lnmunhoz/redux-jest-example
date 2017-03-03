import expect from 'expect';
import { ADD_TODO } from '../constants/actionTypes';
import todosReducer from '../reducers/todos';

describe('reducers', () => {
  it('should return the initial state', () => {
    const state = todosReducer(undefined, {});
    expect(state).toEqual([]);
  })
})
