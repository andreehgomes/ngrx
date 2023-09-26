import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgrxFeat2Component } from "./ngrx-feat2.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: NgrxFeat2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxFeat2RoutingModule {}
