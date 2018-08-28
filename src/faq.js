import 'bootstrap';
import './scss/custom.scss';
$('.tags__tag a').click(function(event) {
  event.preventDefault();
  var target = $(this).attr('href');
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(target).offset().top - 150,
    },
    2000
  );
});
