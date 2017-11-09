import {Component} from '@angular/core';
import {UserService} from '../adminShared/user.service';
import {Router} from '@angular/router';
@Component({
   templateUrl :'./login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{
    email: string;
    password1: string;

    constructor(private userSVR: UserService, private router: Router){

    }

    login(){
        this.userSVR.login(this.email,this.password1);
        this.userSVR.verifyUser();
    }

    cancel(){
      this.router.navigate(['']);
    }
    signup(){
        this.router.navigate(['/admin/signup']);
    }
}