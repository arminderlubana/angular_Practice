import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../admin/adminShared/student.service';
import { Student } from '../admin/adminShared/student';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { PagingInfo } from "../admin/adminShared/PagingInfo";
@Component({
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
    students: Student[];
    student: Student;
    paginfo: PagingInfo;
    range: number[] = [];
    isDesc: boolean = false;
    column: string = 'firstName';
    constructor(private studentSVC: StudentService, private route: Router) { }

    ngOnInit() {

        this.getCustomePaging();
        //this.getStudents();
    }

    getCustomePaging() {
        this.studentSVC.getNew()
            .subscribe(p => {
                this.paginfo = p;
                this.students = p.Results;
                this.range = Array.from({ length: p.totalNumberOfPages }, (value, key) => key + 1);

            });
    }
    getCustomePage(pnumber: number) {
        console.log(pnumber);
        if (pnumber >= this.paginfo.totalNumberOfPages) {
            pnumber = this.paginfo.totalNumberOfPages;
        }
        else if (pnumber < 1) {
            pnumber = 1;
        }
        console.log(pnumber);
        this.studentSVC.getNew1(pnumber)
            .subscribe(p => {
                this.paginfo = p;
                this.students = p.Results;
                this.range = Array.from({ length: p.totalNumberOfPages }, (value, key) => key + 1);

            });
    }
    getStudent() {
        let student = this.studentSVC.get(1)
            .subscribe(p => this.student = p);;

    }
    getStudents() {
        this.studentSVC.getAll()
            .subscribe(p => { this.students = p });

    }
    chooseStudent(stu: Student) {
        this.route.navigate(['/student', stu.id])
    }

    sort(property){
        console.log(property);
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        let direction = this.isDesc ? 1 : -1;
    console.log(this.isDesc)
    console.log(direction)

        this.students.sort(function(a, b){
            if(a[property] < b[property]){
                return -1 * direction;
            }
            else if( a[property] > b[property]){
                return 1 * direction;
            }
            else{
                return 0;
            }
        });
    };
}
