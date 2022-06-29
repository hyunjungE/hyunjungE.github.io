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
    
var  mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    center: new kakao.maps.LatLng(37.5706922, 126.9815134), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다

var  map = new kakao.maps.Map(mapContainer, mapOption); 
var  iwContent = '<div style="padding:5px;"><h2>그랑서울</h2></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.5706922, 126.9815134), //인포윈도우 표시 위치입니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var  infowindow = new kakao.maps.InfoWindow({
    map: map, // 인포윈도우가 표시될 지도
    position : iwPosition, 
    content : iwContent,
    removable : iwRemoveable
});
function setZoomable(zoomable) {
    // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
    map.setZoomable(zoomable);    
}
setZoomable(false); 
});