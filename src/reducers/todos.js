import uuid from 'node-uuid';
import { ADD_TODO, EDIT_TODO } from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch(type){
    case ADD_TODO:
      const todo = {
        id: uuid.v4(),
        done: false,
        text: payload.text
      }

      return [...state, todo];

     case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return Object.assign({}, todo, {
            done: payload.done
          });
        }
      });
     default:
       return state;
  }
}
