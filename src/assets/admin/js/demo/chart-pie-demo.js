document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById("myPieChart");
  if (ctx) {
      ctx = ctx.getContext('2d');
      var myPieChart = new Chart(ctx, {
          type: 'pie',
          data: {
              // vos données
          },
          options: {
              // vos options
          }
      });
  } else {
      console.error("Element with id 'myPieChart' not found.");
  }
});
