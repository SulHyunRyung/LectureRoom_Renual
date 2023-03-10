$(function(){
    $('.NH_bar li').click(function(){
        $(this).addClass('bar_on');
        $('.NH_bar li').not(this).removeClass('bar_on');
    });
});
