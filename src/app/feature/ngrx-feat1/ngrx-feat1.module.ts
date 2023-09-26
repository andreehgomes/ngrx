import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgrxFeat1Component } from "./ngrx-feat1.component";
import { NgrxFeat1RoutingModule } from "./ngrx-feat1-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [NgrxFeat1Component],
  imports: [
    CommonModule,
    NgrxFeat1RoutingModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class NgrxFeat1Module {}
