import { createReducer, on, Action } from '@ngrx/store';
import { add, remove, complete, reset, ITodo } from '../actions/todos.actions';

export interface State {
  todos: ITodo[];
}

export const initialState: State = {
  todos: [] as ITodo[]
};

export const todosReducer = createReducer(
  initialState,
  on(add, (state, { todo }) => {
    const newTodos = state.todos.slice(0);
    newTodos.push(todo);

    return {
      ...state,
      todos: newTodos
    };
  }),
  on(remove, (state, { todo }) => {
    const todoIndex = state.todos
      .map((todoElements: ITodo) => todoElements.title)
      .indexOf(todo.title);

    const newTodos = state.todos.slice(0);
    newTodos.splice(todoIndex, 1);

    return {
      ...state,
      todos: newTodos
    };
  }),
  on(complete, (state, { todo }) => {
    const todoIndex = state.todos
      .map((todoElements: ITodo) => todoElements.title)
      .indexOf(todo.title);

    const newTodos = state.todos.slice(0);
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      done: !newTodos[todoIndex].done
    };

    return {
      ...state,
      todos: newTodos
    };
  }),
  on(reset, state => {
    const newTodos: ITodo[] = [];

    return {
      ...state,
      todos: newTodos
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
