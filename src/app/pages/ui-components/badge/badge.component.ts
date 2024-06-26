import {Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { dataSeries } from "./data-series";
import * as moment from "moment";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexResponsive,
  ChartComponent, ApexStroke, ApexFill, ApexAxisChartSeries
  , ApexDataLabels, ApexXAxis,
  ApexYAxis, ApexTooltip,ApexTitleSubtitle, ApexGrid,
  ApexAnnotations, NgApexchartsModule,ApexMarkers,

} from "ng-apexcharts";
import Swal from 'sweetalert2';
import {DxButtonTypes} from "devextreme-angular/ui/button";




export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  grid?: ApexGrid;
  dataLabels?: ApexDataLabels;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  colors?: string[];
  fill?: ApexFill;
  yaxis?: ApexYAxis;
  legend?: ApexLegend;
  plotOptions?: ApexPlotOptions;
  labels?: string[];
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
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
};
export type ChartOptions4 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  colors: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};
export type ChartOptions5 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html'
})
export class AppBadgeComponent  {
  @ViewChild("chart") chart!: ChartComponent;


  public spark1: Partial<ChartOptions> | any;
  public spark2: Partial<ChartOptions> | any;
  public spark3: Partial<ChartOptions> | any;
  public spark4: Partial<ChartOptions> | any;
  public optionsLine: Partial<ChartOptions>| any;
  public optionsCircle4: Partial<ChartOptions>| any;
  public optionsBar: Partial<ChartOptions>| any;
  public optionsArea: Partial<ChartOptions>| any;

  public chartOptions2: Partial<ChartOptions2> | any;
  public chartOptions3: Partial<ChartOptions3> | any;


  public chartOptions4: Partial<ChartOptions4> | any;
  public chartOptions5: Partial<ChartOptions5> | any;




