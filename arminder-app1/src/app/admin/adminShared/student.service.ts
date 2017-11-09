import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; //get everything from Rx  
import 'rxjs/add/operator/map';
import { Student } from './student'
import { PagingInfo } from "./PagingInfo";

@Injectable()

export class StudentService {
    private baseUrl: string = 'http://localhost:51674/api';
    constructor(private http: Http) { }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    private toStudent(r: any): Student {
        let student = <Student>({
            id: r.id,
            lastName: r.lastName,
            firstMidName: r.firstMidName,
            comment: r.comment,
            class: r.class,
            enrollmentDate: r.enrollmentDate
        });
        console.log(student);
        return student;
    }

    extractId(personData: any) {
        let extractedId = personData.url.replace('http://localhost:51674/api/students/', '').replace('/', '');
        return parseInt(extractedId);
    }

    mapStudent(response: Response): Student {
        let r = response.json();
        let iid = r.id;
        let student = <Student>({
            id: iid,
            lastName: r.lastName,
            firstMidName: r.firstMidName,
            comment: r.comment,
            class: r.class,
            enrollmentDate: r.enrollmentDate
        });
        return student;
    }
    get(id: number): Observable<Student> {
        let student$ = this.http
            .get(`${this.baseUrl}/students/${id}`, { headers: this.getHeaders() })
            .map(this.mapStudent);
        //.catch(this.handleError);
        return student$;
    }

    getNew(): Observable<PagingInfo> {
        let a = this.http
            .get(`${this.baseUrl}/students/1/10`, { headers: this.getHeaders() })
            .map(res => res.json())
            .map((resp: PagingInfo) => new PagingInfo(resp));
            //console.log(a);
        return a;
    }
    getNew1(pNumber: number): Observable<PagingInfo> {
        let a = this.http
            .get(`${this.baseUrl}/students/${pNumber}/20`, { headers: this.getHeaders() })
            .map(res => res.json())
            .map((resp: PagingInfo) => new PagingInfo(resp));
            //console.log(a);
        return a;
    }
    getAll(): Observable<Student[]> {
        let a = this.http
            .get(`${this.baseUrl}/students/1/15`, { headers: this.getHeaders() })
            .map(p => this.mapStudents(p));
        return a;
    }


    mapStudents(response: Response): Student[] {
        return response.json().map(this.toStudent);
    }
    mapCustomePaging(response: Response): PagingInfo {
        return response.json().map(this.toCustomePaging);
    }

    private toCustomePaging(pg1: Response): PagingInfo {
        console.log(pg1);
        let pg = pg1.json();
        console.log(pg);

        // console.log(pg);
        // let ab = new PagingInfo(
        let pgInfo = <PagingInfo>({
            pageNumber: pg.pageNumber,
            pageSize: pg.pageSize,
            totalNumberOfPages: pg.totalNumberOfPages,
            totalNumberOfRecords: pg.totalNumberOfRecords

        });

        console.log(pgInfo instanceof PagingInfo)
        return pg;
    }
}