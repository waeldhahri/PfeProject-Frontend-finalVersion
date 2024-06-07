import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() percentage: number = 75;
  @Input() label: string = '5w: 2d';
  constructor() {}

  ngOnInit() {}
}
