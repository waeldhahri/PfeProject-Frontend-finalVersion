import {Component, ViewChild, ViewEncapsulation} from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent, ApexStroke, ApexFill, ApexAxisChartSeries
  , ApexDataLabels, ApexXAxis,
  ApexYAxis, ApexTooltip,ApexTitleSubtitle, ApexGrid,
  ApexAnnotations, NgApexchartsModule,ApexMarkers

} from "ng-apexcharts";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import Swal from "sweetalert2";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {DxButtonModule, DxButtonTypes} from "devextreme-angular/ui/button";
import {DxPopupModule, DxScrollViewModule} from "devextreme-angular";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};

export type ChartOptions2= {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};


export type ChartOptions4 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};

export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
};


export type ChartOptions6 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};



export type ChartOptions7 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

export type ChartOptions8 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
export type ChartOptions9= {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

export type ChartOptions10 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type ChartOptions11 = {
  series: ApexAxisChartSeries | any;
  chart: any; //ApexChart;
  dataLabels: ApexDataLabels| any;
  markers: ApexMarkers | any;
  title: ApexTitleSubtitle| any;
  fill: ApexFill;
  yaxis: ApexYAxis| any;
  xaxis: ApexXAxis| any;
  tooltip: ApexTooltip| any;
  stroke: ApexStroke| any;
  grid: any; //ApexGrid;
  colors: any;
  toolbar: any;
};



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./css.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,

  imports: [
    MatCardModule,
    NgApexchartsModule,
    MatButtonModule,
    DxPopupModule,
    DxScrollViewModule,
    DxButtonModule
  ]
})
export class  AppDashboardComponent{

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions2> | any;
  public chartOptions3: Partial<ChartOptions3> | any;
  public chartOptions4: Partial<ChartOptions4>| any;
  public chartOptions5: Partial<ChartOptions5>| any;
  public chartOptions6: Partial<ChartOptions6>| any;
  public chartOptions7: Partial<ChartOptions7>| any;
  public chartOptions8: Partial<ChartOptions8> | any;
  public chartOptions9: Partial<ChartOptions9> | any;
  public chartOptions10: Partial<ChartOptions10> | any;



