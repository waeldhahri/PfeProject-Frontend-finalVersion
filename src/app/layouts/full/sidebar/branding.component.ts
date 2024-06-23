import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/dashboard">
        <img
          src="./assets/images/favicon.png"
          class="align-middle m-2"
          alt="logo"
        />

        <img
          src="./assets/images/Leoni.png"
          class="align-middle m-2 " style="width: 130px; height: auto"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
