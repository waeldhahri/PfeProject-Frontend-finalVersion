
import {Component, OnInit} from '@angular/core';

import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import {Objective} from "../../../models/Objective";
import {ObjectiveService} from "../../../services/objective.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-tasks',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class AppChipsComponent implements OnInit{


 objective :  Objective = new Objective();

constructor(private objectifSevice :ObjectiveService ,
            private router : Router) {
}

  ngOnInit(){

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

}













