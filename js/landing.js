$(document).on("click", 'a[href^=#]', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1500);
    e.preventDefault();
});


//$(document).ready(function () {
//    var $menu = $("#menu");
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 1 && $menu.hasClass("default")) {
//            $menu.removeClass("default").addClass("fixed");
//        } else if ($(this).scrollTop() <= 1 && $menu.hasClass("fixed")) {
//            $menu.removeClass("fixed").addClass("default");
//        }
//    });//scroll
//});