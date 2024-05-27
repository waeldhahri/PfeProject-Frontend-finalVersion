import {Component, OnInit, ViewChild , ElementRef} from '@angular/core';

import Swal from 'sweetalert2';
import {
  ApexChart, ApexAxisChartSeries, ApexXAxis,
  ApexStroke, ApexGrid, ApexDataLabels, ApexTooltip,
  ApexMarkers, ApexTitleSubtitle, ApexFill, ApexYAxis,
  ApexLegend, ApexPlotOptions, ChartComponent
} from 'ng-apexcharts';



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







  }















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




}

































