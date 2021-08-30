$(document).ready(function(){
    $(".bigthumb").hover(function(){
        $(this).children("a").children("img").toggleClass("img-hover").css({"transition": "0.5s"});
    });


    $("ul.list-product li.product img").addClass("img-fluid");


    $("a.link-tabs").click(function(){
        if($("ul.list-product").attr("id") == $("a.link-tabs").attr("id")){
            alert("ok");
        }
    });

    $("li.brand-item img").addClass("m-auto d-block");


    $("li.feature-brand-item").hover(function(){
        $(this).children(".show-detail").stop().slideToggle(700).css("opacity", "0.9");
    });

    $("li.feature-brand-item img").addClass("img-fluid");


    $("li.product").hover(function(){
        $(this).children(".product-action").stop().slideToggle(400);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >= 120)
        {
            $("span.back-top").show(500).css("display", "block");

            $("#header").css(
                {
                    "position" : "fixed",
                    "top" : "0px",
                    "z-index" : "999",
                    "width": "100%"
                }
            );
        }

        else{
            $("span.back-top").hide(500);

            $("#header").css(
                {
                    "position" : "unset",
                }
            );
        }


        $("span.back-top").click(function(){
            $("html, body").stop().animate({ scrollTop: 0 }, 800);
        });
    });



    $("li#home-mobile").click(function(){
        $(this).children("span.show-menu-mobile").children("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");

        $("#sub-menu-home-mobile").stop().slideToggle(700);
    });

    $("label#menu-icon").click(function(){
        $(this).children("i").toggleClass("fa-align-right").toggleClass("fa-times");
    });



    $("#content #list-product-small h2#new-arrivals").click(function(){
        $(this).toggleClass("h2-active");
    });
});