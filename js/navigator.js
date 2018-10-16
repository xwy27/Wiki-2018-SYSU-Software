let data = {
    'Project': [
        'Description',
        'Design',
        'Feature',
        'Techniques',
        'Validation',
        'Demo',
        "Contribution",
        'Improve',
        'Demostrate'],
    'Modeling': [
        'Overview',
        'Recommendation System',
        'Simulation for Circuits',
        'Directed Evolution Algorithm',
        'Reference'],
    'HumanPractice': [
        'Overview',
        'Silver',
        'Gold',
        'Integrated Human Practice',
        'Public Engagement'],
    'Collaboration': [
        'XMU-China',
        'SCUT-ChinaA',
        'WHU-China',
        'SYSU-China'],
    'Interlab': [
        'Overview',
        'Experiment Design',
        'Material and Methods',
        'Results'],
    "Safety": [
        "Wet Lab Safety",
        "Dry Lab Safety"
    ],
    'Medal': [
        'Overview',
        'Bronze',
        'Silver',
        'Gold'],
    'Team': [
        'Overview',
        'Team Members',
        'Advisors',
        'Instructors',
        'Notebook'],
    'Attributions': [
        'Overview',
        'Group Structure',
        'Attribution in Project',
        'Acknowledgement'],
}


// main menu navigator
let index = 2;
for (ele in data) {
    block_list = ['Demo', 'Integrated Human Practice'];
    let html;
    if (ele == 'HumanPractice') {
        html = `<div class="default text">Human Practice</div><div class="menu">`
    }
    else {
        html = `<div class="default text">${ele}</div><div class="menu">`
    }
    for (x in data[ele]) {
        if (block_list.indexOf(data[ele][x]) !== -1) {
            console.log('hit!!')
            html += `<div class="item" style="display: none;" data-value="${index}">${data[ele][x]}</div>`
        } else {
            html += `<div class="item" style="color: white !important;" data-value="${index}">${data[ele][x]}</div>`
        }
        index += 1;
    }
    html += `</div>`
    $('#' + ele).append(html);
}

function backToTop(page) {
    $("#" + page).scrollTop(0);
}


function jumpToPage(pageId) {
    if (pageId != undefined) {
        if (pageId == 1) {
            $(".side-bar").hide();
        } else {
            $(".side-bar").show();
        }
        fkpage.goToSlide(pageId);
        initTopBar(pageList[pageId - 1]);
        backToTop(pageList[pageId - 1]);
    }
}

$('.menu .item').on('click', function () {
    jumpToPage($(this).attr('data-value'));
});

$('.nextpage').on('click', function () {
    jumpToPage($(this).attr('data-value'));
});

$('.top').on('click', function () {
    backToTop($(this).attr('data-value'));
});

$('.lastpage').on('click', function () {
    jumpToPage($(this).attr('data-value'));
});