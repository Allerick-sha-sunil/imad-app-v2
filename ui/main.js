console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML="Just Changed :D";

var ele=document.getElementById('image1');
ele.onclick = function(){
  ele.style.marginLeft='100px';  
};
