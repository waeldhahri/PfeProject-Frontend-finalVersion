import {Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {Objective} from "../../../models/Objective";
import {ObjectiveService} from "../../../services/objective.service";
import {ObjectifListServiceService} from "../../../services/objectif-list-service.service";
import {Location, Time} from "@angular/common";
import {MatMenuTrigger} from "@angular/material/menu";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {DialogElementsExampleDialog} from "./DialogElementsExampleDialog";
import {DialogElementsExampleDialog2} from "./DialogElementsExampleDialog2";


import {DxButtonModule, DxButtonTypes} from "devextreme-angular/ui/button";
import {DxPopupModule, DxScrollViewModule} from "devextreme-angular";
import {MatCardModule} from "@angular/material/card";
import {NgApexchartsModule} from "ng-apexcharts";

import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-objectifs-final',
  templateUrl: './objectifs-final.component.html',
  styleUrls: ['./objectifs-final.component.scss'],

})


export class ObjectifsFinalComponent implements OnInit , OnDestroy{




  totalElements: number = 0;

  objectifs !: Objective[];
  deadlines!: Date[] ;
  deadlinesCounter!: any[] ;
  inputVisible: boolean = false;
  buttonvisible: boolean = true;

  description: string = '';
  assigned:string='';

  endDate!: Date;

  currentPage = 0;
  pageSize = 5;
  totalItems = 0;



   intervalId: any;
  selectedObjectif!: Objective;





  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }


constructor(private objectiveListService:ObjectifListServiceService, public dialog: MatDialog , private _location: Location,) {
}



  private getObjectives(){
  this.objectiveListService.getObjectifs(this.currentPage,this.pageSize).subscribe(data =>{
    this.objectifs=data.content;
    this.totalItems = data.totalElements;

    this.objectifs.forEach(o => {
      o.days='00'
      o.hours = '00';
      o.minutes = '00';
      o.seconds = '00';
      // o.intervalId =  setInterval(() => {
      //   const now = new Date().getTime();
      //   const distance = o.dateLimite.getTime() - now;
      //
      //   if (distance > 0) {
      //     o.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
      //     o.hours = this.formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      //     o.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      //     o.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
      //   } else {
      //     // Si le temps restant est écoulé, afficher 00:00:00
      //     o.days='00'
      //     o.hours = '00';
      //     o.minutes = '00';
      //     o.seconds = '00';
      //   }
      // }, 1000);
    })

    this.intervalId =


    console.log("wael");
  });
  }

  private getObjectiveDeadlines(){
   this.objectiveListService.getObjectifdateLimite().subscribe(data =>{
      // Extracting only the 'datelimite' property from the objectives
     this.deadlines = data.map(objectif => objectif.dateLimite);
    console.log("wael");
    });
  }



  ngOnInit(): void {
    this.filterObjectifs();
    this.getObjectives();


    const endDate = new Date('2024-04-30T00:00:00');


    setInterval(() => {
        const now = new Date().getTime();

        this.objectifs = this.objectifs.map(o => {

          console.log()
          const distance = new Date(o.dateLimite).getTime() - now;

          if (distance > 0) {
            o.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
            o.hours = this.formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            o.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            o.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
          } else {
            // Si le temps restant est écoulé, afficher 00:00:00
            o.days='00'
            o.hours = '00';
            o.minutes = '00';
            o.seconds = '00';
          }

          return o;
        });


      }, 1000);


 // this.calculateTime(this.endDate);



















  }


   formatDifference(currentDate: Date, futureDate: Date): string {
    const differenceMs = futureDate.getTime() - currentDate.getTime();
    const differenceDays = Math.ceil(differenceMs / (1000 * 3600 * 24));

    if (differenceDays === 0) {
      return 'today';
    } else if (differenceDays === 1) {
      return 'tomorrow';
    } else if (differenceDays < 0) {
      return 'in the past';
    } else {
      return `in ${differenceDays} days`;
    }
  }
/*
  //calculateTime2( endDate:any) : string {
 //   console.log(endDate)
   // const datePortionRegex = /^\d{4}-\d{2}-\d{2}/.exec(endDate.toString());

   // if (datePortionRegex) {
    //  const datePortion = datePortionRegex[0];
     // const dateObject = new Date(datePortion);
    //  const currentDate = new Date();
      const formattedDifference = this.formatDifference(currentDate, dateObject);
      return formattedDifference
    } else {
     return ''
    }

  }*/

