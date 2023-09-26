import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "path1",
    loadChildren: () =>
      import("../app/feature/ngrx-feat1/ngrx-feat1.module").then(
        (m) => m.NgrxFeat1Module
      ),
  },
  {
    path: "path2",
    loadChildren: () =>
      import("../app/feature/ngrx-feat2/ngrx-feat2.module").then(
        (m) => m.NgrxFeat2Module
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("../app/feature/ngrx-feat2/ngrx-feat2.module").then(
        (m) => m.NgrxFeat2Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
