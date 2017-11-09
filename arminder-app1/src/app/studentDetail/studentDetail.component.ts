import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../admin/adminShared/student.service';
import { Student } from '../admin/adminShared/Student';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
@Component({
    templateUrl: './studentDetail.component.html',
    styleUrls: ['./studentDetail.component.css']
})

export class studentDetailComponent implements OnInit {
    student: Student;

    constructor(private studentSVC: StudentService, private route: Router) { }

    ngOnInit() {

        this.getStudent();
    }

    getStudent() {
        let student = this.studentSVC.get(1)
            .subscribe(p => this.student = p);;
      
    }
   
}
