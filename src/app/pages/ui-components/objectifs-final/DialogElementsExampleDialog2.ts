import {Component} from "@angular/core";
import {MatDialogActions, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {Objective} from "../../../models/Objective";
import {ObjectifListServiceService} from "../../../services/objectif-list-service.service";

import {ObjectifsFinalComponent} from "./objectifs-final.component";
import {Location} from "@angular/common";

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './popup2.component.html',
  standalone: true,

  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class DialogElementsExampleDialog2  {


  constructor(private router: Router , location : Location) { }



    reload() {

     // this.router.navigate([this.router.url]).then(()=>{
     //   window.location.reload();
     // });
    //this.router.navigate(['/objectifs']).then(r => r.valueOf());
      window.location.reload();
  }


  back() {

  }
}
