import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AdminComponent} from  './adminComponent/admin.component';
import {AdminMenuComponent} from './adminMenu/adminMenu.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './signUp/SignUp.Component';

import {UserService} from './adminShared/user.service';
import {BlogAdminService} from './adminShared/blog-admin.service'
import {BlogAdminComponent} from './blogAdmin/blog-Admin.Component';
import {BlogAddComponent} from './blogAdd/blog-Add.component';
import {TruncatePipe} from './adminShared/trunc.pipe';
import {ProductAdminService} from './adminShared/product-admin.service'
import {ProductAdminComponent} from './ProductAdmin/Product-Admin.Component';
import {ProductAddComponent} from './ProductAdd/product-Add.component';
const AdminRoutes: Routes =[
    { 
        path: 'admin',
        component: AdminComponent,
        children : [
           { path : 'product-admin', component: ProductAdminComponent,canActivate: [UserService] },
            { path : 'blog-admin', component: BlogAdminComponent,canActivate: [UserService] },
            { path : 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path : '', component : AdminMenuComponent, canActivate: [UserService] }
            ]
       
    },

];

@NgModule({
    imports: [ 
                CommonModule, 
                FormsModule, 
                RouterModule.forChild(AdminRoutes)
            ],
    exports: [
                RouterModule
            ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent,
        BlogAdminComponent,
        BlogAddComponent,
        TruncatePipe
        ,
        ProductAdminComponent,
        ProductAddComponent
    ],
    providers: [UserService, BlogAdminService,ProductAdminService]
})

export class AdminModule {}

