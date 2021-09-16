const reportCtx = document.getElementById('reportChart').getContext('2d');

const reportChart = new Chart(reportCtx, {
  type: 'bar',
  data: {
      labels: ['02', '04', '06', '08', '10', '12', '14', '16', '18'],
      
      datasets: [{
          data: [78000, 90000, 72000, 90000, 77000, 70000, 98000, 72000, 97000],
  
          backgroundColor: '#38C976',
          width: 0.1,
          borderRadius: 4,
          barThickness: 5,
          
      }]
  },

  options: {
    legend: {
      display: false
    },

    title: {
      display: false,
    },

    scales: {
      y: {
        min: 20000,
        ticks: {
          stepSize: 20000,
        },
      },

      x: {
        grid: {
          color: "transparent",
        },
      },
    },
  },
});

