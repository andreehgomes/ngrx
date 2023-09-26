import { Action } from '@ngrx/store';
import * as FromTodoAction from './todo.action';

interface Todo {
  description: string;
  isComplete: boolean;
}

const initialState: Todo[] = [];

export function todoReducer(state = initialState, action: FromTodoAction.Add) {
  switch (action.type) {
    case FromTodoAction.ActionTypes.Add:
      return [...state, action.payload.todo];

    // TODO:
    // case FromTodoAction.ActionTypes.Delete:
    // return [...state, action.payload.todo];

    default:
      return state;
  }
}
