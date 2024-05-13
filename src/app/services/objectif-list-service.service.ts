import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Objective} from "../models/Objective";

@Injectable({
  providedIn: 'root'
})
export class ObjectifListServiceService {

  private baseURL="http://localhost:8080/objectifs";


  constructor(private httpClient : HttpClient) { }



  getObjectifList():Observable<Objective[]>{
    return this.httpClient.get<Objective[]>(`${this.baseURL}`);

  }

  getObjectifs(page: number, size: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/objectifs/page?page=${page}&size=${size}`);
  }


  private baseURL2="http://localhost:8080/objectifs/datelimite";

  getObjectifdateLimite():Observable<Objective[]>{
    return this.httpClient.get<Objective[]>(`${this.baseURL2}`);
  }



}
