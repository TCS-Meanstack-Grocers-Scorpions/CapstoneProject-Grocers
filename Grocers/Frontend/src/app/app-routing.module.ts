import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { SignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { SignInComponent as UserSignin } from './User/sign-in/sign-in.component';

const routes: Routes = [
  {path:"\admin",component:AdminSignin},
  {path:"\shopper",component:UserSignin},
  {path:"\employee",component:EmployeeSignin},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
