// configure the routing of angular components inside an app-routing.module.ts file.

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuestAddComponent } from "./guest-add/guest-add.component";
import { GuestEditComponent } from "./guest-edit/guest-edit.component";
import { GuestGetComponent } from "./guest-get/guest-get.component";

const routes: Routes = [
  {
    path: "business/create",
    component: GuestAddComponent
  },
  {
    path: "business/edit/:id",
    component: GuestEditComponent
  },
  {
    path: "business",
    component: GuestGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
