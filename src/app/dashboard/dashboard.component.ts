import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  public barChartLabels: Label[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81,43,54,90], label: 'Series A' },
    { data: [65, 59, 80, 81,43,54,90], label: 'Series B' },
    
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public barColors: Array<any> = [
    {
      backgroundColor: 'blue',
    },
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toggleFullScreen() {
    let elem = document.documentElement;
    if (!document.fullscreenElement && !document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  
  

}
