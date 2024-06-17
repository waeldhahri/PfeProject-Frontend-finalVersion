import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private route: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url)
    if (!request.url.includes("/auth/authenticate")) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    }

    return next.handle(request).pipe(catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          // Specific handling for unauthorized errors
          console.error('Unauthorized request:', err);
          // You might trigger a re-authentication flow or redirect the user here
        } else if (err.status === 403) {
          localStorage.clear();
          this.route.navigate(['/authentication/login'])

          Swal.fire("Your Session is expired! You should reconnected");
         // console.error('HTTP error:', err);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err);
    }));
  }



}
