var pages = {
    "Home": { "url": "1" },
    "Description": { "url": "../html/Projects/Description.html" },
    "Design": { "url": "../html/Projects/Design.html" },
    "Feature": { "url": "" },
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
    "I-Overview": { "url": "" },
    "Experiment": { "url": "" },
    "Material-Methods": { "url": "" },
    "Results": { "url": "" },
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

var nowLoadingID = 0;

function loadPages() {
    for (let page in pages) {
        if (pages[page].url === "") continue;
        $.get(pages[page].url, function (data) {
           $('#' + page).html(data);
        })
        nowLoadingID += 1;
        // main menu
        $('#' + page + '>.page-container')
            .visibility({
                offset: -20,
                observeChanges: false,
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
            })
            ;
    }
}

loadPages()
