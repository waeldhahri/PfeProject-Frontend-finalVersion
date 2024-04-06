/*import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}*/
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  template: `
    <div>
      Temps restant : {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
    </div>
  `,
  styles: []
})
export class AppListsComponent implements OnInit, OnDestroy {
  days : string = '00'
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  private intervalId: any;

  ngOnInit() {
    // Date de fin de votre compte à rebours
    const endDate = new Date('2024-04-30T00:00:00');

    // Mettre à jour l'horloge toutes les secondes
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        this.days = this.formatTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
        this.hours = this.formatTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.minutes = this.formatTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        this.seconds = this.formatTime(Math.floor((distance % (1000 * 60)) / 1000));
      } else {
        // Si le temps restant est écoulé, afficher 00:00:00
        this.days='00'
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy() {
    // Nettoyer l'intervalle lors de la destruction du composant
    clearInterval(this.intervalId);
  }

  private formatTime(time: number): string {
    return time < 10 ? '0' + time : '' + time;
  }
}
