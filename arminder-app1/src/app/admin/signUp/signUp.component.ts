import {Component} from '@angular/core';
import {UserService} from '../adminShared/user.service'
import { Router} from '@angular/router';

@Component({
   templateUrl :'./signUp.component.html',
    styleUrls: ['./signUp.component.css']
})

export class SignUpComponent{
    email: string;
    password1: string;
    password2: string;
    passwordFailed: boolean =false;

    constructor (private userSVR: UserService , private router: Router){}

    signUp(){
        if(this.password1 !== this.password2){
            this.passwordFailed =true;
        }
        else {
            this.passwordFailed=false;
            this.userSVR.register(this.email, this.password1);
            this.userSVR.verifyUser();
        }
    }
    cancel(){
        this.router.navigate(['/admin/login']);
    }
}