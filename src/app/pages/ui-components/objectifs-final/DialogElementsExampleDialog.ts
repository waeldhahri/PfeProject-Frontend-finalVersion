import {Component} from "@angular/core";
import {MatDialogActions, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './popup.component.html',
  standalone: true,

  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class DialogElementsExampleDialog  {}