  constructor() {
    // this.spark1 = {
    //   chart: {
    //     id: 'spark1',
    //     group: 'sparks',
    //     type: 'line',
    //     height: 80,
    //     sparkline: {
    //       enabled: true
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     }
    //   },
    //   series: [{
    //     data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
    //   }],
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   markers: {
    //     size: 0
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110
    //     }
    //   },
    //   colors: ['#fff'],
    //   tooltip: {
    //     x: {
    //       show: false
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val:any) {
    //           return '';
    //         }
    //       }
    //     }
    //   }
    // };

    // this.spark2 = {
    //   chart: {
    //     id: 'spark2',
    //     group: 'sparks',
    //     type: 'line',
    //     height: 80,
    //     sparkline: {
    //       enabled: true
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     }
    //   },
    //   series: [{
    //     data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
    //   }],
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110
    //     }
    //   },
    //   markers: {
    //     size: 0
    //   },
    //   colors: ['#fff'],
    //   tooltip: {
    //     x: {
    //       show: false
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val:any) {
    //           return '';
    //         }
    //       }
    //     }
    //   }
    // };

    // this.spark3 = {
    //   chart: {
    //     id: 'spark3',
    //     group: 'sparks',
    //     type: 'line',
    //     height: 80,
    //     sparkline: {
    //       enabled: true
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     }
    //   },
    //   series: [{
    //     data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
    //   }],
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   markers: {
    //     size: 0
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110
    //     }
    //   },
    //   colors: ['#fff'],
    //   xaxis: {
    //     crosshairs: {
    //       width: 1
    //     },
    //   },
    //   tooltip: {
    //     x: {
    //       show: false
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val:any) {
    //           return '';
    //         }
    //       }
    //     }
    //   }
    // };

    // this.spark4 = {
    //   chart: {
    //     id: 'spark4',
    //     group: 'sparks',
    //     type: 'line',
    //     height: 80,
    //     sparkline: {
    //       enabled: true
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 1,
    //       left: 1,
    //       blur: 2,
    //       opacity: 0.2,
    //     }
    //   },
    //   series: [{
    //     data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
    //   }],
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   markers: {
    //     size: 0
    //   },
    //   grid: {
    //     padding: {
    //       top: 20,
    //       bottom: 10,
    //       left: 110
    //     }
    //   },
    //   colors: ['#fff'],
    //   xaxis: {
    //     crosshairs: {
    //       width: 1
    //     },
    //   },
    //   tooltip: {
    //     x: {
    //       show: false
    //     },
    //     y: {
    //       title: {
    //         formatter: function formatter(val:any) {
    //           return '';
    //         }
    //       }
    //     }
    //   }
    // };


    // this.optionsCircle4 = {
    //   chart: {
    //     type: 'radialBar',
    //     height: 350,
    //     width: 380,
    //   },
    //   plotOptions: {
    //     radialBar: {
    //       size: undefined,
    //       inverseOrder: true,
    //       hollow: {
    //         margin: 5,
    //         size: '48%',
    //         background: 'transparent',
    //       },
    //       track: {
    //         show: false,
    //       },
    //       startAngle: -180,
    //       endAngle: 180
    //     },
    //   },
    //   stroke: {
    //     lineCap: 'round'
    //   },
    //   series: [71, 63, 77],
    //   labels: ['June', 'May', 'April'],
    //   legend: {
    //     show: true,
    //     floating: true,
    //     position: 'right',
    //     offsetX: 70,
    //     offsetY: 240
    //   },
    // };

    // this.optionsBar = {
    //   chart: {
    //     height: 380,
    //     type: 'bar',
    //     stacked: true,
    //   },
    //   plotOptions: {
    //     bar: {
    //       columnWidth: '30%',
    //       horizontal: false,
    //     },
    //   },
    //   series: [{
    //     name: 'PRODUCT A',
    //     data: [14, 25, 21, 17, 12, 13, 11, 19]
    //   }, {
    //     name: 'PRODUCT B',
    //     data: [13, 23, 20, 8, 13, 27, 33, 12]
    //   }, {
    //     name: 'PRODUCT C',
    //     data: [11, 17, 15, 15, 21, 14, 15, 13]
    //   }],
    //   xaxis: {
    //     categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
    //   },
    //   fill: {
    //     opacity: 1
    //   },
    // };

    // this.optionsArea = {
    //   chart: {
    //     height: 380,
    //     type: 'area',
    //     stacked: false,
    //   },
    //   stroke: {
    //     curve: 'straight'
    //   },
    //   series: [{
    //     name: "Music",
    //     data: [11, 15, 26, 20, 33, 27]
    //   },
    //     {
    //       name: "Photos",
    //       data: [32, 33, 21, 42, 19, 32]
    //     },
    //     {
    //       name: "Files",
    //       data: [20, 39, 52, 11, 29, 43]
    //     }
    //   ],
    //   xaxis: {
    //     categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2'],
    //   },
    //   tooltip: {
    //     followCursor: true
    //   },
    //   fill: {
    //     opacity: 1,
    //   },
    // };


    // this.optionsLine = {
    //   chart: {
    //     height: 328,
    //     type: 'line',
    //     zoom: {
    //       enabled: false
    //     },
    //     dropShadow: {
    //       enabled: true,
    //       top: 3,
    //       left: 2,
    //       blur: 4,
    //       opacity: 1,
    //     }
    //   },
    //   stroke: {
    //     curve: 'smooth',
    //     width: 2
    //   },
    //   series: [{
    //     name: "Music",
    //     data: [1, 15, 26, 20, 33, 27]
    //   },
    //     {
    //       name: "Photos",
    //       data: [3, 33, 21, 42, 19, 32]
    //     },
    //     {
    //       name: "Files",
    //       data: [0, 39, 52, 11, 29, 43]
    //     }
    //   ],
    //   title: {
    //     text: 'Media',
    //     align: 'left',
    //     offsetY: 25,
    //     offsetX: 20
    //   },
    //   subtitle: {
    //     text: 'Statistics',
    //     offsetY: 55,
    //     offsetX: 20
    //   },
    //   markers: {
    //     size: 6,
    //     strokeWidth: 0,
    //     hover: {
    //       size: 9
    //     }
    //   },
    //   grid: {
    //     show: true,
    //     padding: {
    //       bottom: 0
    //     }
    //   },
    //   labels: ['01/15/2002', '01/16/2002', '01/17/2002', '01/18/2002', '01/19/2002', '01/20/2002'],
    //   xaxis: {
    //     tooltip: {
    //       enabled: false
    //     }
    //   },
    //   legend: {
    //     position: 'top',
    //     horizontalAlign: 'right',
    //     offsetY: -20
    //   }
    // };



    this.optionsLine = {
      chart: {
        height: 328,
        type: 'line',
        zoom: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 2,
          blur: 4,
          opacity: 1,
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [
        {
          name: "Wael Dhahri",
          data: [8, 6, 7.5, 6, 6, 5]
        },
        {
          name: "Wassim Chaarana",
          data: [4, 8, 8, 6, 7, 8]
        },
        {
          name: "Mohamed Zrelli",
          data: [0, 8, 4, 6, 4, 8]
        },

        {
          name: "Bayrem kitar",
          data: [8, 0, 10, 6, 8, 8]
        },

        {
          name: "raslen harrabi",
          data: [3, 10, 8, 8, 4, 8]
        }
        ,
        {
          name: "Achref fajjeri",
          data: [8, 12, 4, 11, 8, 8]
        }
      ],
      title: {
        text: 'Average Monthly Presence',
        align: 'center',
        offsetY: 10,
        offsetX: 10,
        style: {
          fontSize: '25px',
          fontWeight: 'bold',
          color: '#263238'
        }
      },
      subtitle: {
        text: 'Hours',
        offsetY: 55,
        offsetX: 20
      },
      markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
          size: 9
        }
      },
      grid: {
        show: true,
        padding: {
          bottom: 0
        }
      },
      xaxis: {
        categories: ['15/05/2024', '16/05/2024', '17/05/2024', '18/05/2024', '19/05/2024', '20/05/2024'], // Ajoutez vos catégories ici
        tooltip: {
          enabled: false
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -20
      }
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


    this.chartOptions3 = {
      series: [
        {
          name: "PRODUCT A",
          data: this.generateDataSets(0)
        },
        {
          name: "PRODUCT B",
          data: this.generateDataSets(1)
        },
        {
          name: "PRODUCT C",
          data: this.generateDataSets(2)
        }
      ],
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          style: {
            color: "#8e8da4"
          },
          offsetX: 0,
          formatter: function(val:any) {
            return (val / 1000000).toFixed(2);
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      xaxis: {
        type: "datetime",
        tickAmount: 8,
        min: new Date("01/01/2014").getTime(),
        max: new Date("01/20/2014").getTime(),
        labels: {
          rotate: -15,
          rotateAlways: true,
          formatter: function(val:any, timestamp:any) {
            return moment(new Date(timestamp)).format("DD MMM YYYY");
          }
        }
      },
      title: {
        text: "Irregular Data in Time Series",
        align: "left",
        offsetX: 14
      },
      tooltip: {
        shared: true
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetX: -10
      }
    };
    this.chartOptions4 = {
      series: [
        {
          data: [50, 43, 15, 33, 20, 18]
        }
      ],
      chart: {
        type: "bar",
        height: 380
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "bottom"
          }
        }
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        /*"#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"*/
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        formatter: function(val: any, opt : any) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "Mohamed Zrelli",
          "Wael Dhahri",
          "Wassim chaarana",
          "Achref Fajjeri",
          "Raslen Harrabi",
          "Amine Fatnassi",
        ]
      },
      yaxis: {
        labels: {
          show: false
        }
      },


      tooltip: {
        theme: "dark",
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function() {
              return "";
            }
          }
        }
      }
    };
    this.chartOptions5 = {
      series: [
        {
          name: "Wassim Chaaraana",
          data: [
            {
              x: "Design",
              y: [
                new Date("2024-03-05").getTime(),
                new Date("2024-03-08").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2024-03-02").getTime(),
                new Date("2024-03-05").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2024-03-05").getTime(),
                new Date("2024-03-07").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2024-03-03").getTime(),
                new Date("2024-03-09").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2024-03-08").getTime(),
                new Date("2024-03-11").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2024-03-11").getTime(),
                new Date("2024-03-16").getTime()
              ]
            },
            {
              x: "Design",
              y: [
                new Date("2024-03-01").getTime(),
                new Date("2024-03-03").getTime()
              ]
            }
          ]
        },
        {
          name: "Mohamed Zrelli",
          data: [
            {
              x: "Design",
              y: [
                new Date("2024-03-02").getTime(),
                new Date("2024-03-05").getTime()
              ]
            },
            {
              x: "Test",
              y: [
                new Date("2024-03-06").getTime(),
                new Date("2024-03-16").getTime()
              ]
            },
            {
              x: "Code",
              y: [
                new Date("2024-03-03").getTime(),
                new Date("2024-03-07").getTime()
              ]
            },
            {
              x: "Deployment",
              y: [
                new Date("2024-03-20").getTime(),
                new Date("2024-03-22").getTime()
              ]
            },
            {
              x: "Design",
              y: [
                new Date("2024-03-10").getTime(),
                new Date("2024-03-16").getTime()
              ]
            }
          ]
        },
        {
          name: "Wael Dhahri",
          data: [
            {
              x: "Code",
              y: [
                new Date("2024-03-10").getTime(),
                new Date("2024-03-17").getTime()
              ]
            },
            {
              x: "Validation",
              y: [
                new Date("2024-03-05").getTime(),
                new Date("2024-03-09").getTime()
              ]
            }
          ]
        }
      ],
      chart: {
        height: 450,
        type: "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%"
        }
      },
      xaxis: {
        type: "datetime"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      }
    };

  }


  public generateDataSets = function(t:any) {
    var ts1 = 1388534400000;
    var ts2 = 1388620800000;
    var ts3 = 1389052800000;

    var dataSet : any = [[], [], []];

    for (let i = 0; i < 12; i++) {
      ts1 = ts1 + 86400000;
      const innerArr  = [ts1, dataSeries[2][i].value];
      dataSet[0].push(innerArr);
    }
    for (let i = 0; i < 18; i++) {
      ts2 = ts2 + 86400000;
      const innerArr = [ts2, dataSeries[1][i].value];
      dataSet[1].push(innerArr);
    }
    for (let i = 0; i < 12; i++) {
      ts3 = ts3 + 86400000;
      const innerArr = [ts3, dataSeries[0][i].value];
      dataSet[2].push(innerArr);
    }

    if (t === 0) {
      return dataSet[0];
    } else if (t === 1) {
      return dataSet[1];
    } else {
      return dataSet[2];
    }
  };













  // data = {
  //   id: 'ms',
  //   data: {
  //     imageURL: 'https://i.pravatar.cc/300?img=68',
  //     name: 'Margret Swanson',
  //   },
  //   options: {
  //     nodeBGColor: '#cdb4db',
  //     nodeBGColorHover: '#cdb4db',
  //   },
  //   children: [
  //     {
  //       id: 'mh',
  //       data: {
  //         imageURL: 'https://i.pravatar.cc/300?img=69',
  //         name: 'Mark Hudson',
  //       },
  //       options: {
  //         nodeBGColor: '#ffafcc',
  //         nodeBGColorHover: '#ffafcc',
  //       },
  //       children: [
  //         {
  //           id: 'kb',
  //           data: {
  //             imageURL: 'https://i.pravatar.cc/300?img=65',
  //             name: 'Karyn Borbas',
  //           },
  //           options: {
  //             nodeBGColor: '#f8ad9d',
  //             nodeBGColorHover: '#f8ad9d',
  //           },
  //         },
  //         {
  //           id: 'cr',
  //           data: {
  //             imageURL: 'https://i.pravatar.cc/300?img=60',
  //             name: 'Chris Rup',
  //           },
  //           options: {
  //             nodeBGColor: '#c9cba3',
  //             nodeBGColorHover: '#c9cba3',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       id: 'cs',
  //       data: {
  //         imageURL: 'https://i.pravatar.cc/300?img=59',
  //         name: 'Chris Lysek',
  //       },
  //       options: {
  //         nodeBGColor: '#00afb9',
  //         nodeBGColorHover: '#00afb9',
  //       },
  //       children: [
  //         {
  //           id: 'Noah_Chandler',
  //           data: {
  //             imageURL: 'https://i.pravatar.cc/300?img=57',
  //             name: 'Noah Chandler',
  //           },
  //           options: {
  //             nodeBGColor: '#84a59d',
  //             nodeBGColorHover: '#84a59d',
  //           },
  //         },
  //         {
  //           id: 'Felix_Wagner',
  //           data: {
  //             imageURL: 'https://i.pravatar.cc/300?img=52',
  //             name: 'Felix Wagner',
  //           },
  //           options: {
  //             nodeBGColor: '#0081a7',
  //             nodeBGColorHover: '#0081a7',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // };

  // options = {
  //   contentKey: 'data',
  //   width: 800,
  //   height: 600,
  //   nodeWidth: 150,
  //   nodeHeight: 100,
  //   fontColor: '#fff',
  //   borderColor: '#333',
  //   childrenSpacing: 50,
  //   siblingSpacing: 20,
  //   direction: 'top',
  //   nodeTemplate: (content:any) =>
  //     `<div style='display: flex;flex-direction: column;gap: 10px;justify-content: center;align-items: center;height: 100%;'>
  //       <img style='width: 50px;height: 50px;border-radius: 50%;' src='${content.imageURL}' alt='' />
  //       <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
  //     </div>`,
  //   canvasStyle: 'border: 1px solid black;background: #f6f6f6;',
  //   enableToolbar: true,
  // };



















  showSuccessPopup() {
    Swal.fire({
      title: 'Success!',
      text: 'Your operation was successful.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }



  popupVisible = false;

  popupWithScrollViewVisible = false;
  popupWithScrollViewVisible2 = false;
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
  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }

  showPopupWithScrollView2() {
    this.popupWithScrollViewVisible2 = true;
  }

}

































