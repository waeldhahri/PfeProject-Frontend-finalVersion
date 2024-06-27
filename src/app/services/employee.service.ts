import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Objective} from "../models/Objective";
import {Employee} from "../models/Employee";
import {RegistrarRequest} from "../models/registrar-request";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private httpClient : HttpClient) { }

  private baseURL="http://localhost:8080/employees";
  private baseURL2="http://localhost:8080/auth/register"





  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);

  }

  getEmployeeByEmail(email:string):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/email/${email}`);
  }

  getEmployesByRole(roleName: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/role/${roleName}`);
  }

  createUser(employee: RegistrarRequest):Observable<Object>{

    return this.httpClient.post(`${this.baseURL2}`,employee)
  }

  deleteEmploye( id:number):Observable<object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }

  getEmployeeById(employeeId: any): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }
  updateEmployee(employeeId: string, employee: Employee): Observable<void> {
    return this.httpClient.put<void>(`${this.baseURL}/update/${employeeId}`, employee);
  }
}

