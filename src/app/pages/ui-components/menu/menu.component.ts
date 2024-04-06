import {Component, NgModule} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {UiComponentsRoutes} from "../ui-components.routing";
import {MaterialModule} from "../../../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";
import {MatNativeDateModule} from "@angular/material/core";
import {NgSelect2Module} from "ng-select2";
import {AppBadgeComponent} from "../badge/badge.component";
import {AppChipsComponent} from "../tasks/chips.component";
import {AppListsComponent} from "../lists/lists.component";
import {AppTooltipsComponent} from "../tooltips/tooltips.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule,MatCardModule],
  templateUrl: './menu.component.html',
  styleUrls:['./menu.component.css'],

})


export class AppMenuComponent {

  constructor() { }

  chartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    title:{
      text: "Average Monthly Presence"
    },
    axisX: {
      title: "Months"
    },
    axisY: {
      title: "Presence (hours)"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor:"pointer",
      itemclick: function(e: any) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    data: [{
      type: "spline",
      showInLegend: true,
      name: "Wael",
      dataPoints: [
        { label: "Jan", y: 3.92 },
        { label: "Feb", y: 3.31 },
        { label: "Mar", y: 3.85 },
        { label: "Apr", y: 3.60 },
        { label: "May", y: 3.24 },
        { label: "Jun", y: 3.22 },
        { label: "Jul", y: 3.06 },
        { label: "Aug", y: 3.37 },
        { label: "Sep", y: 3.47 },
        { label: "Oct", y: 3.79 },
        { label: "Nov", y: 3.98 },
        { label: "Dec", y: 3.73 }
      ]
    }, {
      type: "spline",
      showInLegend: true,
      name: "Wassim",
      dataPoints: [
        { label: "Jan", y: 2.98 },
        { label: "Feb", y: 3.11 },
        { label: "Mar", y: 2.4 },
        { label: "Apr", y: 2 },
        { label: "May", y: 2},
        { label: "Jun", y: 3 },
        { label: "Jul", y: 3 },
        { label: "Aug", y: 6 },
        { label: "Sep", y: 2.2 },
        { label: "Oct", y: 2 },
        { label: "Nov", y: 1.13 },
        { label: "Dec", y: 1.79 }
      ]
    }, {
      type: "spline",
      showInLegend: true,
      name: "Ahmed",
      dataPoints: [
        { label: "Jan", y: 5.24 },
        { label: "Feb", y: 4.09 },
        { label: "Mar", y: 3.92 },
        { label: "Apr", y: 2.75 },
        { label: "May", y: 2.03 },
        { label: "Jun", y: 1.55 },
        { label: "Jul", y: 0.93 },
        { label: "Aug", y: 1.16 },
        { label: "Sep", y: 1.61 },
        { label: "Oct", y: 3.24 },
        { label: "Nov", y: 5.67 },
        { label: "Dec", y: 6.06 }
      ]

    }, {
      type: "spline",
      showInLegend: true,
      name: "Mohamed",
      dataPoints: [
        { label: "Jan", y: 3.2 },
        { label: "Feb", y: 1.11 },
        { label: "Mar", y: 4.4 },
        { label: "Apr", y: 4 },
        { label: "May", y: 3},
        { label: "Jun", y: 8 },
        { label: "Jul", y: 3 },
        { label: "Aug", y: 2 },
        { label: "Sep", y: 1.2 },
        { label: "Oct", y: 2.2},
        { label: "Nov", y: 3.13 },
        { label: "Dec", y: 1.79 }
      ]
    },]
  }





  chartOptions2 = {
    animationEnabled: true,

    exportEnabled: true,
    title: {
      text: "Developer Work Week"
    },
    subtitles: [{
      text: "Median hours/week"
    }],
    data: [{
      type: "pie", //change type to column, line, area, doughnut, etc
      indexLabel: "{name}: {y}%",
      dataPoints: [
        { name: "Overhead", y: 9.1 },
        { name: "Problem Solving", y: 3.7 },
        { name: "Debugging", y: 36.4 },
        { name: "Writing Code", y: 30.7 },
        { name: "Firefighting", y: 20.1 }
      ]
    }]
  }







}
