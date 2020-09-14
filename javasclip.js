function myMove(){
  var elem = document.getElemenByld("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame(){
    if(pos == 350){
      clearInterval(in);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
