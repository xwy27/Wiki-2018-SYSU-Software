var pages = {
    "Home": { "url": "1" },
    "Description": { "url": "../html/Projects/Description.html" },
    "Design": { "url": "../html/Projects/Design.html" },
    "Feature": { "url": "../html/Projects/Feature.html" },
    "Techniques": { "url": "../html/Projects/Techniques.html" },
    "Validation": { "url": "../html/Projects/Validation.html" },
    "Demo": { "url": "" },
    "Contribution": {"url": "../html/Projects/Contribution.html"},
    "Improve": {"url": "../html/Projects/Improve.html"},
    "Demostrate": {"url": ""},
    "Modeling-Overview": { "url": "../html/Modeling/ModelingOverview.html" },
    "Recommendation": { "url": "../html/Modeling/Recommendation.html" },
    "Simulation-Circuits": { "url": "../html/Modeling/SimulationCircuit.html" },
    "Evolution-Algorithm": { "url": "../html/Modeling/EvolutionAlgorithm.html" },
    "Reference": { "url": "../html/Modeling/Reference.html" },
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
    "Wet-Lab": { "url": "../html/Safety/WetLabSafety.html"},
    "Dry-Lab": { "url": "../html/Safety/DryLabSafety.html"},
    "Medal-Overview": { "url": "../html/Medal/Overview.html" },
    "Medal-Bronze": { "url": "../html/Medal/Bronze.html" },
    "Medal-Sliver": { "url": "../html/Medal/Silver.html" },
    "Medal-Gold": { "url": "../html/Medal/Gold.html" },
    "T-Overview": { "url": "../html/Team/Overview.html" },
    "Members": { "url": "../html/Team/TeamMember.html" },
    "Advisors": { "url": "../html/Team/Advisor.html" },
    "Instructors": { "url": "../html/Team/Instructor.html" },
    "Notebook": { "url": "../html/Team/Notebook.html" },
    "A-Overview": { "url": "../html/Attribution/Overview.html" },
    "Group": { "url": "../html/Attribution/GroupStructure.html" },
    "Attribution": { "url": "../html/Attribution/Attribution.html" },
    "Acknowlegement": { "url": "../html/Attribution/Acknowledge.html" }
}

var pageList = [];

var nowLoadingID = 0;
var onNextPageShow = false;
var isAllowNextPage = false;
var scrollLock = false;
var nextPage = 0

function initTopBar(page) {
    // main menu
    requestAnimationFrame(function () {
        $('.following.bar')
            .removeClass('light fixed')
            .find('.menu')
            // .addClass('inverted')
            .find('.additional.item')
            .transition('hide')
            ;
    });
    $(".sticky-navigator").addClass('showtext');
    setTimeout(() => {
        $(".sticky-navigator").removeClass('showtext');
    }, 2000);
    if (page === 'Home') {
        $('.text').removeClass('default').addClass('light');
    } else {
        $('.text').removeClass('light').addClass('default');
    }
    if ($("#"+page+">.page-container>.next-page-identify").length > 0) {
        $(".nextpage").show();
        $(".nextpage").attr("data-value", $("#" + page + ">.page-container>.next-page-identify").attr("data-value"));
    } else {
        $(".nextpage").hide();
    }
    if ($("#" + page + ">.page-container>.last-page-identify").length > 0) {
        $(".lastpage").show();
        $(".lastpage").attr("data-value", $("#" + page + ">.page-container>.last-page-identify").attr("data-value"));
    } else {
        $(".lastpage").hide();
    }
    $(".top").attr("data-value", page);

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
                        // .removeClass('inverted')
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
                        // .addClass('inverted')
                        .find('.additional.item')
                        .transition('hide')
                        ;
                });
            }
        });
    nextPage = $('#' + page + '>.page-container>.next-page-identify').attr("data-value");
}





function loadPages() {
    $('#page-process').progress({
        percent: 50
    });
    for (let page in pages) {
        pageList.push(page);
    }
    for (let page in pages) {
        if (pages[page].url === "") {
            nowLoadingID += 1;
            continue;
        }
        $.get(pages[page].url, function (data) {
            $('#' + page).html(data);
            nowLoadingID += 1;
            //initTopBar(page);
            // console.log(nowLoadingID);
            // console.log(pageList.length);
            $('#page-process').progress({
                percent: parseInt((nowLoadingID + 1) / pageList.length * 50) + 50
            });
            if (nowLoadingID + 1 === pageList.length) {
                // console.log('now mount');
                $('a').on('click', function() {
                    // console.log('click');
                    let target = $(this).attr('goto');
                    // console.log(target);
                    let dstPage = pageList.findIndex((value, index, arr) => {
                        return value === target;
                    });
                    // console.log(dstPage);
                    jumpToPage(dstPage + 1);
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
                    // if (temp === 0) {
                    //     $(this).addClass('noscroll');
                    // } else {
                    //     $(this).addClass('scroll');
                    // }
                    $(this).children('.page-container').addClass('test' + temp);
                });
                let dstPage = 0;
                urlSplit = window.location.href.split('?');
                if (urlSplit.length > 1) {
                    dstPage = 0 + pageList.findIndex((value, index, arr) => {
                        return value === urlSplit[1];
                    });
                }
                if (dstPage == 0) {
                    $(".side-bar").hide();
                } else {
                    $(".side-bar").show();
                }
                fkpage.goToNextSlide();
                console.log(pageList[dstPage]);
                initTopBar(pageList[dstPage]);
                backToTop(pageList[dstPage]);
                setTimeout(() => {
                    $('.page.dimmer').dimmer('hide');
                    $('#home-video')[0].play();
                }, 1000);
                
            }
        });
        
    }
}

// loadPages();
$('page-process').hide();
$('.page.dimmer').dimmer('show');

$('#loading').load(function () {
    $('page-process').show();
    if($('#page-process').attr('data-precent') < 50) {
        $('#page-process').progress({
            percent: 50
        });
    }
    
});
