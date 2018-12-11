$(document).ready(function() {
  console.log('Ready to begin the test...');
  
  var student = {name:"Brenda", age:20, likesCoding:true};
  
  printBrenda(student);


  $('.mobile-btn').click(function(){
	  $('#mobileNav').toggle();
  });
  
  // var url = 'refugees.JSON';
  
  $.ajax({
    type: 'GET',
    url: 'js/refugees.json',
    success: function(data){
      console.log(data);
      buildContent(data);
    },
    error: function(error){
      console.log(error);
    }
  })
  
  function buildContent(data){
	for(i=0; i< data.length; i++) {
		console.log("Origin: " + data[i].Origin + " Value: " + data[i].Value);
		$('.cards').append('<div class = "card card' + i + '"></div>');
		$('.card' + i).append('<p class = "cardOrigin">' + data[i].Origin +'</p>');
		$('.card' + i).append('<p class = "cardRequests">' + data[i].Value + '</p>');
	}
  }
  
});

function printBrenda(person){
 if(person.likesCoding == true){
	 console.log("Name: " + person.name);
	 console.log("Age: " + person.age);
 }
}
