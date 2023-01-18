import { Component, OnInit, AfterViewInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-card-bar-chart",
  templateUrl: "./card-bar-chart.component.html",
})
export class CardBarChartComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    let config = {
      type: "bar",
      data: {
        labels: [
          "Jan 13",
          "Jan 14",
          "Jan 15",
          "Jan 16",
          "Jan 17",
          "Jan 18",
          "Jan 19",
        ],
        datasets: [
          {
            label: "Regular Hours",
            backgroundColor: "Green",
            borderColor: "Green",
            data: [8,8,8,8,8,8,8],
            barThickness: 16,
          },
          {
            label: "Overtime Hours",
            fill: false,
            backgroundColor: "Red",
            borderColor: "Red",
            data: [0,0,3.5,0,3,4,5],
            barThickness: 16,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              stacked:true,
              scaleLabel: {
                display: true,
                labelString: "Day",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              stacked:true,
              scaleLabel: {
                display: false,
                labelString: "Hours",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx: any = document.getElementById("bar-chart");
    ctx = ctx.getContext("2d");
    new Chart(ctx, config);
  }
}
