import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Objective} from "../../../models/Objective";
import {ObjectiveService} from "../../../services/objective.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-update-objectif',
  templateUrl: './update-objectif.component.html',
  styleUrls: ['./update-objectif.component.scss']
})
export class UpdateObjectifComponent  implements OnInit {




  objective :  Objective = new Objective();
  selectedObjective!: Objective;
  searchText!: string[];
  searchText2!: string;
  persons: string[] = ['Wassim Chaaranna', 'Mohamed Zrelli', 'Mohamed Gharbi', 'Amine Fatnassi'];

  types: string[] = ['Operations', 'IOT', 'DEVOPS', 'Développement Web / Mobile' ,'Cloud','UI/UX',
    'Infrastructure IT et Gestion des Réseaux' , 'Intelligence Artificielle' ,' Big Data'];
  constructor(private objectifSevice :ObjectiveService ,
              private router : Router,public dialog: MatDialog ,
              private route:ActivatedRoute,private fb:FormBuilder
  ) {
  }

  editProfileForm!: FormGroup;


  ngOnInit(): void {
    const objectifId = this.route.snapshot.paramMap.get('objectifId');
    this.editProfileForm = this.fb.group({
      objectifTitle: [''],
      objectifType: [''],
      description: [''],
      objectifStart: [''],
      dateLimite: [''],
      assigned: new FormControl([''])
    });

    if (objectifId) {
      this.objectifSevice.getobjectifById(objectifId).subscribe(objectif => {
        this.selectedObjective = objectif;
        this.editProfileForm = this.fb.group({
          objectifTitle: objectif.objectifTitle,
          objectifType: this.types.find(data => data == objectif.objectifType),
          description: objectif.description,
          objectifStart: objectif.objectifStart,
          dateLimite: objectif.dateLimite,
          assigned: this.persons.filter(data => data == objectif.assigned)
        });
        console.log(this.editProfileForm.value, objectif)
      });
    }
  }


  updateObjective() {
    let objective = this.buildObjective();
    this.objectifSevice.updateobjectif(this.selectedObjective.objectifId, objective).subscribe(res => {
      this.showSuccessPopup();
      this.router.navigate(['/ui-components/objectifs'])
    })
  }

  private buildObjective() {
    let objective = new Objective();
    objective.objectifType = this.editProfileForm.value['objectifType']
    objective.objectifTitle = this.editProfileForm.value['objectifTitle']
    objective.description = this.editProfileForm.value['description']
    objective.objectifStart = this.editProfileForm.value['objectifStart']
    objective.dateLimite = this.editProfileForm.value['dateLimite']
    objective.assigned = this.editProfileForm.value['assigned']

    return objective;
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
}
