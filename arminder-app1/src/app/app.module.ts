import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BlogDetailComponent } from './blogDetail/blogdetail.component'
// import { ProductDetailComponent } from './productDetail/productDetail.component'
import { ShopComponent } from './Shop/shop.component';
import { ShoppingCartService } from './admin/adminShared/shopping-cart.service';
 import {CartComponent} from './cart/cart.component';
 import {StudentComponent} from './student/student.component';
 import { StudentService } from './admin/adminShared/student.service';
// import { CartComponent } from './cart/cart.component';
//  import {TruncatePipe} from './admin/adminShared/trunc.pipe';,TruncatePipe
import { studentDetailComponent } from './studentDetail/studentDetail.component';
@NgModule({
  declarations: [
    AppComponent
    , NavComponent
    , HomeComponent
    , ErrorComponent
    , ShopComponent
    , CartComponent
    , StudentComponent,
    studentDetailComponent
  ],
  imports: [
    BrowserModule, AdminModule, AppRoutingModule,HttpModule, NgbModule.forRoot()
  ],
  providers: [ShoppingCartService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
