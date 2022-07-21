$(document).ready(function (){

});

// Accordion
$('#my-accordion').accordion({
    heightStyle: 'content',
});

var data = [
    'PHP',
    'javascrip',
    'THMLol',
    'cssgo',
    'javalorant',
    'ruby'
]
$('#complete').autocomplete({
    delay:200,
    source: data,
})

//menu
$('#my-menu').menu();