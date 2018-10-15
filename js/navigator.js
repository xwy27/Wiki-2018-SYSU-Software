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
    block_list = ['Demo'];
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

$('.menu .item').on('click', function () {
    if ($(this).attr('data-value') != undefined) {
        $(".next-page").hide();
        fkpage.goToSlide($(this).attr('data-value'));
        initTopBar(pageList[$(this).attr('data-value') - 1]);
        backToTop(pageList[$(this).attr('data-value') - 1]);
    }
});