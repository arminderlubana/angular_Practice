import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BlogAdminService} from '../adminShared/blog-admin.service';
import {Blog} from '../adminShared/blog';

@Component ({
    selector : 'add-menu',
    templateUrl : './blog-Add.component.html'
    
})

export class BlogAddComponent {

    imgTitle : string;
    imgSRC : string;
    postTitle: string;
    content : string;
    post: Blog;

    constructor(private blogAddminSRC: BlogAdminService, private router : Router)
    {

    }

   
    fileLoad($event: any) {
        let myReader:FileReader = new FileReader();
        let file:File = $event.target.files[0];
        this.imgTitle = file.name; 
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
            this.imgSRC = e.target.result;
        }

    }
    createPost(){
        this.post = new Blog(
            this.postTitle,
            this.content,
            //this.imgTitle,
           // this.imgSRC
        )

        this.blogAddminSRC.createPost(this.post);

        alert(`${this.postTitle} added to posts`);
         this.router.navigate(['/admin']);
    }

    cancel(){
    this.router.navigate(['/admin']);
    }

}