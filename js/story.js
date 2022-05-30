for(i=1; i<8; i++){
    let videoBtn = $('.swiper-slide img');
    let targetVideo = $('#video'+i)
    let orgUrl = $('iframe').attr('src');

    videoBtn.click(function(e){
        e.preventDefault();
        targetVideo.addClass('active');   
        
        let newUrl = orgUrl.concat('?autoplay=1');

        targetVideo.$('iframe').attr('src', newUrl);

    });
    targetVideo.click(function(){
        targetVideo.removeClass('active');
        targetVideo.$('iframe').attr('src', orgUrl);

    });

};
