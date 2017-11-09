import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ProductAdminService} from '../adminShared/product-admin.service';
import {Product} from '../adminShared/product';

@Component ({
    selector : 'addProd-menu',
    templateUrl : './product-Add.component.html'
    
})

export class ProductAddComponent {

    
    prodName: string;
    desc : string;
    price: number;
    product: Product;

    constructor(private productAddminSRC: ProductAdminService, private router : Router)
    {

    }

   
    // fileLoad($event: any) {
    //     let myReader:FileReader = new FileReader();
    //     let file:File = $event.target.files[0];
    //     this.imgTitle = file.name; 
    //     myReader.readAsDataURL(file);

    //     myReader.onload = (e: any) => {
    //         this.imgSRC = e.target.result;
    //     }

    // }
    createProduct(){
        this.product = new Product(
            this.prodName,
            this.desc,
            this.price
        )

        this.productAddminSRC.createProduct(this.product);

        alert(`${this.prodName} added to posts`);
         this.router.navigate(['/admin']);
    }

    cancel(){
    this.router.navigate(['/admin']);
    }

}