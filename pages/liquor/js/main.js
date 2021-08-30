$(document).ready(function(){
    $(".sidebar ul.list-categr li.categr-item").click(function(){
        $(this).children("span.link-show").children("i").toggleClass("fa-minus").toggleClass("fa-plus");
    });

    $(".category h2.h2-cate").click(function(){
        $(this).children("span.link-show").children("i").toggleClass("fa-minus").toggleClass("fa-plus");
        


        $("ul.list-categr").stop().slideToggle(500);
    });


    $("li.categr-item").click(function(){
        $(this).children("ul.sub-list-cate").stop().slideToggle(500).css("display", "block");
    });



    $(".brands h2.h2-brand").click(function(){
        $(this).children("span.link-show").children("i").toggleClass("fa-minus").toggleClass("fa-plus");
        


        $("ul.list-brand").stop().slideToggle(500);
    });


    $("ul.list-product li.product-grid img").addClass("img-fluid");


    $("li.product-grid").hover(function(){
        $(this).children(".product-action").stop().slideToggle(400).css("display", "flex");
    });

    $(window).scroll(function(){
        if($(this).scrollTop() >= 120)
        {
            $("span.back-top").show(500).css("display", "block");

            $("#header-bot").css(
                {
                    "position" : "fixed",
                    "top" : "0px",
                    "background" : "#fff"
                }
            );
        }

        else{
            $("span.back-top").hide(500);

            $("#header-bot").css(
                {
                    "position" : "unset",
                }
            );
        }


        $("span.back-top").click(function(){
            $("html, body").stop().animate({ scrollTop: 0 }, 800);
        });
    });


    $("a.link-product-img").children("img").addClass("img-fluid");
    
    $("span.list-icon").click(function(){
        $("li.product-grid").removeClass("col-md-4 product-grid").addClass("col-md-12 product-list");
        $(this).children("i").addClass("active-view");
        $("span.grid-icon").children("i").removeClass("active-view");
    });

    $("span.grid-icon").click(function(){
        $("li.product-list").removeClass("col-md-12 product-list").addClass("col-md-4  product-grid");
        $(this).children("i").addClass("active-view");
        $("span.list-icon").children("i").removeClass("active-view");
    });


    $("#search").click(function(){
        $("#header-bot").css("visibility", "hidden");
        $("#search-box").show(400).css("display", "block");

        $("#input-search").css(
            {   
                "transform" : "scaleY(1)"              
            }
        );   
    });

    $("span.close-search").click(function(){
        $("#header-bot").css("visibility", "visible");
        $("#search-box").hide(500);
        $("#input-search").css(
            {
                "transform" : "scaleY(0)"              
            }
        );   
    });
});