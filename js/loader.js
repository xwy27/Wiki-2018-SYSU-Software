var pages = {
    "Home": { "url": "1" },
    "Description": { "url": "../html/Projects/Description.html" },
    "Design": { "url": "../html/Projects/Design.html" },
    "Feature": { "url": "../html/Projects/Feature.html" },
    "Techniques": { "url": "" },
    "Validation": { "url": "" },
    "Demo": { "url": "" },
    "Modeling-Overview": { "url": "" },
    "Searching-Engine": { "url": "" },
    "Simulation-Circuits": { "url": "" },
    "Evolution-Algorithm": { "url": "" },
    "Reference": { "url": "" },
    "HP-Overview": { "url": "" },
    "HP-Siliver": { "url": "" },
    "HP-Gold": { "url": "" },
    "Human-Practice": { "url": "" },
    "Public-Engagement": { "url": "" },
    "XMU": { "url": "" },
    "SCUT": { "url": "" },
    "WHU": { "url": "" },
    "SYSU": { "url": "" },
    "I-Overview": { "url": "../html/Interlab/Overview.html" },
    "Experiment": { "url": "../html/Interlab/ExperimentDesign.html" },
    "Material-Methods": { "url": "../html/Interlab/MeterialMethods.html" },
    "Results": { "url": "../html/Interlab/Results.html" },
    "Medal-Overview": { "url": "" },
    "Medal-Bronze": { "url": "" },
    "Medal-Sliver": { "url": "" },
    "Medal-Gold": { "url": "" },
    "T-Overview": { "url": "" },
    "Members": { "url": "" },
    "Advisors": { "url": "" },
    "Instructors": { "url": "" },
    "Notebook": { "url": "" },
    "Notebook": { "url": "" },
    "A-Overview": { "url": "" },
    "Group": { "url": "" },
    "Attribution": { "url": "" },
    "Acknowlegement": { "url": "" }
}

var pageList = [];

var nowLoadingID = 0;
var onNextPageShow = false;
var isAllowNextPage = false;
var nextPage = 0

function initTopBar(page) {
    // main menu
    $('#' + page + '>.page-container')
        .visibility({
            offset: -5,
            observeChanges: true,
            once: false,
            context: $('#' + page),
            continuous: true,
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
        });
    $('#' + page + '>.page-container>.next-page-identify')
        .visibility({
            offset: -5,
            observeChanges: true,
            once: false,
            context: $('#' + page),
            continuous: true,
            onTopVisible: function () {
                if (onNextPageShow) return;
                onNextPageShow = true;
                setTimeout(() => {
                    $(".next-page").animate({
                        'opacity': '0.8'
                    }, 500);
                }, 1000);
                setTimeout(() => {
                    isAllowNextPage = true;
                }, 1500);
            },
            onTopVisibleReverse: function () {
                $(".next-page").animate({
                    'opacity': '0'
                }, 200);
                onNextPageShow = false;
                isAllowNextPage = false;
            }
        });
    nextPage = $('#' + page + '>.page-container>.next-page-identify').attr("data-value");
}



function loadPages() {
    for (let page in pages) {
        pageList.push(page);
        if (pages[page].url === "") continue;
        $.get(pages[page].url, function (data) {
            $('#' + page).html(data);
            nowLoadingID += 1;
            //initTopBar(page);
        });
        
    }
}

loadPages();

$('.ui.sticky')
    .sticky()
    ;