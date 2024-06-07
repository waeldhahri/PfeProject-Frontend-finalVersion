
import {Component, OnInit} from '@angular/core';
import {Objective} from "../../../models/Objective";
import {ObjectiveService} from "../../../services/objective.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";

import {MatSelectModule} from "@angular/material/select";
import {DialogElementsExampleDialog2} from "../objectifs-final/DialogElementsExampleDialog2";
import {DialogElementsExampleDialog3} from "./DialogElementsExampleDialog3";
import Swal from "sweetalert2";


@Component({
  selector: 'app-tasks',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class AppChipsComponent implements OnInit{


 objective :  Objective = new Objective();

  searchText!: string;
  persons: string[] = ['Wassim Chaaranna', 'Mohamed Zrelli', 'Mohamed Gharbi', 'Amine Fatnassi'];

constructor(private objectifSevice :ObjectiveService ,
            private router : Router,public dialog: MatDialog) {
}

//



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
  this.router.navigate(['/ui-components/objectifs']);
}


onSubmit(){
console.log(this.objective)

  this.checkObjective();
  //this.dialog.open(DialogElementsExampleDialog3);


}



  checkObjective() {
    if (this.objective.description === '') {
      this.showWarningPopup();
    } else {
      this.saveOvbjectif();
      this.showSuccessPopup();
    }
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

  showSuccessPopup() {
    Swal.fire({
      title: 'Success!',
      text: 'Your Objective has been added successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'my-popup',
        title: 'my-title'}
    }).then((result) => {
      if (result.isConfirmed) {
        this.handleOkAction();
      }

    });
  }

  showWarningPopup() {
    Swal.fire({
      title: 'Attention!',
      text: 'You must fill out the fields',
      icon: 'warning',
      confirmButtonText: 'Yes, I understand!',
      customClass:{
        popup:'attention',

      }
    });
  }



  handleOkAction() {

    // Par exemple, rediriger vers une autre page
   // this.router.navigate(['/another-page']);

    window.location.reload();
  }


  deleteReload() {
    window.location.reload();

  }
}













