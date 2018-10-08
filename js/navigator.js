
// main menu navigator
$('.item').on('click', function () {
    if ($(this).attr('data-value') != undefined) {
        fkpage.goToSlide($(this).attr('data-value'));
    }
})