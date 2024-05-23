import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './feature1/feature1.component';
import { Feature1DetailComponent } from './feature1-detail/feature1-detail.component';

const routes: Routes = [
  {
    path: "",
    component: Feature1Component,
  },
  {
    path: "detail",
    component: Feature1DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
