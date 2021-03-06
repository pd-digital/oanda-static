$(document).ready(function(){
  if ($('#cards').length) {
    $('#cards').slick({
      infinite: false,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: Infinity,
          settings: "unslick"
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  if ($('#trading-cards').length) {
    $('#trading-cards').slick({
      infinite: false,
      dots: true,
      arrows: false
    });
  }
});
