import 'bootstrap';
import './scss/custom.scss';
$(function() {
  var selectedClass = '';
  $('.filter-buttons__button').click(function() {
    selectedClass = $(this).attr('data-rel');
    $(this).toggleClass('animation');
    $('.filter-buttons__button')
      .not(this)
      .removeClass('animation');
    if (!$(this).hasClass('animation')) {
      $('.events-list__item.' + selectedClass).removeClass('animation');
    } else {
      $('.events-list__item')
        .not('.' + selectedClass)
        .removeClass('animation');
      $('.events-list__item.' + selectedClass).addClass('animation');
    }
    // setTimeout(function() {
    //   $('.' + selectedClass)
    //     .fadeIn()
    //     .addClass('animation');
    //   $('.events-list').fadeTo(300, 1);
    // }, 300);
  });
});
