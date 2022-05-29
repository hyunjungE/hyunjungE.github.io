let videoBtn = $('.swiper-wrapper img');
let targetVideo = $('#video1');
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
