$(function(){
    let slide_index = 1;
    $('.NH_bar li').click(function(){
        $(this).addClass('bar_on');
        $('.NH_bar li').not(this).removeClass('bar_on');
        slide_index = 1;
        $('.img_box').css({'left':'0'});
    });
    $('.hot_bar').click(function(){
        $('.hot_box').show();
        $('.new_box').hide();
    });
    $('.new_bar').click(function(){
        $('.new_box').show();
        $('.hot_box').hide();
    });


    $('.left_btn').on('click', function(){
        slide_index--;
        if ( slide_index < 1 ) {
            slide_index = 3;
        }
        if ( slide_index == 1 ) {
            $('.img_box').css({'left':'0'});
        }
        if ( slide_index == 2 ) {
            $('.img_box').css({'left':'-100%'});
        }
        if ( slide_index == 3 ) {
            $('.img_box').css({'left':'-200%'});
        }
    });
    $('.right_btn').on('click', function(){
        slide_index++;
        if ( slide_index > 3 ) {
            slide_index = 1;
        }
        if ( slide_index == 1 ) {
            $('.img_box').css({'left':'0'});
        }
        if ( slide_index == 2 ) {
            $('.img_box').css({'left':'-100%'});
        }
        if ( slide_index == 3 ) {
            $('.img_box').css({'left':'-200%'});
        }
    });
});
