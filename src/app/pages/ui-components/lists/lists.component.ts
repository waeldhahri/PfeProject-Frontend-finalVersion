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

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',

  styles: []
})
export class AppListsComponent implements OnInit, OnDestroy {
  days : string = '00'
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  private intervalId: any;


  searchText!: string;
  persons: string[] = ['Employe', 'Manager', 'SuperManager'];
  equipes : string[] = ['Team A', 'Team B' , 'Team C', 'Team D' ,'Team F '] ;

  ngOnInit() {



    this.filteredPersons;
    this.filteredEquipes;
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




  get filteredPersons() {
    if (!this.searchText) {
      return this.persons;
    }
    return this.persons.filter(person => person.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  filterOptions(value: string) {
    this.searchText = value;
  }


  get filteredEquipes() {
    if (!this.searchText) {
      return this.equipes;
    }
    return this.equipes.filter(equipe => equipe.toLowerCase().includes(this.searchText.toLowerCase()));
  }
















/*



  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry',
    'Mango',
    'Pineapple',
    'Dragonfruit',
    'BlackBerry',
    'The Long Name of a Fruit That is Yet to be Discovered',
  ];
  opened = false;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @ViewChild('autocompleteTrigger') matACTrigger: MatAutocompleteTrigger;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const newValue = event.option.viewValue;
    if (this.fruits.includes(newValue)) {
      this.fruits = [...this.fruits.filter(fruit=>fruit !== newValue)];
    } else {
      this.fruits.push(event.option.viewValue);
    }
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);

    // keep the autocomplete opened after each item is picked.
    requestAnimationFrame(()=>{
      this.openAuto(this.matACTrigger);
    })

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) >= 0);
  }

  openAuto(trigger: MatAutocompleteTrigger) {
    trigger.openPanel();
    this.fruitInput.nativeElement.focus();
    console.log(trigger);
  }




*/

}
