import expect from 'expect';
import uuid from 'node-uuid';
import { addTodo, editTodo } from '../actions/todos';
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

  it('should edit a todo', () => {
    const todoId = uuid.v4();
    const initialState = [{
      id: todoId,
      text: 'New todo',
      done: false
    }, {
      id: uuid.v4(),
      text: 'Second todo',
      done: true
    }];

    const state = todosReducer(initialState, editTodo({
      id: todoId,
      done: true
    }));

    expect(state[0].done).toEqual(true);
  })
})
