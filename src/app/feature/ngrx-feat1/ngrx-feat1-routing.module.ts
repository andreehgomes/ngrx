import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgrxFeat1Component } from "./ngrx-feat1.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: NgrxFeat1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgrxFeat1RoutingModule {}
