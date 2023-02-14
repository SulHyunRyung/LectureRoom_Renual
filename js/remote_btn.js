$(function(){
    $('.remote_btn li').click(function(){
        $(this).addClass('remote_btn_on');
        $(this).removeClass('remote_btn_off');
        $('.remote_btn li').not(this).addClass('remote_btn_off');
        $('.remote_btn li').not(this).removeClass('remote_btn_on');
    });
});