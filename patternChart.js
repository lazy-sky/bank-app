const patternCtx = document.getElementById('patternChart').getContext('2d');

const patternChart = new Chart(patternCtx, {
  type: 'doughnut',
  data: {
    labels: ['주유비', '건강관리비', '외식비', '장보기', '상점'],
    datasets: [{
      data: [56000, 80000, 233000, 390000, 46000],
      backgroundColor: [
        '#BD5B00',
        '#0057BD',
        '#00BDB2',
        '#FEC229',
        '#C4C4C4',
      ],
      borderWidth: 0,
      cutout: "80%",
    }],
  },

  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    },
    legend: {
      display: true,
      boxWidth: 100,
      position: 'bottom',
    }
  },
});

