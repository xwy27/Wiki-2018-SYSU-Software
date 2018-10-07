let half = true;
let index = 0;
let data;

function show_detail(index) {
    $(".right_head > h2").html(data[index]["title"]);
    $(".right_main").html(data[index]["content"]);
    $(".background > .cover").css("opacity", "0.2").css("pointer-events", "inherit");
    if (half) {
        $(".right_window").css("left", "50%").css("width", "50%");
    } else {
        $(".right_window").css("left", "0%").css("width", "100%");
    }
    $("body").css("overflow-y", "visible");
    setTimeout(function () {
        $(".right_placeholder").css("height", "0");
        $(".right_window > .cover").css("opacity", "0.0");
    }, 1000);
    $(window).off("mousewheel");
}

function show_main() {
    $(".right_window").css("left", "100%").css("width", "50%");
    $("body").css("overflow-y", "hidden");
    $(".background > .cover").css("opacity", "0.0").css("pointer-events", "none");
    setTimeout(function () {
        $(".right_placeholder").css("height", "30%");
        $(".right_window > .cover").css("opacity", "1.0");
    }, 1000);
    $(window).on("mousewheel", fix_position);
}

$(".background > .cover").on("click", show_main);
$(".right_window > .right_head").on("click", show_main);

$(window).resize(function () {
    half = $(window).width() >= 500;
});

$(window).ready(function () {
    load();
    if ($(window).width() >= 500) {
        half = true;
        $(".navigation").show();
        $(".info_window").show();
    } else {
        half = false;
        $(".navigation").hide();
        $(".info_window").hide();
    }
});

function choice(index, click = false) {
    if (click) {
        let menu = $(".menu");
        let block_height = $(".subtitle").outerHeight();
        let offset = ($(window).height() - block_height) / 2 - index * block_height;
        menu.css("top", offset + "px");
    }
    $(".subtitle").css("opacity", "0.3").eq(index).css("opacity", "1.0");
}

function fix_position(event, delta) {
    $(".nav").eq(index).trigger("click");
    $(".navigation").trigger("mouseleave");
    // index = Math.min(Math.max(0, index - delta), data.length - 1);
    let menu = $(".menu");
    let offset = menu.offset().top;
    let block_height = $(".subtitle").outerHeight();
    let half_side = ($(window).height() - block_height) / 2;
    offset = Math.max(Math.min(half_side, offset + delta * block_height / 2), half_side + block_height - menu.outerHeight());
    menu.css("top", offset + "px");
    index = Math.round((($(window).height() - block_height) / 2 - offset) / block_height);
    choice(index);
}

$(window).on("mousewheel", fix_position);

function load () {
    data = test_data;
    console.log(data);
    data.forEach(function (value, index) {
        $(".menu").append("<div class='subtitle' onclick='show_detail(index)'><h1>" + value["title"] + "</h1></div>");
        $(".navigation").append("<div class='nav'></div>");
    });
    $(".nav").css("margin", ($(".navigation").height() - data.length * $(".nav").height()) / (data.length + 1) + "px auto");
    $(".nav").on("mouseenter", function (obj) {
        $(".nav").css("width", "80%").css("height", "4px").css("position", "static").css("left", "10%").css("top", "0px").empty();
        $(this).css("width", "120%").css("height", "8px").css("position", "relative").css("left", "-10%").css("top", "-1px");
        $(this).append("<div class='preview'><h3>" + data[$(this).index()]["title"] + "</h3></div>");
    }).on("click", function () {
        index = $(this).index();
        choice($(this).index(), true);
    });
    $(".navigation").on("mouseleave", function (obj) {
        $(".nav").css("width", "80%").css("height", "4px").css("position", "static").css("left", "10%").css("top", "0px").empty();
        $(".nav").eq(index).css("width", "120%").css("height", "8px").css("position", "relative").css("left", "-10%").css("top", "-2px");
    }).trigger("mouseleave");
    fix_position(null, 0);
}