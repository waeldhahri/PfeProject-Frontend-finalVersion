import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent
  implements OnInit, OnDestroy,AfterViewInit  {
    @ViewChild('drawer') drawer!: MatDrawer;


  updateemploye!: Employee;

  editProfileForm!: FormGroup;


    employees!:Employee[];



  searchText2!: any;


    days : string = '00'
    hours: string = '00';
    minutes: string = '00';
    seconds: string = '00';

    private intervalId: any;



    showFiller = false;
    isClicked= true;

    searchText!: any;

  persons: any[] = [{libelle: 'Employe',name: 'USER', id: 1}, {libelle: 'Manager',name: 'ADMIN', id: 2}
    ,{libelle: 'HR',name: 'SUPERADMIN', id: 3}];
  equipes : string[] = ['LTN 2', 'LTN 3' , 'LTN 4', 'LTN 5' ,'LTN 6'] ;
    selectedEmploye!: Employee;






    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      //this.employees.map(a->a.username).filter = filterValue.trim().toLowerCase();



      this.employees.filter( employee=> employee.username.trim().toLowerCase());

      this.equipes.filter(equipe => equipe.toLowerCase().includes(this.searchText.toLowerCase()));
    }




    constructor(private employeeService:EmployeeService, private route: ActivatedRoute , private fb: FormBuilder,
                private router: Router) {}




    private getEmployees(){
      this.employeeService.getEmployeeList().subscribe(data =>{
        this.employees=data ;
        console.log("wael");
      });
    }

    toggleDrawerAndFiller() {
      this.isClicked = !this.isClicked;

      this.showSuccessPopup;

    }


    ngOnInit() {


      const employeeId = this.route.snapshot.paramMap.get('employeeId');
      this.editProfileForm = this.fb.group({
        name: [''],
        email: [''],
        identifiant: [''],
        status: [''],
        bloc2: ['']
      });

      if (employeeId) {
        this.employeeService.getEmployeeById(employeeId).subscribe(employee => {
          this.selectedEmploye = employee;
          this.editProfileForm = this.fb.group({
            name: [employee.name],
            email: [employee.email],
            identifiant : [employee.identifiant],
            bloc2: this.equipes.find(data => data == employee.bloc2),
            status: [this.persons.find(data => data.name == employee.roles.name)]

          });
          console.log(employee)
        });

      }

            this.getEmployees();











      this.filteredPersons;
      this.filteredEquipes;
      // Date de fin de votre compte à rebours
      const endDate = new Date('2024-04-30T00:00:00');

      // Mettre à jour l'horloge toutes les secondes
      this.intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;

        if (distance > 0) {
          this.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
          this.hours = this.formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          this.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
          this.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
        } else {
          // Si le temps restant est écoulé, afficher 00:00:00
          this.days='00'
          this.hours = '00';
          this.minutes = '00';
          this.seconds = '00';
          clearInterval(this.intervalId);
        }
      }, 1000);
    }

    ngOnDestroy() {
      // Nettoyer l'intervalle lors de la destruction du composant
      clearInterval(this.intervalId);
    }

    private formatTime(time: number): string {
      return time < 10 ? '0' + time : '' + time;
    }




    get filteredPersons() {
      if (!this.searchText) {
        return this.persons;
      }
      return this.persons.filter(person => person.toLowerCase().includes(this.searchText.toLowerCase()));
    }

    filterOptions(value: string) {
      this.searchText = value;
    }


    get filteredEquipes() {
      if (!this.searchText) {
        return this.equipes;
      }
      return this.equipes.filter(equipe => equipe.toLowerCase().includes(this.searchText.toLowerCase()));
    }

    ngAfterViewInit(): void {
    }

  onSubmit2(): void {
    const employeeId : any = this.route.snapshot.paramMap.get('id');
    if (this.editProfileForm.valid) {
      this.employeeService.updateEmployee(employeeId , this.editProfileForm.value).subscribe(() => {
        // Handle successful update
      });
    }
  }


  onSearchTextChange() {
    // ** Nouvelle méthode ajoutée pour mettre à jour newemploye.roles **
    if (this.searchText)
      this.updateemploye.roles.name = this.searchText.role;
  }



  onSearchTextChange2() {
    // ** Nouvelle méthode ajoutée pour mettre à jour newemploye.roles **
    if (this.searchText2)
      this.updateemploye.bloc2 = this.searchText2;
  }

  onSubmit(){

    this.onSearchTextChange();
    this.onSearchTextChange2();
    console.log(this.updateemploye)

    //this.dialog.open(DialogElementsExampleDialog3);


  }
  showSuccessPopup() {
    Swal.fire({
      title: 'Success!',
      text: 'Your USER has been updated successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'my-popup',
        title: 'my-title'}
    }).then((result) => {
      if (result.isConfirmed) {
        //this.handleOkAction();
        //window.location.reload();
      }

    });
  }

  update() {
      let employe = this.buildEmploye();
      this.employeeService.updateEmployee(this.selectedEmploye.employeeId, employe).subscribe(res => {
        this.showSuccessPopup();
        switch (employe?.roles?.name) {
          case 'USER': this.router.navigate(['/ui-components/employelist']); break
          case 'ADMIN': this.router.navigate(['/ui-components/managerlist']); break;
          case 'SUPERADMIN': this.router.navigate(['/ui-components/register']); break;        }
        console.log(res)
      })


  }

  private buildEmploye() {
    let employe = new Employee();
    employe.username = this.editProfileForm.value['name']
    employe.email = this.editProfileForm.value['email']
    employe.identifiant = this.editProfileForm.value['identifiant']
    employe.roles = this.editProfileForm.value['status']
    employe.bloc2 = this.editProfileForm.value['bloc2']
    return employe;
  }
}
