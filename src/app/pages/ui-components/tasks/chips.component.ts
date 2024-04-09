
import {Component, OnInit} from '@angular/core';
import {Objective} from "../../../models/Objective";
import {ObjectiveService} from "../../../services/objective.service";
import {Router} from "@angular/router";

import {MatSelectModule} from "@angular/material/select";


@Component({
  selector: 'app-tasks',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class AppChipsComponent implements OnInit{


 objective :  Objective = new Objective();

  searchText!: string;
  persons: string[] = ['wael', 'wassim', 'wael', 'wassim'];

constructor(private objectifSevice :ObjectiveService ,
            private router : Router) {
}

//
  options = [
    { value: '1', name: 'Option 1', avatar: 'avatar1.jpg' },
    { value: '2', name: 'Option 2', avatar: 'avatar2.jpg' },
    { value: '3', name: 'Option 3', avatar: 'avatar3.jpg' }
  ];



  ngOnInit(){


this.filteredPersons;









    };


saveOvbjectif(){
  this.objectifSevice.createObjectif(this.objective)
    .subscribe(data =>{
       console.log(data);
    },

      error => console.log(error));
}

goToObjectifList(){
  this.router.navigate(['/']);
}
onSubmit(){
console.log(this.objective)
  this.saveOvbjectif();
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



}













