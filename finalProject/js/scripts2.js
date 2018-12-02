$(document).ready(function(){
  console.log('Scripts loaded');
  
  $(function getPhotos(){
  console.log('scripts loaded');
  
  //Key: da9e1c07c6fe2d5edd27c410440224ee

  var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=da9e1c07c6fe2d5edd27c410440224ee&tags=&text=Nintendo&extras=url_o&format=json&nojsoncallback=1';
  
  $.ajax({
    type: 'GET',
    url: url,
    success: function(data){
      console.log(data);
      buildStuff(data);
    },
    error: function(error){
      console.log(error);
    }
  })

  function buildStuff(data){
    for(i=0; i< data.photos.photo.length; i++) {
      var url = data.photos.photo[i].url_o;

      if(url) {
        $('.slider').append('<div class = "content"><img src="' + url + '"/></div>');
      }
    }
	
	$('.slider').slick({
		infinite: true
	});
  }
  
});

  // var base = 'https://newsapi.org/v2/everything?';
  // var params = 'q=election&from=2018-11-01&sortBy=publishedAt';
  // var url = base + params + '&apiKey=' + newsKey;
  
  var url = 'https://newsapi.org/v2/everything?q=gaming&language=en&from=2018-11-15&sortBy=publishedAt&apiKey=ed7a093f507e4582bb27490e6a01dd7b';

  $.ajax({
    type: 'GET',
    url: url,
    success: function(data){
      console.log(data);
      buildTable(data);
    },

    error: function(error) {
      console.log(error);
    },
  });

  function buildTable(data) {
    for(i=0; i< data.articles.length; i++) {
      var name = '<h3>' + data.articles[i].title + '</h3>';
      var description = '<p>' + data.articles[i].description + '</p>';
	  var articleURL = '<a href = "' + data.articles[i].url + '">' + data.articles[i].url + '</a>';

	  $('#newsResults').append('<div class = "allNewsDiv newsDiv' + i + '"> ');
      $('.newsDiv' + i).append(name + description + articleURL);
    }
  }

})
