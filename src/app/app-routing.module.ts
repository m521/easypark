import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [
  {path : "Dash" , component :  DashboardComponent,
    children : [
      {path : "user" , component :  UserComponent},
      {path : "home" , component :  HomeComponent},
      {path : "" , redirectTo : "home" , pathMatch : "full"}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
