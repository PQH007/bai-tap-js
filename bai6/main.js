$(document).ready(function(e){
});

$('#img').click(function(){
    changeImg();
});

var status  = 1;
function changeImg(){
    $('#img').stop(true);
    if (status == 1){
        status = 2;
        sizeDown();
    }else{
        status = 1;
        sizeUp();
    }
};

function sizeDown(){
    $('#img').animate({
        width:'100px',
        opacity:0.5
    }
    ,3000
    ,'linear'
    ,changeImg
)};
function sizeUp(){
    $('#img').animate({
        width:'500px',
        opacity:1
    }
    ,3000
    ,'swing'
    ,changeImg
)};