import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/auth";

  constructor(private httpClient : HttpClient) { }

  authenticate(request: any) {
    return this.httpClient.post<any>(this.url + '/authenticate', request)
  }
}
