import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIndexComponent } from './Employee/employee-index/employee-index.component';
import { UnlockUsersComponent } from './Employee/employee-index/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './Employee/employee-index/update-order-status/update-order-status.component';
import { EditProdileComponent } from './User/user-index/edit-profile/edit-prodile.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { GenerateReportComponent } from './Admin/admin-index/generate-report/generate-report.component';
import { ViewRequestsComponent } from './Admin/admin-index/view-requests/view-requests.component';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { EmployeeSignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { ViewItemsComponent } from './User/user-index/cart/view-items/view-items.component';
import { SigninComponent as UserSignin } from './User/signin/signin.component';
import { SendRequestComponent } from './Employee/employee-index/send-request/send-request.component';
import { SelectItemsComponent } from './User/user-index/cart/select-items/select-items.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminSignin },
  { path: 'shopper', component: UserSignin },
  { path: 'employee', component: EmployeeSignin },
  { path: 'admin-index', component: AdminIndexComponent },
  { path: 'admin-index/requests', component: ViewRequestsComponent },
  { path: 'admin-index/report', component: GenerateReportComponent },
  { path: 'employeeDashboard', component: EmployeeIndexComponent },
  { path: 'editEmployeeProfile', component: EditProdileComponent },
  { path: 'send-request', component: SendRequestComponent },
  { path: '\nlockUsers', component: UnlockUsersComponent },
  { path: 'pdateOrderStatus', component: UpdateOrderStatusComponent },
  { path: 'admin-index/report', component: GenerateReportComponent },
  { path: 'selectItems/cart', component: ViewItemsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'selectItems', component: SelectItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
