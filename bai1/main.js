$(document).ready(function (){
    var btb = document.getElementById('changeImg');
    btb.onclick = changeImage;
})

var CurrentImage = 1;
    function changeImage(){
        if(CurrentImage == 1){
            $('#hinh').attr("src","img/2.jpg");
            CurrentImage = 2;
        }
        else{
            $('#hinh').attr("src","img/1.jpg");
            CurrentImage = 1;
        }
    }
$(document).ready(function (){
    var btbw = document.getElementById('changeWidth');
    btbw.onclick = changeWidth;
})

var WidthImage = 1 ;
    function changeWidth(){
        var current_css = $('#hinh').css('width');
        if(WidthImage == 1){
            $('#hinh').addClass('w2');
            WidthImage = 2;
            alert($('#hinh').hasClass('w2')+' '+ current_css);
        }
        else if(WidthImage == 2){
            $('#hinh').addClass('w3');
            WidthImage = 3;
            alert($('#hinh').hasClass('w3')+' '+ current_css);
        }
        else {
            $('#hinh').removeClass('w2 w3');
            WidthImage = 1;
            alert($('#hinh').hasClass('w1 w2 w3')+' '+ current_css);
        }
    }

