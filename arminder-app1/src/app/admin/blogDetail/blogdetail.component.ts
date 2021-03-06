import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';
import { Blog } from '../adminShared/blog';
@Component({
    templateUrl: './blogdetail.component.html',
    styleUrls: ['./blogdetail.component.css']
})
export class BlogDetailComponent implements OnInit {
    singlePost: Blog;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        let postId = this.route.snapshot.params['id'];
        this.getSingle(postId);
    }

    getSingle(id: string) {
        let dbRef = firebase.database().ref('blogPosts');
        dbRef.orderByChild('id')
            .equalTo(id)
            .once('value')
            .then((snapshot) => {
                let tmp = snapshot.val();
                let transform = Object.keys(tmp).map(key => tmp[key]);
                let title = transform[0].title;
                let content = transform[0].content;
                this.singlePost = new Blog(title, content);
            });
    };
}