/*
  calculateTime3( endDate:Date) : string {
    // Date de fin de votre compte à rebours
    // const endDate = new Date('2024-04-30T00:00:00');

    // Mettre à jour l'horloge toutes les secondes
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();

      const datePortionRegex = /^\d{4}-\d{2}-\d{2}/.exec(endDate.toString());
      const dateObject = new Date(datePortionRegex[0]);
      if (dateObject){
        const distance= this.endDate.getTime()- now;

        console.log(distance);
        if (distance > 0) {
          this.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
          this.hours = this.formatTime
          (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          this.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
          this.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
        } else {
          // Si le temps restant est écoulé, afficher 00:00:00
          this.days = '00'
          this.hours = '00';
          this.minutes = '00';
          this.seconds = '00';
          clearInterval(this.intervalId);
          const timeElement = document.querySelector('.time');
          if (timeElement) {
            timeElement.classList.add('time-is-up');
          }
        }



      }
    }, 1000);
    return `${this.days} : ${this.hours} : ${this.minutes} : ${this.seconds} `;
  }
*/
  //
  //
  // calculateTime( endDate:Date) : string {
  //   // Date de fin de votre compte à rebours
  //   // const endDate = new Date('2024-04-30T00:00:00');
  //
  //   // Mettre à jour l'horloge toutes les secondes
  //   this.intervalId = setInterval(() => {
  //     const now = new Date().getTime();
  //
  //   //  const datePortionRegex = /^\d{4}-\d{2}-\d{2}/.exec(endDate.toString());
  //
  // if (this.endDate){
  //   const distance= this.endDate.getTime()- now;
  //
  //   console.log(distance);
  //   if (distance > 0) {
  //     this.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
  //     this.hours = this.formatTime
  //     (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  //     this.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  //     this.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
  //   } else {
  //     // Si le temps restant est écoulé, afficher 00:00:00
  //     this.days = '00'
  //     this.hours = '00';
  //     this.minutes = '00';
  //     this.seconds = '00';
  //     clearInterval(this.intervalId);
  //     const timeElement = document.querySelector('.time');
  //     if (timeElement) {
  //       timeElement.classList.add('time-is-up');
  //     }
  // }
  //
  //
  //
  //     }
  //   }, 1000);
  //    return `${this.days} : ${this.hours} : ${this.minutes} : ${this.seconds} `;
  // }
  popupvisible: boolean = false;


  ngOnDestroy() {
    // Nettoyer l'intervalle lors de la destruction du composant
    clearInterval(this.intervalId);
  }

  private formatTime(time: number): string {
    return time < 10 ? '0' + time : '' + time;
  }

  toggleInput(objectif: Objective) {
    this.selectedObjectif = objectif;
    this.inputVisible = !this.inputVisible;
    this.buttonvisible=!this.buttonvisible;
  }



  sendDescription() {
    console.log('Description:', this.description);
    // Clear the description after sending
    this.description = '';
    this.buttonvisible=!this.buttonvisible;
    this.inputVisible = !this.inputVisible;



    this.dialog.open(DialogElementsExampleDialog);

    // You can add further actions here, like sending the description to a server
  }

  onPageChange(page: number) {
    this.currentPage = page ;
    this.getObjectives();

  }



  deleteObjectif(objectif: Objective) {
    this.objectiveListService.deleteObjectif(objectif.objectifId).subscribe((res)=>{
      console.log(res);
    });


   this.dialog.open(DialogElementsExampleDialog2);

  }

  showpopup(){


    this.dialog.open(DialogElementsExampleDialog2);
  }



  popupVisible = false;
  popupWithScrollViewVisible = false;
  bookButtonOptions: DxButtonTypes.Properties = {
    width: 300,
    text: 'Understood',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible = false;
    },
  };
  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }

  hasautority() {
    const role = JSON.parse(localStorage.getItem("role") || '{}');
    return role == "ADMIN" || role=="SUPERADMIN" ;

  }

  filterObjectifs(){
    const role = JSON.parse(localStorage.getItem("role") || '{}');
    if (role == "USER") {
      this.pageSize=2;
    }
  }
}

