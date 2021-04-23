import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { SignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignInComponent as UserSignin } from './User/sign-in/sign-in.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path: '\admin', component: AdminSignin},
  {path: '\shopper', component: UserSignin},
  {path: '\employee', component: EmployeeSignin},
  {path: '\admin-index', component: AdminIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
