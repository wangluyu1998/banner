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
  
    function slide(){
        var $box = $('#box');
            $box.append($html);
            $slider = $('#slider'),
            $left = $('#left'),
            $right = $('#right'),
            $navs = $('#navs').children();
        var index = 1,
            isdone = 0,
            timer = setInterval(next,2000);

        //向前
        function prev(){
            if(isdone != 0){}
            isloading = 1;
            index--;
            navChange();
            animate(slider, {left:-1200*index},function(){
            if(index == 0){
                slider.style.left = '-6000px';
                index = 5;
            }
            isdone = 0;
            });
        }
        //向后
        function next(){
            if(isdone != 0){}
            isdone = 1;
            index++;
            navChange();
            animate(slider, {left: -1200*index}, function(){
            if(index == 6){
                slider.style.left = '-1200px';
                index = 1;
            }
            isdone = 0;
            });
        }
        //鼠标划上，停止轮播，左右箭头淡入
        $box.mouseover(function(){
            left.style.opacity = 0.5;
            right.style.opacity = 0.5;
            clearInterval(timer);
        })
        //鼠标划出，继续轮播，左右箭头淡出
        $box.mouseout(function(){
            left.style.opacity = 0;
            right.style.opacity = 0;
            timer = setInterval(next,2000);
        })
        //点击左右箭头，向前或向后滑动一张
        $left.click(function(){
            prev();
        })
        $right.click(function(){
            next();
        })
        //点击圆点，切换图片
        for(var i = 0; i < $navs.length; i++){
            (function(i){
            $navs[i].onclick = function(){
                index = i+1;
                navChange();
                animate(slider,{left:-1200*index});
            }
            })(i);
        }
        //圆点的样式变化
        function navChange(){
            for(var i=0;i<$navs.length;i++){
                $navs[i].className="";
            }
            if(index==6){
                $navs[0].className="active";
            }
            else if(index==0){
                $navs[4].className="active";
            }
            else{
                $navs[index-1].className="active";
            }
        }
    
        function getStyle(obj, attr){
            if(obj.currentStyle){
            return obj.currentStyle[attr];
            } else {
            return getComputedStyle(obj, null)[attr];
            }
        }
    
        function animate(obj,json,callback){
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
            var isStop=true;
            for(var attr in json){
                var now=0;
                if(attr == 'opacity'){
                now=parseInt(getStyle(obj, attr) * 100);
                }else{
                now=parseInt(getStyle(obj, attr));
                }
                var speed=(json[attr]-now)/8;
                speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                var cur = now + speed;
                if(attr == 'opacity'){
                obj.style[attr]=cur/100;
                }else{
                obj.style[attr]=cur+'px';
                }
                if(json[attr]!==cur){
                isStop = false;
                }
            }
            if(isStop){
                clearInterval(obj.timer);
                callback&&callback();
            }
            }, 30)
        }
    }
    return {slide : slide}
})()
