var $carousel=(function(){
  var $html = $(''
    + '<div class="slider" id="slider">'
      + '<div class="slide"><img src="img/b5.png" alt=""></div>'
      + '<div class="slide"><img src="img/b1.png" alt=""></div>'
      + '<div class="slide"><img src="img/b2.png" alt=""></div>'
      + '<div class="slide"><img src="img/b3.png" alt=""></div>'
      + '<div class="slide"><img src="img/b4.png" alt=""></div>'
      + '<div class="slide"><img src="img/b5.png" alt=""></div>'
      + '<div class="slide"><img src="img/b1.png" alt=""></div>'
    + '</div>'
    + '<span id="left"><</span>'
    + '<span id="right">></span>'
    + '<ul class="nav" id="navs">'
      + '<li class="active">1</li>'
      + '<li>2</li>'
      + '<li>3</li>'
      + '<li>4</li>'
      + '<li>5</li>'
    + '</ul>');

  function show(){
    var num = 1, 
        $box = $('#box'),
        $slider = $('#slider'),
        $left = $('#left'),
        $right = $('#right'),
        $navs = $('#navs').children();
    $box.append($html);

    
  }
  return {show: show}
})()
