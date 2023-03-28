$(function(){
    let Data_main = document.querySelector('.data_list li');
    $(".lesson_data").click(function(){
        $(this).siblings(".data_list li").removeClass("data_on");
        $(this).addClass("data_on");
        $(this).parent(".data_list").siblings(".data_icon").hide();
        $(this).parent(".data_list").siblings(".lesson_box").css({"display":"inline-block"});
    });
    $(".ex_data").click(function(){
        $(this).siblings(".data_list li").removeClass("data_on");
        $(this).addClass("data_on");
        $(this).parent(".data_list").siblings(".data_icon").hide();
        $(this).parent(".data_list").siblings(".Ex_box").css({"display":"inline-block"});
    });
    $(".supply").click(function(){
        $(this).siblings(".data_list li").removeClass("data_on");
        $(this).addClass("data_on");
        $(this).parent(".data_list").siblings(".data_icon").hide();
        $(this).parent(".data_list").siblings(".supply_box").css({"display":"inline-block"});
    });
});