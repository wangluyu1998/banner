function Carousel(){
    var cfg={
        container:'#box',
        index:1,
        timer:3000,
        imgs:['img/b1.png','img/b2.png','img/b3.png','img/b4.png','img/b5.png']
      },
      $box=$('#box'),
      $slider=$('<div class="slider" id="slider"></div>'),
      $left=$('<span id="left"><</span>'),
      $right=$('<span id="right">></span>'),
      $navs=$('<ul class="nav" id="navs"></ul>'),
      index = 1,
      isloading=false;

      this.init = function(conf){
        $.extend(cfg,conf);
        $box.append($slider);
        $slider.after($left);
        $left.after($right);
        $right.after($navs);
        //init
        var $slide=$('<div class="slide"><img src="'+cfg.imgs[cfg.imgs.length-1]+'" alt=""></div>')
        $slider.append($slide);
        for(var i=0;i<cfg.imgs.length;i++){
            var $slide=$('<div class="slide"><img src="'+cfg.imgs[i]+'" alt=""></div>');
            var $li=$('<li>'+(i+1)+'</li>');
            $slider.append($slide);
            $navs.append($li);
        }
        $navlist=$('#navs').children();
        $slide=$('<div class="slide"><img src="'+cfg.imgs[0]+'" alt=""></div>');
        $slider.append($slide);

        //定时器自动轮播
        timer=setInterval(next,cfg.timer);
        $navs.children().first().addClass('active');
        //向前
        function prev(){
            if(isloading){return;}
            isloading=true;
            index--;
            if(index===0){
                $slider.css("left",cfg.imgs.length*-1200+'px');
                index=cfg.imgs.length;
            }else{
                $slider.stop().animate({left:index*-1200},300);
            }
            isloading=false;
            navChange();
            console.log(index);
        }
        //向后
        function next(){
            if(isloading){return;}
            isloading=true;
            index++;
            if(index===cfg.imgs.length+1){
                $slider.css("left","-1200px");
                index=1;
            }else{
                $slider.stop().animate({left:index*-1200},300);
            }
            isloading=false;
            navChange();
            console.log(index);
        }
        //划入box
        $box.mouseover(function(){
            $left.css("opacity",0.5);
            $right.css("opacity",0.5);
            clearInterval(timer);
        })
        //划出box
        $box.mouseout(function(){
            $left.css("opacity",0);
            $right.css("opacity",0);
            timer=setInterval(next,cfg.timer);
        })
        //点击左右箭头滑动
        $left.click(prev);
        $right.click(next);
        //点击下方圆点跳转
        for(var i=0;i<$navlist.length;i++){
            (function(i){
              $navlist[i].onclick = function(){
                index=i+1;
                $slider.stop().animate({left:index*-1200},300);
                navChange();
              }
            })(i);
        }
        //圆点的变化
        function navChange(){
            // if(index===0){
            //     $navs.children().first().addClass('active');
            //     $navs.children('li').siblings().removeClass('active');
            //     $navs.children('li').eq(index-1).addClass('active');    
            // }
            $navs.children('li').siblings().removeClass('active');
            $navs.children('li').eq(index-1).addClass('active');
        };
    }
}
