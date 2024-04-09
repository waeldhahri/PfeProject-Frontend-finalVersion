import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Objective} from "../../../models/Objective";
import {ObjectiveService} from "../../../services/objective.service";
import {ObjectifListServiceService} from "../../../services/objectif-list-service.service";
import {Time} from "@angular/common";

@Component({
  selector: 'app-objectifs-final',
  templateUrl: './objectifs-final.component.html',
  styleUrls: ['./objectifs-final.component.scss']
})
export class ObjectifsFinalComponent implements OnInit , OnDestroy{


  objectifs !: Objective[];

 deadlines!: Date[] ;


  endDate!: Date;

  days : string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';


   intervalId: any;





constructor(private objectiveListService:ObjectifListServiceService) {
}



  private getObjectives(){
  this.objectiveListService.getObjectifList().subscribe(data =>{
    this.objectifs=data ;
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
    this.getObjectives();

 this.calculateTime(this.endDate);



















  }







   calculateTime( endDate:Date) : string {
    // Date de fin de votre compte à rebours
    // const endDate = new Date('2024-04-30T00:00:00');
    console.log(endDate);
    // Mettre à jour l'horloge toutes les secondes
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();


      console.log(now);


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
    }, 1000);
     return `${this.days} : ${this.hours} : ${this.minutes} : ${this.seconds} `;
  }

  ngOnDestroy() {
    // Nettoyer l'intervalle lors de la destruction du composant
    clearInterval(this.intervalId);
  }

  private formatTime(time: number): string {
    return time < 10 ? '0' + time : '' + time;
  }



}
