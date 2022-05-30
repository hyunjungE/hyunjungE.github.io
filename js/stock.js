const labels = [
    '',
    '',
    '',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: 'rgb(255, 0, 0)',
      data: [2687.45, 901.82, 116.25],
    },
    {
        label: '',
        backgroundColor: 'rgb(0, 0, 255)',
        data: [2680.46, 907.57, 114.97],
      } ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
               display:false
            },
         x: {
               display:false
            }
        },
        plugins:{
            legend:{
              display:false
            }        
          }
    }
  };
  
 const myChart = new Chart(
    $('#myChart'),
    config
  );
  /*-----------------------------*/ 
  $( ".stock_accodian" ).accordion({
    collapsible: true
  });