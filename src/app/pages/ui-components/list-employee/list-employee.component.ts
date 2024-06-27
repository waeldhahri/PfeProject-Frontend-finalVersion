import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../models/Employee";
import {EmployeeService} from "../../../services/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ObjectifListServiceService} from "../../../services/objectif-list-service.service";
import {MatDialog} from "@angular/material/dialog";
import {Objective} from "../../../models/Objective";
import Swal from "sweetalert2";



@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employes: Employee[] = [];
  roleName: string = 'USER';

  constructor(private employeService: EmployeeService, private router: Router, public dialog: MatDialog ,
              ) {
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

  goToregister() {
    this.router.navigate(['/ui-components/register']);
  }

  gotoupdateprofile(employeeId: any): void  {
    this.router.navigate(['/ui-components/Editprofile',employeeId]);
    console.log(employeeId);
  }

  deleteEmployee(employe: Employee) {


    Swal.fire({
      title: "Do you want to delete this Employe",
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
          text: "The Employe has been deleted.",
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
  refrechthepage(){
    this.router.navigate(['/ui-components/employelist']);
  }


  handleOkAction() {

    // Par exemple, rediriger vers une autre page
    // this.router.navigate(['/another-page']);

    window.location.reload();
  }

  showSuccessPopup() {


    Swal.fire({
      title: "Do you want to delete this Employe",
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
          text: "The Employe has been deleted.",
          icon: "success"
        });
        this.handleOkAction();
      }
    });
  }








}
