import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../admin/adminShared/user.service';
import * as firebase from 'firebase';
import { Product } from '../admin/adminShared/product';

@Component({
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
    products: Product[];
    constructor(private userSVC: UserService, private route: Router) { }

    ngOnInit() {
        this.getProducts();
    }
    
    getProducts() {
        let dbRef = firebase.database().ref('products/');
        dbRef.once('value')
            .then((snapshot) => {
                let tmp: string[] = snapshot.val();
                this.products = Object.keys(tmp).map(key => tmp[key])
            });
    }

    chooseProduct(product: Product) {
        this.route.navigate(['/product', product.id])
    }
}
