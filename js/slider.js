var SlideSpeed = 1000;
var TimeOut = 5000;
var NeedLinks = true;
 
$(document).ready(function(e) {
    $('.slide').css(
        {"position" : "absolute",
         "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $(".slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(SlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
            }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
            }
        $('.slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
        }
if(NeedLinks){
var $linkArrow = $('<a class="prewbutton" href="#"></a><a class="nextbutton" href="#"></a>')
    .prependTo('.slider');
    $('.nextbutton').click(function(){
        animSlide("next");
 
        })
    $('.prewbutton').click(function(){
        animSlide("prew");
        })
}
    var $adderSpan = '';

    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
            }
    $('.slider_box').hover(
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
});