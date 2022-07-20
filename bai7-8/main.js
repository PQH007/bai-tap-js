function Img(){
    $.ajax('http://127.0.0.1:5500/bai%20tap%20js/bai7-8/pqh.html')
    .done(function (rs){
        $('#msg').html(rs);
    });
};
$('#tobi').click(
    function(){
        $('#my-dialog').dialog('open');
    }
) 
$('#my-dialog').dialog({
    autoOpen: false,
    show: {effect:'blind', duration: 1000},
    hide: {effect:'explode', duration:1000},
    width: 400, height: 'auto', 
    resizable: false,
    modal: true,
    buttons: {
        'oke':function(){
            $('#pqh').html('ban da dong y. bam cancel de tat');
        },
        'cancel':function(){
            $(this).dialog('close');
        }
    }
});

