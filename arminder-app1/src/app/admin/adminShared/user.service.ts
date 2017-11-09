import {Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';
@Injectable()

export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;
    constructor( private router: Router ) {
        var config = {
            apiKey: "AIzaSyD2BK5wDRScr3hw00n6bOOHnqy2QiUqk1I",
            authDomain: "myfireservice.firebaseapp.com",
            databaseURL: "https://myfireservice.firebaseio.com",
            projectId: "myfireservice",
            storageBucket: "myfireservice.appspot.com",
            messagingSenderId: "697570512714"
          };
          firebase.initializeApp(config);
    }
    
    canActivate (router:ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        let url:string =state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string) : boolean {

        if(this.userLoggedIn) { return true ;}

        this.router.navigate(['/admin/login']);
        return false;
    }
    register(email : string, password : string) {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(function(error){
                alert(`${error.message} Please try again !`);
            });
    }
    verifyUser(){

        this.authUser = firebase.auth().currentUser;
        if(this.authUser) {
            alert(`Welcome ${ this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }

    }

login( loginEmail : string, loginPassword : string){
    firebase.auth().signInWithEmailAndPassword(loginEmail,loginPassword )
    .catch(function(error){
        alert(`${error.message} Unable to login, try again !!!`);
    });
}
    logout(){
        this.userLoggedIn =false ;
        firebase.auth().signOut().then( function(){
            alert(`Logged Out !!`);
        }, function(error) {
            alert(`${error.message} Unable to logout. ry again !!!`);
        });
    }
}