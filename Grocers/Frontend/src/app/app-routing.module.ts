import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { GenerateReportComponent } from './Admin/admin-index/generate-report/generate-report.component';
import { ViewRequestsComponent } from './Admin/admin-index/view-requests/view-requests.component';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { SignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { SigninComponent as UserSignin } from './User/signin/signin.component';
import { CartComponent } from './User/user-index/cart/cart.component';
import { UserIndexComponent } from './User/user-index/user-index.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: '\admin', component: AdminSignin},
  {path: '\shopper', component: UserSignin},
  {path: '\employee', component: EmployeeSignin},
  {path: '\admin-index', component: AdminIndexComponent},
  {path: '\admin-index/requests', component: ViewRequestsComponent},
  {path: '\admin-index/report', component: GenerateReportComponent},
  {path: '\signup', component: SignUpComponent},
  {path: 'user-index', component: UserIndexComponent},
  {path: 'user-index/cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
