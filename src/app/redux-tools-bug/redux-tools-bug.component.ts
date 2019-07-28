import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/todos.reducer';
import { Observable } from 'rxjs';
import { ITodo, complete, remove, reset, add } from '../actions/todos.actions';

@Component({
  selector: 'app-redux-tools-bug',
  templateUrl: './redux-tools-bug.component.html',
  styleUrls: ['./redux-tools-bug.component.scss']
})
export class ReduxToolsBugComponent implements OnInit {
  todos$: Observable<ITodo[]>;
  newTodoTitle: string;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select('todos'));
  }

  complete(todo: ITodo) {
    this.store.dispatch(complete({ todo }));
  }

  remove(todo: ITodo) {
    this.store.dispatch(remove({ todo }));
  }

  reset() {
    this.store.dispatch(reset());
  }

  add() {
    this.store.dispatch(
      add({
        todo: {
          title: this.newTodoTitle,
          done: false
        }
      })
    );

    this.newTodoTitle = '';
  }
}
