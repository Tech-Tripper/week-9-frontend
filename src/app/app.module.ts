import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GuestAddComponent } from "./guest-add/guest-add.component";
import { GuestGetComponent } from "./guest-get/guest-get.component";
import { GuestEditComponent } from "./guest-edit/guest-edit.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BusinessService } from "./business.service";

@NgModule({
  declarations: [
    AppComponent,
    GuestAddComponent,
    GuestGetComponent,
    GuestEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
