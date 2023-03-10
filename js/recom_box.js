$(function(){
    let slide_index = 1;
    $('.NH_bar li').click(function(){
        $(this).addClass('bar_on');
        $('.NH_bar li').not(this).removeClass('bar_on');
        slide_index = 1;
        $('.hot_box').css({'left':'0'});
    });


    $('.left_btn').on('click', function(){
        slide_index--;
        if ( slide_index < 1 ) {
            slide_index = 3;
        }
        if ( slide_index == 1 ) {
            $('.hot_box').css({'left':'0'});
        }
        if ( slide_index == 2 ) {
            $('.hot_box').css({'left':'-300px'});
        }
        if ( slide_index == 3 ) {
            $('.hot_box').css({'left':'-600px'});
        }
    });
    $('.right_btn').on('click', function(){
        slide_index++;
        if ( slide_index > 3 ) {
            slide_index = 1;
        }
        if ( slide_index == 1 ) {
            $('.hot_box').css({'left':'0'});
        }
        if ( slide_index == 2 ) {
            $('.hot_box').css({'left':'-300px'});
        }
        if ( slide_index == 3 ) {
            $('.hot_box').css({'left':'-600px'});
        }
    });
});
