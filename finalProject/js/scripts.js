$(document).ready(function(){
	
  var slider = $(document).ready(function(){
	$('.slider').slick({
		infinite: true
	});
  });
  console.log ('DOM loaded');

  // Set up any variables needed
  var url = './js/salesNumbersPerGen.json';
  //var countryNames = [];
  //var numAirports = [];
  //var pieData = [];
  var genConsoles = [];
  var genSales = [];
  
  // Load the JSON data
  $.ajax({
    type: 'GET',
    url: url,
    async: true,
    success: function(data){
      // Console log the data
      // console.log(data);

      // Callbacks for logic and chart
      doLogic(data)
      buildChart(data);
    },

    error: function(error) {
      console.log(error);
    },
});

  // Function to do logic
  function doLogic(data) {
    // Set up a for loop to loop through the data
    for(i = 0; i < data.length; i++) {
      // Push data to different arrays to prepare for chart
      // countryNames.push(data[i].name);
      // numAirports.push(data[i].Population*1000000/data[i].Airports);
      // pieData.push([data[i].name, data[i].UnemploymentRate]);
	  genConsoles.push(data[i].ConsoleName);
	  genSales.push(data[i].SalesNumbers / 1000000);
    }
  }

  // Function to build charts
  function buildChart(data) {
    // Setting some default highchart actions
    Highcharts.setOptions({
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    })

    // Lets set up the basics of a column chart
    Highcharts.chart('bar-chart', {

      // Chart Type
      chart: {
          type: 'column'
      },

      // Title and Subtitle
      title: {
        text: 'What were the bestselling consoles of each Console Generation?'
      },
      subtitle: {
        text: 'Source: Wikipedia'
      },

      // Axises
      xAxis: {
        categories: genConsoles,
        crosshair: true
      },
      yAxis: {
        title: {
          text: 'Number of each Console Sold (In Millions)'
        },
        ceiling: 175000000,
      },

      // Actual data plotting
      series: [{
        name: 'Total Number of Consoles Sold (In Millions)',
        data: genSales
      }]
    });
	
  }
});