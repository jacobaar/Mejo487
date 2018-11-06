$(document).ready(function(){
  console.log('scripts loaded');

  /*
  1. Build an HTML table using an AJAX call on the provided XML file (nobelprize.json). The JSON data shows all of the Nobel Prize winners since 2000.

  2. The table should have four columns:
      - Prize year
      - Prize category
      - Number of Prize laureates
      - Overall Motivation

  3. You will notice that the table is a bit messy; some of the prizes have no motivations. 
  Clean this up with conditional logic in your code. If the prize has no motivation, print "General" in its place.
  */
  
  $('#results').append('<th>Prize Year</th>');
  $('#results').append('<th>Prize Category</th>');
  $('#results').append('<th>Number of Laureates</th>');
  $('#results').append('<th>Overall Motivation</th>');
  
  $.ajax({
    type: 'GET',
    url: '../nobelprize.JSON',
    //data: exampledata,
    success: function(data){
      //console.log(data.objects);
	  createTable(data);
    },
    error: function(error) {
      console.log(error);
    },
  });
  
  function createTable(data){
	for(var i = 0; i < data.prizes.length; i++){
		$('#results').append('<tr id = row' + i + '></tr>');
		$('#row' + i).append('<td>' + data.prizes[i].year + '</td>');
		$('#row' + i).append('<td>' + data.prizes[i].category + '</td>');
		$('#row' + i).append('<td>' + data.prizes[i].laureates.length + '</td>');
		
		if(data.prizes[i].overallMotivation === undefined)
		{
			$('#row' + i).append('<td>General</td>');
		}
		else{
			$('#row' + i).append('<td>' + data.prizes[i].overallMotivation + '</td>');
		}
	}
  }
  
});
