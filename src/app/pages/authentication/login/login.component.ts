import {Component} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {FormControl, FormGroup} from "@angular/forms";
import {local} from "d3";
import {Route, Router} from "@angular/router";
import Swal from "sweetalert2";
import {EmployeeService} from "../../../services/employee.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {

  requestForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private empolyeService: EmployeeService,
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
      })
    }, error => {
      console.log(request.email,request.password);


      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or Password incorrect!",
      });
    })
  }
}
