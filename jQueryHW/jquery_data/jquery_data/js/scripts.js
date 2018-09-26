/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Write your function here
function fillTable()
{
	for(var i = 0; i < players.length; i++)
	{
		//console.log("Player " + i);
		$('#playerInfo').append('<tr id = player' + i + '></tr>');
		$('#player' + i).append('<td>' + players[i].first + '</td>');
		$('#player' + i).append('<td>' + players[i].last + '</td>');
		$('#player' + i).append('<td>' + players[i].position + '</td>');
		$('#player' + i).append('<td>' + players[i].year + '</td>');
		
		if(players[i].year === 'Senior')
		{
			$('#player' + i).css('font-weight','bold');
			$('#player' + i).css('font-size','15pt');
		}
	}
	
}

fillTable();


/*
EXTRA CREDIT: Write a function that compares the list above with the list below, finds the players that made the All-State team, 
and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." 
Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];


/*function findAllStars()
{	
	//"Congratulations to Springfield's 2018 North Carolina All-State honorees: ____."
	
	var similarIndex = [2];
	var counter = 0;
	
	for (var i = 0; i < players.length; i++)
	{
		for(var j = 0; j < allStars.length; j++)
		{	
			if(players[i].first == allStars[j].first && players[i].last == allStars[j].last 
				&& players[i].position == allStars[j].position && allStars[j].school == 'Springfield High School')
			{
				//console.log(players[i].first  + " " + players[i].last);
				//console.log(allStars[j].first  + " " + allStars[j].last);
				
				//similarIndex[counter] = i;
				//counter++;
				similarIndex.push(j);
				//$('#congratsMessage').text("Congratulations to Springfield's 2018 North Carolina All-State honorees: " + allStars[j].first + " " + allStars[j].last + ".");
				//break;
			}
		}
	}
	
	for(var k = 0; k < similarIndex.length; k++)
	{
		//console.log(similarIndex[k]);
		console.log(players[similarIndex[k]].first + " " + players[similarIndex[k]].last);
	}
	
}

findAllStars();*/












