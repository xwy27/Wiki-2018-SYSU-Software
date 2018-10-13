let fkpage;


$(document).ready(function () {
  let dstPage = 1;
  urlSplit = window.location.href.split('#');
  if (urlSplit.length > 1) {
    dstPage = 1 + pageList.findIndex((value, index, arr) => {
      return value === urlSplit[1];
    });
  }
  console.log(dstPage);

  fkpage = $('.myfkpage').FKPageTransitions({
    startSlide: dstPage,
    mode: 35,
    mouseWheel: false
  });
  fkpage.goToNextSlide();
  initTopBar(pageList[dstPage - 1]);

  let pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  let pageWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
  (function () {
    $('.myfkpage').css('height', pageHeight + 'px');
    console.log(pageHeight);
  })();

  $('#home-video').css('width', pageWidth + 'px');
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