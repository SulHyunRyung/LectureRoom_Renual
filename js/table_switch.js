$(function(){
    $('.state_1').text('신청중');
    $('.state_2').text('수강중');
    $('.state_3').text('종강');
    $('.state_4').text('복습중');

    let BL_sepa_1 = $('.lec_block_1').detach();
    let BL_sepa_2 = $('.lec_block_2').detach();
    let BL_sepa_3 = $('.lec_block_3').detach();
    let BL_sepa_4 = $('.lec_block_4').detach();
    $(".lec_table").append(BL_sepa_2, BL_sepa_4);

    $('.remote_btn').click(function(){
        if ($(this).is('.remote_1') === true) {
            $(".lec_table").append(BL_sepa_1);
            let BL_sepa_2 = $('.lec_block_2').detach();
            let BL_sepa_3 = $('.lec_block_3').detach();
            let BL_sepa_4 = $('.lec_block_4').detach();
        } else if ($(this).is('.remote_2') === true) {
            $(".lec_table").append(BL_sepa_2, BL_sepa_4);
            let BL_sepa_1 = $('.lec_block_1').detach();
            let BL_sepa_3 = $('.lec_block_3').detach();
        } else if ($(this).is('.remote_3') === true) {        
            $(".lec_table").append(BL_sepa_3);
            let BL_sepa_1 = $('.lec_block_1').detach();
            let BL_sepa_2 = $('.lec_block_2').detach();
            let BL_sepa_4 = $('.lec_block_4').detach();
        }
    });

});