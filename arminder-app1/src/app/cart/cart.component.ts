import { Component, OnInit } from '@angular/core'
import { ShoppingCartService } from '../admin/adminShared/shopping-cart.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../admin/adminShared/product';
import { UserService } from '../admin/adminShared/user.service';
import { ProductAdminService } from '../admin/adminShared/product-admin.service';
@Component({
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.css']
})

export class CartComponent {
    myCart: any[];
    cartTotal: any;

    constructor(private cartSVC: ShoppingCartService, private router: Router) { }
    ngOnInit() {
        this.cartSVC.getCart()
            .then(theCart => this.myCart = theCart)
            .then(cart => this.sumCart(cart))
            .then(sum => this.cartTotal = sum);
    }


    sumCart(cart: any) {
        return Promise.resolve(cart.reduce((total: number, item: any) => total + item.price, 0));
    }

    removeCart(id:string){
        alert("yes")
        this.cartSVC.removeCart(id);
        this.sumCart(this.myCart).then(sum => this.cartTotal = sum); 
    }
    purchase() {
        alert(`Your Order Totaaled ${this.cartTotal}`);
        this.router.navigate(['/shop']);
    }

    cancel() {
        this.router.navigate(['/shop']);
    }
}
