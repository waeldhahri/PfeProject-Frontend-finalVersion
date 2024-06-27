import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppMenuComponent} from "../pages/ui-components/menu/menu.component";
import {Objective} from "../models/Objective";
import {Employee} from "../models/Employee";

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {



  private baseURL="http://localhost:8080/objectifs";


  constructor(private httpClient : HttpClient) { }


    createObjectif(objectif:Objective):Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`,objectif)
  }


  getobjectifById(objectifId: any): Observable<Objective>{
    return this.httpClient.get<Objective>(`${this.baseURL}/${objectifId}`);
  }
  updateobjectif(objectifId: string, objectif: Objective): Observable<void> {
    return this.httpClient.put<void>(`${this.baseURL}/${objectifId}`, objectif);
  }
}
