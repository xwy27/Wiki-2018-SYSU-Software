let data = {
    'Project': [
        'Description',
        'Design',
        'Feature',
        'Techniques',
        'Validation',
        'Demo'],
    'Modeling': [
        'Overview',
        'Searching  Engine',
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
        'SCUT-China',
        'WHU-China',
        'SYSU-China'],
    'Interlab': [
        'Overview',
        'Experiment Design',
        'Material and Methods',
        'Results'],
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
    let html;
    if (ele == 'HumanPractice') {
        html = `<div class="default text">Human Practice</div><div class="menu">`
    }
    else {
        html = `<div class="default text">${ele}</div><div class="menu">`
    }
    for (x in data[ele]) {
        html += `<div class="item" style="color: white !important;" data-value="${index}">${data[ele][x]}</div>`
        index += 1;
    }
    html += `</div>`
    $('#' + ele).append(html);
}

$('.item').on('click', function () {
    if ($(this).attr('data-value') != undefined) {
        $(".next-page").animate({
            'opacity': '0'
        }, 0);
        onNextPageShow = false;
        isAllowNextPage = false;
        fkpage.goToSlide($(this).attr('data-value'));
    }
});
