import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {ShopComponent} from '../Shop/shop.component';
import {ErrorComponent} from '../error/error.component';
import { BlogDetailComponent } from '../blogDetail/blogdetail.component';
import { ProductDetailComponent } from '../productDetail/productDetail.component';
import { CartComponent } from '../cart/cart.component';
import { StudentComponent } from '../student/student.component'
import { studentDetailComponent } from '../studentDetail/studentDetail.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'student/:id', component: studentDetailComponent },
            { path: 'student', component: StudentComponent },
            { path: 'cart', component: CartComponent },
             { path: 'product/:id', component: ProductDetailComponent },
            { path: 'shop', component: ShopComponent },            
            { path: 'post/:id', component: BlogDetailComponent },
            { path: '', component: HomeComponent},
            { path: '**', component: ErrorComponent}
        ])
    ],
    exports: [ RouterModule],
    declarations :[
        BlogDetailComponent
      ,
        ProductDetailComponent
    ]

    })

    export class AppRoutingModule {}