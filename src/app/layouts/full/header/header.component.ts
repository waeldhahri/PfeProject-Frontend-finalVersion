import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from "@angular/router";
import {SessionService} from "../../../services/session.service";
import {Session} from "../../../models/Session";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog , private route:Router ,  private sessionService:SessionService) {}

  logout() {

    this.sessionService.logoutSession(this.createSession()).subscribe(res=>{


      this.route.navigate(['/authentication/login']);
      localStorage.clear();
    })


  }


  private createSession() {
    let session = new Session();
    session.id= JSON.parse(localStorage.getItem("sessionId")||"{}");
    return session;
  }
}
