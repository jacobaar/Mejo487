var slider = $(document).ready(function(){
  $('.slider').slick({
	  infinite: false
  });
});

//$('.slick-prev').hide();

slider.on('afterChange', function(event, slick, currentSlide){
	if (currentSlide === 0) {
      $('.slick-prev').hide();
      $('.slick-next').show();
    }
	else if (currentSlide === 11){
	  $('.slick-prev').show();
      $('.slick-next').hide();
	}
	else{
	  $('.slick-prev').show();
      $('.slick-next').show();
	}
});

$(document).ready(function(){
	$('.quizSlide').slickQuiz();
});

