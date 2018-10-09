
let data = {
    'project': [
        'Description',
        'Design',
        'Feature',
        'Techniques',
        'Validation',
        'Demo'],
    'modeling': [
        'Overview',
        'Searching  engine',
        'Simulation for circuits',
        'Directed evolution algorithm',
        'reference'],
    'humanPractice': [
        'Overview',
        'Silver',
        'Gold',
        'Integrated human practice',
        'Public engagement'],
    'collaboration': [
        'XMU-China',
        'SCUT-ChinaA',
        'WHU-China',
        'SYSU-China'],
    'interlab': [
        'Overview',
        'Experiment design',
        'Material and methods',
        'Results'],
    'medal': [
        'Overview',
        'Bronze',
        'Silver',
        'Gold'],
    'team': [
        'Overview',
        'Team members',
        'advisors',
        'instructors',
        'Notebook'],
    'attributions': [
        'Overview',
        'Group structure',
        'Attribution in project',
        'Acknowledgement'],
}

// main menu navigator
let index = 2;
for (ele in data) {
    let html = `<div class="default text">${ele}</div><div class="menu">`
    for (x in data[ele]) {
        html += `<div class="item" style="color: white !important;" data-value="${index}">${data[ele][x]}</div>`
        index += 1;
    }
    html += `</div>`
    $('#' + ele).append(html);
}

$('.item').on('click', function () {
    if ($(this).attr('data-value') != undefined) {
        fkpage.goToSlide($(this).attr('data-value'));
    }
})
