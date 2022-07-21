$('#my-tabs').tabs({
    collapsible:true,
    // event:'mouseover',
});
$('#my-spinner').spinner({
    min: 0,
    max: 100,
    step:5,
    // stop: function (){
    //     var vl = $(this).spinner('value');
    //     $('#spinner_value').html(vl);
    // },
    change: function (){
        var vl = $(this).spinner('value');
        $('#spinner_value').html(vl);
    }
});

// slider
$('#mySlider').slider({
    min: 0,
    max: 100,
    step: 1,
    stop: function (){
        var vl = $(this).slider('value');
        $('#sp_value').html(vl);
    }

});
$('#mySlider2').slider({
    orientation: 'vertical',
    min: 0,
    max: 100,
    step: 1,
    stop: function (){
        var vl = $(this).slider('value');
        $('#sp_value2').html(vl);
    }
});
