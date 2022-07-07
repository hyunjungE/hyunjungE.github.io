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
document.addEventListener('DOMContentLoaded', function() {
    
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.570769290372255,126.98181158018586), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.570769290372255,126.98181158018586); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
});