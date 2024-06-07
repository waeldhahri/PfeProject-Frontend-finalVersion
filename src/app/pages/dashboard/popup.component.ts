import {Component, ViewEncapsulation} from "@angular/core";

import {DxButtonModule, DxButtonTypes} from "devextreme-angular/ui/button";
import {DxPopupModule, DxScrollViewModule} from "devextreme-angular";


@Component({

  selector: 'app-popup',
  templateUrl:"./popup.component.html",
  styleUrls: ['./popup.css'],
  standalone: true,


  imports: [
    DxButtonModule,
    DxPopupModule,
    DxScrollViewModule

  ]
})

export class PopupComponent {
  popupVisible = false;

  popupWithScrollViewVisible = false;

  bookButtonOptions: DxButtonTypes.Properties = {
    width: 300,
    text: 'Book',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible = false;
    },
  };

  showPopup() {
    this.popupVisible = true;
  }

  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }
}
