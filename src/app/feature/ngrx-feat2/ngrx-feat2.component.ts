import { Component } from "@angular/core";
import { MatDatepicker } from "@angular/material";
import { MatTableDataSource } from "@angular/material/table";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-ngrx-feat2",
  templateUrl: "./ngrx-feat2.component.html",
  styleUrls: ["./ngrx-feat2.component.scss"],
})
export class NgrxFeat2Component {
  todo$: Observable<any>;

  constructor(private store: Store<{ todo: any }>) {
    this.todo$ = store.pipe(select('todo'));
  }
}
