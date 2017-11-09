import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Product } from '../adminshared/product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class ProductAdminService {

    createProduct(product: Product) {
        let dbRef = firebase.database().ref('products/');
        let newProd = dbRef.push();
        newProd.set({
            name: product.name,
            description: product.description,
            price: product.price,
            id: newProd.key
        })
            .catch((error) => {
                alert(`failed upload: ${error}`);
            })
    }

    editProduct(update: Product) {
        let dbRef = firebase.database().ref('products/').child(update.id)
            .update({
                name: update.name,
                description: update.description,
                price: update.price
            });
        alert('product updated');
    }

    removeProduct(deleteProduct: Product) {
        let dbRef = firebase.database().ref('products/').child(deleteProduct.id).remove();
        alert('product deleted');       
    }

}