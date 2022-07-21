$(document).ready(function (){
  
});

$('#my-prb').progressbar(
    {
        value: false,
        change: function (){
            var c_value = $('#my-prb').progressbar('value');
            $('#my-prb-label').html(c_value + '%');
        },
        complete: function(){
            $('#my-prb-label').html('da xong');
        }
    }
)

function start(){
    var c_value = $('#my-prb').progressbar('value') + 1;
    $('#my-prb').progressbar('value',c_value);
    if(c_value < 100){
        setTimeout('start()',100);
    }
}
// datepicker
$('#birthday').datepicker({
    dateFormat:'dd/mm/yy',
    showAnim:'fold',
    minDate:'-10D',
    maxDate:'+5D',
});

//tooltip 
$('#my-tooltip').tooltip({
    track:true,
});