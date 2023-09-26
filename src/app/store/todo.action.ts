import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Todo Component] Add',
}

interface Todo {
  description: string;
  isComplete: boolean;
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: { todo: Todo }) { }
}
