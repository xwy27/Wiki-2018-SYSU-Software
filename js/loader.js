var pages = {
    "Home": { "url": "1" },
    "Description": { "url": "../html/Projects/Description.html" },
    "Design": { "url": "../html/Projects/Design.html" },
    "Feature": { "url": "../html/Projects/Feature.html" },
    "Techniques": { "url": "" },
    "Validation": { "url": "" },
    "Demo": { "url": "" },
    "Contribution": {"url": "../html/Projects/Contribution.html"},
    "Improve": {"url": ""},
    "Demostrate": {"url": ""},
    "Modeling-Overview": { "url": "" },
    "Searching-Engine": { "url": "" },
    "Simulation-Circuits": { "url": "" },
    "Evolution-Algorithm": { "url": "" },
    "Reference": { "url": "" },
    "HP-Overview": { "url": "../html/Human_Practice/Overview.html" },
    "HP-Siliver": { "url": "../html/Human_Practice/Silver.html" },
    "HP-Gold": { "url": "../html/Human_Practice/Gold.html" },
    "Human-Practice": { "url": "../html/Human_Practice/HumanPractice.html" },
    "Public-Engagement": { "url": "../html/Human_Practice/PublicEngagement.html" },
    "XMU": { "url": "../html/Collaboration/XMU.html" },
    "SCUT": { "url": "../html/Collaboration/SCUT.html" },
    "WHU": { "url": "../html/Collaboration/WHU.html" },
    "SYSU": { "url": "../html/Collaboration/SYSU.html" },
    "I-Overview": { "url": "../html/Interlab/Overview.html" },
    "Experiment": { "url": "../html/Interlab/ExperimentDesign.html" },
    "Material-Methods": { "url": "../html/Interlab/MaterialMethods.html" },
    "Results": { "url": "../html/Interlab/Results.html" },
    "Medal-Overview": { "url": "../html/Medal/Overview.html" },
    "Medal-Bronze": { "url": "../html/Medal/Bronze.html" },
    "Medal-Sliver": { "url": "../html/Medal/Silver.html" },
    "Medal-Gold": { "url": "../html/Medal/Gold.html" },
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
                    $(".next-page").show();
                }, 1000);
                setTimeout(() => {
                    if (onNextPageShow) {
                        isAllowNextPage = true;
                    } else {
                        $(".next-page").hide();
                        onNextPageShow = false;
                    }
                }, 1500);
            },
            onTopVisibleReverse: function () {
                $(".next-page").hide();
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