  public chart1options: Partial<ChartOptions11>| any;
  public chart2options: Partial<ChartOptions11>| any;
  public chart3options: Partial<ChartOptions11>| any;
  public chart4options: Partial<ChartOptions11>| any;
  public commonOptions: Partial<ChartOptions11> = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    toolbar: {
      tools: {
        selection: false
      }
    },
    markers: {
      size: 6,
      hover: {
        size: 10
      }
    },
    tooltip: {
      followCursor: false,
      theme: "dark",
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter: function() {
            return "";
          }
        }
      }
    },
    grid: {
      clipMarkers: false
    },
    xaxis: {
      type: "datetime"
    }
  };


  constructor() {
    this.chartOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 390,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
      labels: ["LTN2", "LTN3", "LTN4", "LTN5"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true
        },
        formatter: function (seriesName: string, opts: any) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };


    this.chartOptions2 = {
      series: [30, 18, 21, 36, 28,25],
      labels: ["LTN2", "LTN3", "LTN4", "LTN5","LTN6","LTN7"],
      chart: {
        type: "polarArea"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 1
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };


    this.chartOptions3= {
      series: [
        {
          data: [
            {
              x: "2008",
              y: [2800, 4500]
            },
            {
              x: "2009",
              y: [3200, 4100]
            },
            {
              x: "2010",
              y: [2950, 7800]
            },
            {
              x: "2011",
              y: [3000, 4600]
            },
            {
              x: "2012",
              y: [3500, 4100]
            },
            {
              x: "2013",
              y: [4500, 6500]
            },
            {
              x: "2014",
              y: [4100, 5600]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar",
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [["#008FFB", "#00E396","#de7373"]]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: ["LTN4", "LTN5","LTN2"]
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: ["#00E396"],
          inverseColors: true,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        tickPlacement: "on"
      }
    };

    this.chartOptions4 = {
      series: [
        {
          name: "Servings",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
        }
      ],
      annotations: {
      },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "TEAM A",
          "TEAM B",
          "TEAM C",
          "TEAM D",
          "TEAM E",
          "TEAM F",

        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "Servings"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };


    this.chartOptions5 = {
      series: [
        {
          name: "LTN4",
          data: [
            {
              x: "Team A",
              y: [1, 5]
            },
            {
              x: "Team B",
              y: [4, 6]
            },
            {
              x: "Team C",
              y: [5, 8]
            },
            {
              x: "Team D",
              y: [3, 11]
            }
          ]
        },
        {
          name: "LTN5",
          data: [
            {
              x: "Team A",
              y: [2, 6]
            },
            {
              x: "Team B",
              y: [1, 3]
            },
            {
              x: "Team C",
              y: [7, 8]
            },
            {
              x: "Team D",
              y: [5, 9]
            }
          ]
        }
      ],
      chart: {
        type: "rangeBar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: true
      }
    };



    this.chartOptions6 = {
      series: [
        {
          name: "Likes",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001"
        ]
      },
      title: {
        text: "Social Media",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: -10,
        max: 40,
        title: {
          text: "Engagement"
        }
      }
    };


    this.chartOptions7 = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };


    this.chartOptions8= {
      series: [
        {
          name: "LTN 2",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "LTN 3",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "LTN 4",
          data: [11, 17, 15, 15, 21, 14]
        }, {
          name: "LTN 5",
          data: [11, 17, 15, 15, 21, 14]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      xaxis: {
        categories: [
          "2023 S1",
          "2023 S2",
          "2023 S3",
          "2023 S4",
          "2024 S1",
          "2024 S2",

        ]
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50
      }
    };

    this.chartOptions9 = {
      series: [
        {
          name: "LTN 2",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "LTN 3",
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: "LTN 4",
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: "LTN 5",
          data: [9, 7, 5, 8, 6, 9, 4]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: ["JANUARY", "February", "MARS", "APRIL", "MAY", "JUNI"],
        labels: {
          formatter: function(val : any) {
            return val ;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val :any) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };

    this.chartOptions10 = {
      series: [
        {
          name: "LTN 2",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "LTN 3",
          data: [12, 11, 14, 18, 17, 13, 13]
        },  {
          name: "LTN 4",
          data: [15, 20, 10, 27, 37, 32, 14]
        },
        {
          name: "LTN 5",
          data: [20, 16, 13, 10, 40, 9, 19]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#06222c","#77B6EA", "#bb7474","#218643"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },

      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["01/05", "07/05", "14/05", "21/05", "28/05", "01/06", "07/06"],
        title: {
          text: "WEEK"
        }
      },
      yaxis: {
        title: {
          text: "DURATION OF MEET"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    this.initCharts();

  }

  onSubmit1() {
    Swal.fire("Developer Work Week");

  }



  onSubmit2() {
    Swal.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
      }
    });
  }



  public initCharts(): void {
    this.chart1options = {
      series: [
        {
          name: "chart1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        }
      ],
      chart: {
        id: "fb",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#008FFB"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };

    this.chart2options = {
      series: [
        {
          name: "chart2",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 30
            }
          )
        }
      ],
      chart: {
        id: "tw",
        group: "social",
        type: "line",
        height: 160
      },
      colors: ["#546E7A"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };

    this.chart3options = {
      series: [
        {
          name: "chart3",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        }
      ],
      chart: {
        id: "yt",
        group: "social",
        type: "area",
        height: 160
      },
      colors: ["#00E396"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };
    this.chart4options = {
      series: [
        {
          name: "chart4",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        }
      ],
      chart: {
        id: "yt",
        group: "social",
        type: "area",
        height: 160
      },
      colors: ["#e30066"],
      yaxis: {
        tickAmount: 2,
        labels: {
          minWidth: 40
        }
      }
    };
  }

  public generateDayWiseTimeSeries(baseval :any, count :any, yrange :any): any[] {
    let i = 0;
    let series :any = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }







  popupVisible = false;

  popupWithScrollViewVisible = false;
  popupWithScrollViewVisible2 = false;
  popupWithScrollViewVisible3 = false;
  popupWithScrollViewVisible4 = false;
  popupWithScrollViewVisible5 = false;
  popupWithScrollViewVisible6 = false;
  popupWithScrollViewVisible7 = false;
  popupWithScrollViewVisible8 = false;
  popupWithScrollViewVisible9 = false;





  bookButtonOptions: DxButtonTypes.Properties = {
    width: 300,
    text: 'Understood',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible = false;
    },
  };


  bookButtonOptions2: DxButtonTypes.Properties = {
    width: 300,
    text: 'Understood',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible2 = false;
    },
  };

  bookButtonOptions3: DxButtonTypes.Properties = {
    width: 300,
    text: 'Understood',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible3 = false;
    },
  };

  bookButtonOptions4: DxButtonTypes.Properties = {
    width: 300,
    text: 'Understood',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible4 = false;
    },
  };

  bookButtonOptions5: DxButtonTypes.Properties = {
    width: 300,
    text: 'Understood',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible5 = false;
    },
  };


  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }

  showPopupWithScrollView2() {
    this.popupWithScrollViewVisible2 = true;
  }

  showPopupWithScrollView3() {
    this.popupWithScrollViewVisible3 = true;
  }

  showPopupWithScrollView4() {
    this.popupWithScrollViewVisible4= true;
  }

  showPopupWithScrollView5() {
    this.popupWithScrollViewVisible5 = true;
  }
  showPopupWithScrollView6() {
    this.popupWithScrollViewVisible6 = true;
  }




}






























