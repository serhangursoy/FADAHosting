$(function() {
  var ctx = document.getElementById("myChart");

  let MALE_COLOR = 'rgba(0, 254, 239, 0.2)';
  let FEMALE_COLOR = 'rgba(237, 66, 102,0.2)';
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2018"],
      datasets: [{
          label: 'Male Students',
          data: [10, 19, 3, 5, 2, 3, 10, 19, 3, 5, 2, 3, 10, 19, 3, 5, 2, 3, 10, 19, 3, 5, 2, 3, 1, 3, 10, 3],
          backgroundColor: [
            MALE_COLOR, MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR,
            MALE_COLOR
          ],
          borderColor: [
            'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)',
            'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)',
            'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)',
            'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)',
            'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)', 'rgb(73, 197, 227)'
          ],
          borderWidth: 2
        },
        {
          label: 'Female Students',
          data: [-1, -15, -25, -5, -2, -3, -10, -9, -13, -15, -12, -3, -10, -19, -3, -5, -2, -3, -10, -19, -3, -5, -2, -3, -1, -3, -10, -3],
          backgroundColor: [
            FEMALE_COLOR, FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR,
            FEMALE_COLOR
          ],
          borderColor: [
            'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)',
            'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)',
            'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)',
            'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)',
            'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)', 'rgb(237, 66, 102)'
          ],
          borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          display: false,
          stacked: true,
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display: false
          }
        }]

      }
    }
  });
});