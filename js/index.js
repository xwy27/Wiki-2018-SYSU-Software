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

  let pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
  let pageWidth = document.documentElement.clientWidth || document.body.clientWidth;
  (function () {
    $('.myfkpage').css('height', pageHeight + 'px');
    // console.log(pageHeight);
  })();

  // $('#home-video').css('width', pageWidth + 'px');
  // $('#home-video').css('height', pageHeight + 'px');
  $('#home-video')[0].play();

});

let index_map = {
  1: 0,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
  11: 2,
  12: 2,
  13: 2,
  14: 2,
  15: 2,
  16: 3,
  17: 3,
  18: 3,
  19: 3,
  20: 3,
  21: 4,
  22: 4,
  23: 4,
  24: 4,
  25: 5,
  26: 5,
  27: 5,
  28: 5,
  29: 8,  /* Wet-lab */
  30: 8,  /* Dry-lab */
  31: 6,
  32: 6,
  33: 6,
  34: 6,
  35: 7,
  36: 7,
  37: 7,
  38: 7,
  39: 7,
  40: 8,
  41: 8,
  42: 8,
  43: 8
};

$('.myfkpage').children('li').each(function (index, ele) {
  let temp = index_map[index];
  $(this).addClass('test' + temp);
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