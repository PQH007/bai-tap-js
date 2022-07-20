$(document).ready(function(e){
    setUpEvent();
});
function setUpEvent(){
    //show
    $('#show').click(function(){
        // $('#img').show(1000, function(){
        //     alert('da show');
        // });
        $('#img').slideDown(1000,function(){
            alert('da show');
        })
    });
    //hide
    $('#hide').click(function(){
        // $('#img').hide(1000, function(){
        //     alert('da hide');
        // });
        $('#img').slideUp(1000,function(){
            alert('slide Up');
        })
    });
    //toggle
    $('#toggle').hover(function(){
        // $('#img').toggle(1000, function(){
        //     alert('da toggle');
        // });
        $('#img').slideToggle(1000,function(){
            alert('toggle');
        })
    });
    //To x
    $('#ft').change(function (){
        var x = parseFloat($(this).val());
        $('#img').fadeTo(1000, x);
    });
}

