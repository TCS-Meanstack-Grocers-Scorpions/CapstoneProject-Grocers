import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIndexComponent } from './Employee/employee-index/employee-index.component';
import { SendRequestComponent } from './Employee/employee-index/send-request/send-request.component';
import { UnlockUsersComponent } from './Employee/employee-index/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './Employee/employee-index/update-order-status/update-order-status.component';
import { EditProdileComponent } from './User/user-index/edit-profile/edit-prodile.component';

const routes: Routes = [
  {path:"\employeeDashboard",component:EmployeeIndexComponent},
  {path:"\editEmployeeProfile",component:EditProdileComponent},
  {path:"\sendRequest",component:SendRequestComponent},
  {path:"\nlockUsers",component:UnlockUsersComponent},
  {path:"\pdateOrderStatus",component:UpdateOrderStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
