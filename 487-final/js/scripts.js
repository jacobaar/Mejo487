$(document).ready(function() {
  console.log('Ready to begin the test...');
  
  var student = {name:"Brenda", age:20, likesCoding:true};
  
  printBrenda(student);


  $('.mobile-btn').click(function(){
	  $('#mobileNav').toggle();
  });
  
  
});

function printBrenda(person){
 if(person.likesCoding == true){
	 console.log("Name: " + person.name);
	 console.log("Age: " + person.age);
 }
}
