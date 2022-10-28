var my_mixitupIE = document.querySelector(".my_mixitup");
var mixer = mixitup(my_mixitupIE, {
    load: {
        filter: '.main_one' ,
    }
})

$(document).ready(function(){
    //number one filtering section start
    $('.sub_btn_one').click(function(){
        $('.sub_content_one').show();
        $('.sub_content_two').hide();
        $('.sub_content_three').hide();
        $('.sub_content_four').hide();
        $('.sub_btn_one .btn').addClass('bg_color');
        $('.sub_btn_two .btn').removeClass('bg_color');
        $('.sub_btn_three .btn').removeClass('bg_color');
        $('.sub_btn_four .btn').removeClass('bg_color');
    })
    $('.sub_btn_two').click(function(){
        $('.sub_content_one').hide();
        $('.sub_content_two').show();
        $('.sub_content_three').hide();
        $('.sub_content_four').hide();
        $('.sub_btn_one .btn').removeClass('bg_color');
        $('.sub_btn_two .btn').addClass('bg_color');
        $('.sub_btn_three .btn').removeClass('bg_color');
        $('.sub_btn_four .btn').removeClass('bg_color');
    })
    $('.sub_btn_three').click(function(){
        $('.sub_content_one').hide();
        $('.sub_content_two').hide();
        $('.sub_content_three').show();
        $('.sub_content_four').hide();
        $('.sub_btn_one .btn').removeClass('bg_color');
        $('.sub_btn_two .btn').removeClass('bg_color');
        $('.sub_btn_three .btn').addClass('bg_color');
        $('.sub_btn_four .btn').removeClass('bg_color');
    })
    $('.sub_btn_four').click(function(){
        $('.sub_content_one').hide();
        $('.sub_content_two').hide();
        $('.sub_content_three').hide();
        $('.sub_content_four').show();
        $('.sub_btn_one .btn').removeClass('bg_color');
        $('.sub_btn_two .btn').removeClass('bg_color');
        $('.sub_btn_three .btn').removeClass('bg_color');
        $('.sub_btn_four .btn').addClass('bg_color');
    })
     //number two filtering section start
    //click button stay bg color
    // $('.mix_btn .common_btn').click(function(){
    //     $('.mix_btn .common_btn').addClass('bg_color');
    // })

})
