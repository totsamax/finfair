import 'bootstrap';
import './scss/custom.scss';
import 'bxslider/dist/jquery.bxslider';

$(document).ready(function() {
  $('.slider').bxSlider({
    auto: true,
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 250,
    slideMargin: 10,
    adaptiveHeight: true,
    pager: false,
    autoHover: true,
    autoControls: true,
  });
});
