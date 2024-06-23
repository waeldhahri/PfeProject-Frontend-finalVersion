import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/Employee";
import {Session} from "../models/Session";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseURL="http://localhost:8080/api/sessions";

  constructor(private httpClient : HttpClient) { }



  loginSession(session : Session):Observable<number>{
    return this.httpClient.post<any>(`${this.baseURL}/login/${session.employe.employeeId}`,session);

  }

  logoutSession(session : Session):Observable<number>{
    return this.httpClient.put<number>(`${this.baseURL}/logout/${session.id}`,session);

  }
}
