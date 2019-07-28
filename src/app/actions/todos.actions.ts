import { createAction, props } from '@ngrx/store';

export interface ITodo {
  title: string;
  done: boolean;
}

export const add = createAction(
  '[Todo Component] Add',
  props<{ todo: ITodo }>()
);
export const remove = createAction(
  '[Todo Component] Remove',
  props<{ todo: ITodo }>()
);
export const complete = createAction(
  '[Todo Component] Complete',
  props<{ todo: ITodo }>()
);
export const reset = createAction('[Todo Component] Reset');
