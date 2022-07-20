// su kien 1
var checkRadio = document.getElementById("bt1");
checkRadio.onclick = function(){
    var radioCheck = document.getElementsByName('radioSex')
  for(var i = 0; i < radioCheck.length; i++){
    if(radioCheck[0].checked){
        alert('ban da chon trai');
        break;
    }
    if(radioCheck[1].checked){
        alert('ban da chon gai');
        break;
    }
    if(radioCheck[2].checked){
        alert('ban da chon khac');
        break;
    }
  }
}; 
// su kien 2
var submitText = document.getElementById('submitText');
submitText.onclick = function(){
  var a = document.getElementById('textImg')
  var khoi1Color = document.getElementsByClassName('khoi1');
  
  if(a.value == "Add textbox" ){
    for(n = 0; n < khoi1Color.length; n++){
      khoi1Color[n].innerHTML = "<input type =\"text\">"
    }
  }
  if(a.value == "Remove textbox" ){
    for(n = 0; n < khoi1Color.length; n++){
      khoi1Color[n].innerHTML = '';
      }
  }
  else{
    document.getElementById('divImg').innerHTML = a.value; 
  }
}
// su kien 3
var button2text = document.getElementById('bt2');
button2text.onclick = function(){
var textof1 = document.getElementById('text1').value;
var textof2 = document.getElementById('text2').value;
if(!textof1 || !textof2){
  var khoi1Color = document.getElementsByClassName('khoi1');
  if (textof2 == false){
    for(n = 0 ;n < khoi1Color.length;n++){
      khoi1Color[n].style.background = textof1
    }
  }
  if(textof1 == false){
    for(n = 0 ;n < khoi1Color.length;n++){
      khoi1Color[n].style.background = textof2
    }
  }
}
else{
  document.getElementById('thongBao').innerHTML = (textof1 +' '+textof2);
}
}
// su kien 4
var submitgo2 = document.getElementById('go2');
submitgo2.onclick = function(){
  var checkEnglish = document.getElementById('english');
  if(checkEnglish.checked){
    document.getElementById('nhapHoc').innerHTML = (checkEnglish.value);
  }
  var checkedJapan = document.getElementById('japanese')
  if(checkedJapan.checked){
    document.getElementById('nhapHoc').innerHTML = (checkedJapan.value)
  }
  if(checkEnglish.checked && checkedJapan.checked){
    document.getElementById('nhapHoc').innerHTML = (checkEnglish.value+', '+checkedJapan.value)
  }
  if(checkEnglish.checked == false && checkedJapan.checked == false){
    document.getElementById('nhapHoc').innerHTML = ('Ban chua chon khoa hoc');
  }
}
// su kien 5
var buttonReset = document.getElementById('reset');
buttonReset.onclick = function(){
  var checkEnglish = document.getElementById('english');
  var checkedJapan = document.getElementById('japanese');
  checkEnglish.checked = false;
  checkedJapan.checked = false;
  document.getElementById('nhapHoc').innerHTML = 'reset';
}
// su kien 6 
var doimau = document.getElementById('div9');
var buttonStt = document.getElementById('btStt');
buttonStt.onclick = function(){
  var onChangeStt = document.getElementById('stt').value;
  switch(onChangeStt){
    case ('-----'):
      doimau.style.background = "orange";
    break;
    case('one'):
    doimau.style.background = "black";
    break;
  }
  console.log(onChangeStt);
}
//  su kien 7
var changeStt = document.getElementById('stt');
changeStt.onchange = function(e){
  alert( "Bạn đã thay đổi giá trị của combo box"+' '+e.target.value)
}
//su kien 8

//su kien 9
var buttonBr = document.getElementById('btBrower');
buttonBr.onclick = function(){
  var changeBr = document.getElementById('browers').value;
  if(changeBr == "chrome"){
    alert("Đúng trình duyệt - " +'['+ h +'/'+ p+'/'+s+']')
  }
  else{
    alert("Không đúng trình duyệt - " +'['+ d1 +'/'+ m+'/'+y+']')

  }
}
var d = new Date();
var y = d.getFullYear();
var m = d.getMonth() + 1;
var d1 = d.getDate();
var h = d.getHours();
var p = d.getMinutes();
var s = d.getSeconds();
//su kien 10
