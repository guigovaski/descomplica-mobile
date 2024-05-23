import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "feature1",
    loadChildren: () => import("./feature1/feature1.module").then(m => m.Feature1Module)
  },
  {
    path: "",
    redirectTo: "feature1",
    pathMatch: "full"
  },
];
