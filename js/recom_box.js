$(function(){
    $('.NH_bar li').click(function(){
        $(this).addClass('bar_on');
        $('.NH_bar li').not(this).removeClass('bar_on');
    });
});
    const slider_box = document.querySelector('.img_box');
    const prev_btn = document.querySelector('.left');
    const next_btn = document.querySelector('.right');
    const slider_width = slider_box.clientWidth;
    const slide_count = slider_box.querySelector('li').length;
    let slide_index = 0;

    prev_btn.addEventListener('click', () => {
        slide_index--;
        if (slide_index < 0) {
            slide_index = slide_count - 1;
            slider_box.style.marginLeft = -slide_index * slider_width + 'px';
        } else {
            slider_box.style.marginLeft = -slide_index * slider_width + 'px';
        }
    });

    next_btn.addEventListener('click', () => {
        slide_index++;
        if (slide_index > slide_count - 1) {
          slide_index = 0;
          slider_box.style.marginLeft = -slide_index * slider_width + 'px';
        } else {
          slider_box.style.marginLeft = -slide_index * slider_width + 'px';
        }
    });
