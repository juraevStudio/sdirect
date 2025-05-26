$(".header__burgir").click(function() {
    $(".header__navbar").toggleClass("open");
    $(this).toggleClass("active");
});

$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__border .iphone").css({
        "transform" : "translate(0px, " + st/20 + "px"
    });
    $(".solution__left .img").css({
        "transform" : "translate(0px, -" + st/25 + "px"
    });
    $(".mobile__img .img1").css({
        "transform" : "translate(-50%, -" + st/25 + "px"
    });
    $(".mobile__img .img2").css({
        "transform" : "translate(0, -" + st/25 + "px"
    });
    $(".mobile__img .img3").css({
        "transform" : "translate(0, -" + st/15 + "px"
    });
});