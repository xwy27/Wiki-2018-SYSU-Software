let fkpage;
$(document).ready(function () {
  fkpage = $('.myfkpage').FKPageTransitions({
    mode: 35,
    mouseWheel: false
  });
  fkpage.goToNextSlide();
});

$('.myfkpage').children('li').each(function (index, ele) {
  $(this).addClass('test');
});

$('.dropdown').dropdown({
  action: 'select'
});
$('.ui.dropdown.link.item').on('mouseenter', function () {
  $('.ui.dropdown.link.item').not($(this)).dropdown('hide');
  $(this).dropdown('show');
});
