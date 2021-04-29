import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Admin/sign-in/sign-in.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { RaiseTicketComponent } from './User/raise-ticket/raise-ticket.component';
import { AddProductComponent } from './Admin/admin-index/product-operations/add-product/add-product.component';
import { DeleteProductComponent } from './Admin/admin-index/product-operations/delete-product/delete-product.component';
import { UpdateProductComponent } from './Admin/admin-index/product-operations/update-product/update-product.component';
import { AddEmployeeComponent } from './Admin/admin-index/employee-operations/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './Admin/admin-index/employee-operations/delete-employee/delete-employee.component';
import { GenerateReportComponent } from './Admin/admin-index/generate-report/generate-report.component';
import { CartComponent } from './User/user-index/cart/cart.component';
import { SelectItemsComponent } from './User/user-index/cart/select-items/select-items.component';
import { ViewItemsComponent } from './User/user-index/cart/view-items/view-items.component';
import { CheckoutComponent } from './User/user-index/cart/checkout/checkout.component';
import { OrderStatusComponent } from './User/user-index/order-status/order-status.component';
import { EditProdileComponent } from './User/user-index/edit-profile/edit-prodile.component';
import { FundsComponent } from './User/user-index/funds/funds.component';
import { SendRequestComponent } from './Employee/employee-index/send-request/send-request.component';
import { UpdateOrderStatusComponent } from './Employee/employee-index/update-order-status/update-order-status.component';
import { EditProfileComponent } from './Employee/employee-index/edit-profile/edit-profile.component';
import { UnlockUsersComponent } from './Employee/employee-index/unlock-users/unlock-users.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { EmployeeIndexComponent } from './Employee/employee-index/employee-index.component';
import { UserIndexComponent } from './User/user-index/user-index.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewRequestsComponent } from './Admin/admin-index/view-requests/view-requests.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './User/signin/signin.component';
import {EmployeeSignInComponent} from './Employee/sign-in/sign-in.component';
import { MyAuthGuard } from './myauthguard';
import { UserAuthGuard } from './userAuthGuard';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RaiseTicketComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportComponent,
    CartComponent,
    SelectItemsComponent,
    ViewItemsComponent,
    CheckoutComponent,
    OrderStatusComponent,
    EditProdileComponent,
    FundsComponent,
    SendRequestComponent,
    UpdateOrderStatusComponent,
    EditProfileComponent,
    UnlockUsersComponent,
    AdminIndexComponent,
    EmployeeIndexComponent,
    UserIndexComponent,
    ViewRequestsComponent,
    MainComponent,
    SigninComponent,
    EmployeeSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [MyAuthGuard, UserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
