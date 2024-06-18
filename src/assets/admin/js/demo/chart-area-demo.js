document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById("myAreaChart");
  if (ctx) {
      ctx = ctx.getContext('2d');
      var myLineChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                  label: "Earnings",
                  lineTension: 0.3,
                  backgroundColor: "rgba(2,117,216,0.2)",
                  borderColor: "rgba(2,117,216,1)",
                  pointRadius: 5,
                  pointBackgroundColor: "rgba(2,117,216,1)",
                  pointBorderColor: "rgba(255,255,255,0.8)",
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(2,117,216,1)",
                  pointHitRadius: 50,
                  pointBorderWidth: 2,
                  data: [10000, 30162, 26263, 18394, 18287, 28682, 31274],
              }],
          },
          options: {
              scales: {
                  xAxes: [{
                      time: {
                          unit: 'date'
                      },
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          maxTicksLimit: 7
                      }
                  }],
                  yAxes: [{
                      ticks: {
                          min: 0,
                          max: 40000,
                          maxTicksLimit: 5
                      },
                      gridLines: {
                          color: "rgba(0, 0, 0, .125)",
                      }
                  }],
              },
              legend: {
                  display: false
              }
          }
      });
  } else {
      console.error("Element with id 'myAreaChart' not found.");
  }
});
