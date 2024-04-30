import {Component, OnDestroy, OnInit} from '@angular/core';
import {Objective} from "../../../models/Objective";
import {ObjectifListServiceService} from "../../../services/objectif-list-service.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit , OnDestroy{


  objectifs !: Objective[];

  constructor(private objectiveListService:ObjectifListServiceService) {
  }

  private getObjectives(){
    this.objectiveListService.getObjectifList().subscribe(data =>{
      this.objectifs=data ;
      console.log("wael");
    });
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.getObjectives();
  }
}
