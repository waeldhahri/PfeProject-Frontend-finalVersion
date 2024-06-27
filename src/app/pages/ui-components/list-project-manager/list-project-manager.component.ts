import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../models/Employee";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

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


  gotoupdateprofile(employeeId: any): void  {
    this.router.navigate(['/ui-components/Editprofile',employeeId]);
    console.log(employeeId);
  }


  deleteEmployee(employe: Employee) {


    Swal.fire({
      title: "Do you want to delete this Manager",
      text: "You won't be able to revert it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "The Manager has been deleted.",
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {

            this.employeService.deleteEmploye(employe.employeeId).subscribe((res) => {
              console.log(res);



            });
            this.handleOkAction();
          }

        });




      }
    });

  }

  handleOkAction() {

    // Par exemple, rediriger vers une autre page
    // this.router.navigate(['/another-page']);

    window.location.reload();
  }


}
