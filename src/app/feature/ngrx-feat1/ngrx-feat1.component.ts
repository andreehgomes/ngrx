import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { Add } from '../../store/todo.action';
import { Observable } from "rxjs";

@Component({
  selector: "app-ngrx-feat1",
  templateUrl: "./ngrx-feat1.component.html",
  styleUrls: ["./ngrx-feat1.component.scss"],
})
export class NgrxFeat1Component {
  todo$: Observable<any>;

  description: string = '';

  constructor(private store: Store<{ todo: any }>) {
    this.todo$ = store.pipe(select('todo'));
  }

  AddTodo() {
    this.store.dispatch(new Add({
      todo: {
        description: this.description,
        isComplete: false,
      },
    }));
  }
}
