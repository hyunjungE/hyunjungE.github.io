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
/*--------------------------------------*/
let MultiSwiper = new Swiper(".video_list", {
    slidesPerView: 4,
    spaceBetween: 28.6,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /*---------------------------- */


let mapContainer = document.getElementById('.map_api'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
let map = new kakao.maps.Map(mapContainer, mapOption); 

