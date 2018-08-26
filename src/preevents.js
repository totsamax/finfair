import 'bootstrap';
import './scss/custom.scss';
import '../node_modules/bxslider/dist/jquery.bxslider';

$(document).ready(function() {
  $('.slider').bxSlider({
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 330,
    slideMargin: 20,
    adaptiveHeight: true,
    pager: false,
  });
});
