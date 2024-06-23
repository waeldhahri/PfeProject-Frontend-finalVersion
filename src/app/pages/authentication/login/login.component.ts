import {Component} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {local} from "d3";
import {Route, Router} from "@angular/router";
import Swal from "sweetalert2";
import {EmployeeService} from "../../../services/employee.service";
import {SessionService} from "../../../services/session.service";
import {Employee} from "../../../models/Employee";
import {Session} from "../../../models/Session";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {

  requestForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private empolyeService: EmployeeService
              ,private sessionService:SessionService,
              private route: Router) {
  }

  authenticate() {
    let request = {
      email: this.requestForm.value['email'],
      password: this.requestForm.value['password']
    }

    this.loginService.authenticate(request).subscribe(res => {
      localStorage.setItem('token', res.token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome to Leoni Dashboard",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.route.navigate(['/dashboard']);
      }, 800);
      this.empolyeService.getEmployeeByEmail(request.email).subscribe(res => {
        localStorage.setItem("role", JSON.stringify(res.roles.name));

        let session = this.createSession(res)
        console.log(session)
        this.sessionService.loginSession(session).subscribe(res=>{
          console.log(res)
          localStorage.setItem("sessionId", JSON.stringify(res));
        })
      });



    }, error => {
      console.log(request.email,request.password);


      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or Password incorrect!",
      });
    })
  }
  createSession(employe:Employee){
    let session = new Session();
    session.employe = employe;
    return session;
  }
}
