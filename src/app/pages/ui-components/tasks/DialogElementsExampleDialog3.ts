import {Component} from "@angular/core";
import {MatDialogActions, MatDialogContent, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'dialog-elements-example-dialog3',
  templateUrl: './popup3.component.html',
  standalone: true,

  imports: [
    MatDialogModule,
    MatButtonModule
  ]
})
export class DialogElementsExampleDialog3  {

  reload() {
    //this.router.navigate(['/objectifs']).then(r => r.valueOf());
    window.location.reload();
  }
}
