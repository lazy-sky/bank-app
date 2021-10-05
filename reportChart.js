const reportCtx = document.getElementById('reportChart').getContext('2d');

const labels = ['02', '04', '06', '08', '10', '12', '14', '16', '18'];
const data = {
  labels,
  datasets: [{
    label: 'Erase this label',
    backgroundColor: '#38C976',
    width: 0.1,
    borderRadius: 4,
    barThickness: 5,
    data: [78000, 90000, 72000, 90000, 77000, 70000, 98000, 72000, 97000],
  }],
};

const reportConfig = {
  type: 'bar',
  data,
  options: {
    legend: {
      display: false,
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
          color: 'transparent',
        },
      },
    },
  },
};

const reportChart = new Chart(reportCtx, {
  type: 'bar',
  data: {
    labels,
    datasets: data.datasets,
  },

  options: {
    legend: {
      display: false,
    },
  },
});

// export default reportChart;
