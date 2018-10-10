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
    console.log(pageHeight)
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
$('.ui.dropdown.link.item').on('click', function() {
  // 当标题栏的标题被点击时，默认当作点击dropdown第一篇文章
  $b = $(this).get(0).children[1].children[0];
  $b.click();
})
;

$('#home').on('mouseenter', function() {
  console.log('hei');
  $('.ui.dropdown.link.item').dropdown('hide');
})