import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent
  implements OnInit, OnDestroy,AfterViewInit  {
    @ViewChild('drawer') drawer!: MatDrawer;







    employees!:Employee[];






    days : string = '00'
    hours: string = '00';
    minutes: string = '00';
    seconds: string = '00';

    private intervalId: any;



    showFiller = false;
    isClicked= true;

    searchText!: string;
    persons: string[] = ['Employe', 'Manager', 'SuperManager'];
    equipes : string[] = ['Team A', 'Team B' , 'Team C', 'Team D' ,'Team F '] ;






    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      //this.employees.map(a->a.username).filter = filterValue.trim().toLowerCase();



      this.employees.filter( employee=> employee.username.trim().toLowerCase());

      this.equipes.filter(equipe => equipe.toLowerCase().includes(this.searchText.toLowerCase()));
    }




    constructor(private employee:EmployeeService) {}




    private getEmployees(){
      this.employee.getEmployeeList().subscribe(data =>{
        this.employees=data ;
        console.log("wael");
      });
    }

    toggleDrawerAndFiller() {
      this.isClicked = !this.isClicked;
      this.drawer.toggle();
    }
    ngOnInit() {


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
}
