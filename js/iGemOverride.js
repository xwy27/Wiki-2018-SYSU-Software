if (window.location.href.indexOf('2018.igem.org') != -1) {
    $('#content').css({
        "width": "100%",
        "padding": "0px",
        "margin": "0px"
    });
    $('#mw-content-text').children('p').remove();
    $('#top_title').remove();
} else {
    console.warn("Not in igem wiki environment.");
}