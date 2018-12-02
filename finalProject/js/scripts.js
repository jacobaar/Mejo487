$(document).ready(function(){
	
  var slider = $(document).ready(function(){
	$('.slider').slick({
		infinite: true
	});
  });
  console.log ('DOM loaded');

  // Set up any variables needed
  var url = './js/salesNumbersPerGen.json';
  var url2 = './js/gen8Specs.json';
  var url3 = './js/playerPercent.json';
  //var countryNames = [];
  //var numAirports = [];
  //var pieData = [];
  var genConsoles = [];
  var genSales = [];
  
  var gen8Consoles = [];
  var gen8CPU = [];
  var gen8GPU = [];
  var gen8RAM = [];
  var gen8Storage = [];
  var gen8Networking = [];
  var gen84kSupport = [];
  var gen8ReleaseDate = [];
  var pieData = [];
  
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
	  buildDT(data);
    },

    error: function(error) {
      console.log(error);
    },
  });
  
  $.ajax({
    type: 'GET',
    url: url2,
    async: true,
    success: function(data){
      // Console log the data
      // console.log(data);

      // Callbacks for logic and chart
      //doLogic2(data)
      //buildChart(data);
	  buildDT2(data);
    },

    error: function(error) {
      console.log(error);
    },
  });
  
  $.ajax({
    type: 'GET',
    url: url3,
    async: true,
    success: function(data){
      // Console log the data
      // console.log(data);

      // Callbacks for logic and chart
      doLogic3(data)
      //buildChart(data);
	  buildChart2(data);
    },

    error: function(error) {
      console.log(error);
    },
  });
  
  function doLogic3(data) {
    // Set up a for loop to loop through the data
    for(i = 0; i < data.length; i++) {
      // Push data to different arrays to prepare for chart
      pieData.push([data[i].AgeGroup, data[i].PercentageofPlayers]);
    }
  }
  
   // Function to build charts
  function buildChart2(data) {
    // Setting some default highchart actions
    Highcharts.setOptions({
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    })

    // Lets set up a basic pie chart
    Highcharts.chart('pie-chart', {

      // Chart Type
      chart: {
          type: 'pie'
      },

      // Title and Subtitle
      title: {
        text: 'Percentage of gamers per age range'
      },
      subtitle: {
        text: 'Source: https://www.statista.com/statistics/189582/age-of-us-video-game-players-since-2010/'
      },
      // Actual data plotting
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
        },
      },
      series: [{
        type: 'pie',
        name: 'Age Range',
        data: pieData
      }]
    });
  }
  
    
  function buildDT2(data) {
  $('#specTable').dataTable({
		data: data,
		columns: [
			{"data": "ConsoleName"},
			{"data": "CPU"},
			{"data": "GPU"},
			{"data": "RAM"},
			{"data": "Storage"},
			{"data": "Networking"},
			{"data": "have4KSupport"},
			{"data": "ReleaseDate"}
		]
	})
  }
  
  function doLogic2(data) {
    // Set up a for loop to loop through the data
    for(i = 0; i < data.length; i++) {
      // Push data to different arrays to prepare for chart
      gen8Consoles.push(data[i].ConsoleName);
      gen8CPU.push(data[i].CPU);
      gen8GPU.push(data[i].GPU);
      gen8RAM.push(data[i].RAM);
      gen8Storage.push(data[i].Storage);
      gen8Networking.push(data[i].Networking);
      gen84kSupport.push(data[i].have4KSupport);
      gen8ReleaseDate.push(data[i].ReleaseDate);
    }
  }

  //Function to build a Data Table
  function buildDT(data) {
  $('#table').dataTable({
		data: data,
		columns: [
			{"data": "ConsoleName"},
			{"data": "SalesNumbers"}
		]
	})
  }

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
        text: 'Source: Wikipedia - List of Home Video Game Consoles <br> https://en.wikipedia.org/wiki/List_of_home_video_game_consoles'
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