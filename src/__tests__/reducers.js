import expect from 'expect';
import { addTodo } from '../actions/todos';
import todosReducer from '../reducers/todos';

describe('reducers', () => {
  it('should return the initial state', () => {
    const state = todosReducer(undefined, {});
    expect(state).toEqual([]);
  })

  it('should add a new todo to state', () => {
    const state = todosReducer(undefined, addTodo('New todo'));
    expect(state.length).toEqual(1);
    expect(state[0].text).toEqual('New todo');
    expect(state[0].done).toEqual(false);
  })
})
