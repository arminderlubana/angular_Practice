import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';
import { Product } from '../admin/adminShared/product';
import {ShoppingCartService} from '../admin/adminShared/shopping-cart.service'
@Component({
    templateUrl: './productDetail.component.html',
    styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
    singleProduct: Product;

    constructor(private route: ActivatedRoute, private router: Router, private cartSVC: ShoppingCartService) { }

    ngOnInit() {
         let productId = this.route.snapshot.params['id'];
         this.getSingle(productId);
    }

    getSingle(id: string) {
        let dbRef = firebase.database().ref('products');
        dbRef.orderByChild('id')
            .equalTo(id)
            .once('value')
            .then((snapshot) => {
                let tmp = snapshot.val();
                let transform = Object.keys(tmp).map(key => tmp[key]);
                let name = transform[0].name;
                let description = transform[0].description;
                let price = transform[0].price;
                let id = transform[0].id;
                this.singleProduct = new Product (name = name, description = description, price = price,id =id);
            });
    };

    addProduct(id: string, name: string, price: number){
        this.cartSVC.addProduct(id,name,price);

    }
}
