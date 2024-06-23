import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../models/Employee";
import {EmployeeService} from "../../../services/employee.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit{

  employes: Employee[] = [];
  roleName: string = 'USER';

  constructor(private employeService : EmployeeService , private router : Router) {
  }

  ngOnInit(): void {
    this.loadEmployes();
  }



  loadEmployes(): void {
    this.employeService.getEmployesByRole(this.roleName).subscribe(
      (data) => {
        this.employes = data;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
  goToregister(){
    this.router.navigate(['/ui-components/register']);
  }

  gotoupdateprofile() {
    this.router.navigate(['/ui-components/Editprofile']);
  }
}
