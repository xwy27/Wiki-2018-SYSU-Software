let fkpage;


$(document).ready(function () {
  

  fkpage = $('.myfkpage').FKPageTransitions({
    mode: 35,
    mouseWheel: false
  });
  fkpage.goToNextSlide();
  initTopBar("Home");
  let pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  let pageWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
  (function () {
    $('.myfkpage').css('height', pageHeight + 'px');
    console.log(pageHeight)
  })();
  
  $('#home-video')[0].play();
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

$('#home').on('mouseenter', function() {
  console.log('hei');
  $('.ui.dropdown.link.item').dropdown('hide');
})