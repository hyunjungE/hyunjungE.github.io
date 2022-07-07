$( ".stock_accodian" ).accordion({
  heightStyle: "content"
});


const labels = [
    '',
    '',
    '',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: 'rgb(235, 104, 59)',
      data: [2687.45, 901.82, 116.25],
    },
    {
        label: '',
        backgroundColor: 'rgb(0, 146, 151)',
        data: [2680.46, 907.57, 114.97],
      } ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
               display:false,
               heightStyle:30
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
 