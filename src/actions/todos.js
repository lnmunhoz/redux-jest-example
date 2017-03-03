import { ADD_TODO, EDIT_TODO } from '../constants/actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
})

export const editTodo = ({ id, done }) => ({
  type: EDIT_TODO,
  payload: { id, done }
})
