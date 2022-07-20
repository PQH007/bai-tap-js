var btb_1 = document.getElementById('btb1')
    btb_1.onclick = function(){
        // var html = $('#div1').html();
        // alert(html);
        // $('#div1').append('<br/><b>day la noi dung IN DAM NEW</b>')
        //  $('#div1').after('<div style="background-color: red">ABC</div>');        
        $('#span1').unwrap();// xoa bo tat ca cac the bao boc the do 
}

document.getElementById('btb2').onclick = function(){
    // $('#div1').html('<a href ="fb.com"> fb </a> noi dung moi !!! <b>IN DAM</b>');
    // $('#div1').prepend('<b>day la noi dung IN DAM NEW</b> <br/>');
    // $('#div1').before('<div style="background-color: yellow">ABC</div>');
    $('#div1').replaceWith('<div style="background-color:red">123</div>');        
}
document.getElementById('btb3').onclick = function(){
    // var text = $('#div1').text();
    // alert(text);
    // $('<br/><b>day la noi dung IN DAM NEW</b>').appendTo('#div1');
    // $('<div style="background-color: red">ABC</div>').insertAfter('#div1');
    $('.btb').wrapAll('<div class="wrap"></div>')
}
document.getElementById('btb4').onclick = function(){
    // $('#div1').text('123 <b>in dam </b>');
    // $('<b>day la noi dung IN DAM NEW</b> <br/>').prependTo('#div1');
    // $('<div style="background-color: yellow">ABC</div>').insertBefore('#div1');
    $('.btb').wrapInner('<div class="wrap"></div>')
}
