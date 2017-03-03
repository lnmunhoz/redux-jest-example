import uuid from 'node-uuid';
import { ADD_TODO } from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch(type){
    case ADD_TODO:
      const todo = {
        id: uuid.v4(),
        done: false,
        text: payload.text
      }

      return [...state, todo];
    default:
      return state;
  }
}
