import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeIndexComponent } from './Employee/employee-index/employee-index.component';
import { SendRequestComponent } from './Employee/employee-index/send-request/send-request.component';
import { UnlockUsersComponent } from './Employee/employee-index/unlock-users/unlock-users.component';
import { UpdateOrderStatusComponent } from './Employee/employee-index/update-order-status/update-order-status.component';
import { EditProdileComponent } from './User/user-index/edit-profile/edit-prodile.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { GenerateReportComponent } from './Admin/admin-index/generate-report/generate-report.component';
import { SignInComponent as AdminSignin } from './Admin/sign-in/sign-in.component';
import { EmployeeSignInComponent as EmployeeSignin } from './Employee/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { ViewItemsComponent } from './User/user-index/cart/view-items/view-items.component';
import { SigninComponent as UserSignin } from './User/signin/signin.component';
import { SelectItemsComponent } from './User/user-index/cart/select-items/select-items.component';
import { MyAuthGuard } from './myauthguard';
import { CartComponent } from './User/user-index/cart/cart.component';
import { OrderStatusComponent } from './User/user-index/order-status/order-status.component';
import { UserIndexComponent } from './User/user-index/user-index.component';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';
import { EditProfileComponent } from './Employee/employee-index/edit-profile/edit-profile.component';
import { UserAuthGuard } from './userAuthGuard';
import { AddProductComponent } from './Admin/admin-index/product-operations/add-product/add-product.component';
import { UpdateProductComponent } from './Admin/admin-index/product-operations/update-product/update-product.component';
import { DeleteProductComponent } from './Admin/admin-index/product-operations/delete-product/delete-product.component';
import { AddEmployeeComponent } from './Admin/admin-index/employee-operations/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Admin/admin-index/employee-operations/delete-employee/delete-employee.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminSignin },
  { path: 'shopper', component: UserSignin },
  { path: 'employee', component: EmployeeSignin },


  { path: 'admin-index', component: AdminIndexComponent, canActivate: [MyAuthGuard] },
  { path: 'admin-index/report', component: GenerateReportComponent, canActivate: [MyAuthGuard] },
  { path: 'admin-index/addProduct', component: AddProductComponent, canActivate: [MyAuthGuard] },
  { path: 'admin-index/updateProduct', component: UpdateProductComponent, canActivate: [MyAuthGuard] },
  { path: 'admin-index/deleteProduct', component: DeleteProductComponent, canActivate: [MyAuthGuard] },
  { path: 'admin-index/addEmployee', component: AddEmployeeComponent, canActivate: [MyAuthGuard] },
  { path: 'admin-index/deleteEmployee', component: DeleteEmployeeComponent, canActivate: [MyAuthGuard] },


  { path: 'employee-index', component: EmployeeIndexComponent },
  { path: 'employee-index/edit-employee-profile', component: EditProfileComponent },
  { path: 'employee-index/send-request', component: SendRequestComponent },
  { path: 'employee-index/unlock-users', component: UnlockUsersComponent },
  { path: 'employee-index/update-order-status', component: UpdateOrderStatusComponent },

  { path: 'signup', component: SignUpComponent},
  { path: 'user-index/select-item', component: SelectItemsComponent },
  { path: 'purchaseComplete', component: CartComponent },

  { path: 'user-index', component: UserIndexComponent, canActivate: [UserAuthGuard]},
  { path: 'user-index/cart', component: CartComponent, canActivate: [UserAuthGuard] },
  { path: 'user-index/edit-profile', component: EditProdileComponent, canActivate: [UserAuthGuard] },
  { path: 'user-index/order-status', component: OrderStatusComponent, canActivate: [UserAuthGuard] },
  { path: 'user-index/view-item', component: ViewItemsComponent, canActivate: [UserAuthGuard] },
  { path: 'user-index/raise-ticket', component: RaiseTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
