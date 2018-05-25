$(function() {
  var ctx = document.getElementById('myChart').getContext("2d");

  var gradientStrokeAdam = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStrokeAdam.addColorStop(0, '#80b6f4');
  gradientStrokeAdam.addColorStop(1, '#f49080');

  var gradientStrokeCeng = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStrokeCeng.addColorStop(0, '#EE4266');
  gradientStrokeCeng.addColorStop(1, '#f49080');

  var gradientStrokeMarek = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStrokeMarek.addColorStop(0, '#FFD23F');
  gradientStrokeMarek.addColorStop(1, '#f49080');

  var gradientStrokeFulya = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStrokeFulya.addColorStop(0, '#afa2ff');
  gradientStrokeFulya.addColorStop(1, '#f49080');

  var gradientStrokeCan = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStrokeCan.addColorStop(0, '#c3f73a');
  gradientStrokeCan.addColorStop(1, '#f49080');

  var gradientStrokeEkin = ctx.createLinearGradient(500, 0, 100, 0);
  gradientStrokeEkin.addColorStop(0, '#540d6e');
  gradientStrokeEkin.addColorStop(1, '#f49080');

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
      datasets: [{
          label: "Adam",
          borderColor: gradientStrokeAdam,
          pointRadius: 0,
          fill: false,
          backgroundColor: gradientStrokeAdam,
          borderWidth: 5,
          data: [0, 30, 60, 90, 60, 30, 0]
        }, {
          label: "Cengiz",
          borderColor: gradientStrokeCeng,
          pointRadius: 0,
          fill: false,
          backgroundColor: gradientStrokeCeng,
          borderWidth: 5,
          data: [0, 20, 40, 60, 40, 20, 0]
        },
        {
          label: "Marek",
          borderColor: gradientStrokeMarek,
          pointRadius: 0,
          fill: false,
          backgroundColor: gradientStrokeMarek,
          borderWidth: 5,
          data: [0, 50, 100, 160, 100, 50, 0]
        },
        {
          label: "Fulya",
          borderColor: gradientStrokeFulya,
          pointRadius: 0,
          fill: false,
          backgroundColor: gradientStrokeFulya,
          borderWidth: 5,
          data: [0, 40, 80, 120, 80, 40, 0]
        }
      ]
    },
    options: {
      scaleShowLabels: false,
      legend: {
        position: "bottom"
      },

      scales: {
        yAxes: [{
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 20,
            display: false
          },
          gridLines: {
            drawTicks: true,
            display: false,
            drawBorder: false
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            display: false
          }
        }]
      }
    }
  });
});