import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RxjsBasicsComponent } from "./rxjs-basics/rxjs-basics.component";
import { RxjsProjectsComponent } from "./rxjs-projects/rxjs-projects.component";
import { TypescriptBasicsComponent } from "./typescript-basics/typescript-basics.component";
import { AuthFormComponent } from "./angular-pro/auth-form/auth-form.component";
import { AngularProComponent } from "./angular-pro/angular-pro.component";
import { AuthRememberComponent } from "./angular-pro/auth-remember/auth-remember.component";
import { AuthMessageComponent } from "./angular-pro/auth-message/auth-message.component";

const routes: Routes = [
  { path: "", redirectTo: "passengers", pathMatch: "full" },
  { path: "rxjs-basics", component: RxjsBasicsComponent },
  { path: "rxjs-projects", component: RxjsProjectsComponent },
  { path: "typescript-basics", component: TypescriptBasicsComponent },
  { path: "angular-pro", component: AngularProComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    RxjsBasicsComponent,
    RxjsProjectsComponent,
    TypescriptBasicsComponent,
    AuthFormComponent,
    AngularProComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // Custom modules
    PassengerDashboardModule
  ],
  entryComponents: [
    AuthFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
