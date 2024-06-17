import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Objective} from "../models/Objective";
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private httpClient : HttpClient) { }

  private baseURL="http://localhost:8080/employees";





  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);

  }

  getEmployeeByEmail(email:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/email/${email}`);
  }
}

