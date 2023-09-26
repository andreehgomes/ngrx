import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgrxFeat2RoutingModule } from "./ngrx-feat2-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { NgrxFeat2Component } from "./ngrx-feat2.component";

@NgModule({
  declarations: [NgrxFeat2Component],
  imports: [
    CommonModule,
    NgrxFeat2RoutingModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [NgrxFeat2Component],
})
export class NgrxFeat2Module {}
