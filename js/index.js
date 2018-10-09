let fkpage;
$(document).ready(function () {
  fkpage = $('.myfkpage').FKPageTransitions({
    mode: 35,
    mouseWheel: false
  });
  fkpage.goToNextSlide();
  (function () {
    let pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    $('.myfkpage').css('height', pageHeight + 'px');
  })();
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
