let fkpage;


$(document).ready(function () {
  let dstPage = 0;
  urlSplit = window.location.href.split('?');
  if (urlSplit.length > 1) {
    dstPage = 0 + pageList.findIndex((value, index, arr) => {
      return value === urlSplit[1];
    });
  }
  // console.log(dstPage);

  fkpage = $('.myfkpage').FKPageTransitions({
    startSlide: dstPage,
    mode: 35,
    mouseWheel: false
  });
  initTopBar(pageList[dstPage]);
  fkpage.goToNextSlide();

  let pageHeight = $(window).height();
  let pageWidth = document.documentElement.clientWidth || document.body.clientWidth;
  (function () {
    $('.myfkpage').css('height', pageHeight + 'px');
    // console.log(pageHeight);
  })();


  // console.log(pageHeight);
  // console.log(pageWidth);
  $('#home-video').css('width', pageWidth + 'px');
  $('#home-video').css('height', pageHeight + 'px');
  // $('#home-video')[0].play();

});



$('.dropdown').dropdown({
  action: 'select'
});
$('.ui.dropdown.link.item').on('mouseenter', function () {
  $('.ui.dropdown.link.item').not($(this)).dropdown('hide');
  $(this).dropdown('show');
});

$('#home').on('mouseenter', function () {
  // console.log('hei');
  $('.ui.dropdown.link.item').dropdown('hide');
})