import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-project-manager',
  templateUrl: './list-project-manager.component.html',
  styleUrls: ['./list-project-manager.component.scss']
})
export class ListProjectManagerComponent implements OnInit {

  employes: Employee[] = [];
  roleName: string = 'ADMIN';
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
