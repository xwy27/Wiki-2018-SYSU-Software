var pages = {
    "Home": {"url": ""},
    "Description": {"url": ""},
    "Design": {"url": ""},
    "Feature": {"url": ""},
    "Techniques": {"url": ""},
    "Validation": {"url": ""},
    "Demo": {"url": ""},
    "Modeling-Overview": {"url": ""},
    "Searching-Engine": {"url": ""},
    "Simulation-Circuits": {"url": ""},
    "Evolution-Algorithm": {"url": ""},
    "Reference": {"url": ""},
    "HP-Overview": {"url": ""},
    "HP-Siliver": {"url": ""},
    "HP-Gold": {"url": ""},
    "Human-Practice": {"url": ""},
    "Public-Engagement": {"url": ""},
    "XMU": {"url": ""},
    "SCUT": {"url": ""},
    "WHU": {"url": ""},
    "SYSU": {"url": ""},
    "I-Overview": {"url": ""},
    "Experiment": {"url": ""},
    "Material-Methods": {"url": ""},
    "Results": {"url": ""},
    "Medal-Overview": {"url": ""},
    "Medal-Bronze": {"url": ""},
    "Medal-Sliver": {"url": ""},
    "Medal-Gold": {"url": ""},
    "T-Overview": {"url": ""},
    "Members": {"url": ""},
    "Advisors": {"url": ""},
    "Instructors": {"url": ""},
    "Notebook": {"url": ""},
    "Notebook": {"url": ""},
    "A-Overview": {"url": ""},
    "Group": {"url": ""},
    "Attribution": {"url": ""},
    "Acknowlegement": {"url": ""}
}

var nowLoadingID = 0;

function loadPages() {
    for (let page in pages) {
        $.get(pages[page].url, function (data) {
            $('#' + page).html(data);
        })
        nowLoadingID += 1;
    }
}


// main menu
if ($(window).width() > 600) {
    $('body')
        .visibility({
            offset: -10,
            observeChanges: false,
            once: false,
            continuous: false,
            onTopPassed: function () {
                requestAnimationFrame(function () {
                    $('.following.bar')
                        .addClass('light fixed')
                        .find('.menu')
                        .removeClass('inverted')
                        ;
                    $('.following .additional.item')
                        .transition('scale in', 750)
                        ;
                });
            },
            onTopPassedReverse: function () {
                requestAnimationFrame(function () {
                    $('.following.bar')
                        .removeClass('light fixed')
                        .find('.menu')
                        .addClass('inverted')
                        .find('.additional.item')
                        .transition('hide')
                        ;
                });
            }
        })
        ;
}