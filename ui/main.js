console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML="Just Changed :D";

var ele=document.getElementById('image1');
var ml=0;
function function1(){
    ml=ml+5;
    ele.style.marginLeft=ml+'px';
}
ele.onclick=function(){
    var interval=setInterval(function1,50);
};
