AOS.init({
    once: true,
    duration: 800,
});
/*-----------------*/
/*---------*/
let header = $('header'),
		menu = header.find('nav>ul>li'),
		headerHeight = header.outerHeight(),
		newHeight = 0,
		subMenu = menu.find('ul');

		subMenu.each(function(){
			if($(this).outerHeight()>newHeight){
				newHeight = headerHeight + $(this).outerHeight();
			}
		});
    menu.mouseover(function(){
			header.addClass('active');
		})
		.mouseout(function(){
			header.removeClass('active');
		});

		menu.mouseover(function(){
			header.stop().animate({height:newHeight});
		})
		.mouseout(function(){
			header.stop().animate({height:headerHeight});
		});
/*-------------------------------*/
const resultNum = $('.counter_target');

resultNum.each(function(){
    const targetNum = $(this).attr('data-target');
    let number = 0;
    let $this = $(this);
    let numTimer = setInterval(function(){
        number++;
        $this.text(number);
        if(number == targetNum){
            clearInterval(numTimer)
        }
    },100);
});

          
/*-------------------------------*/
const main_swiper = new Swiper('.slide_container ', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 18000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  }
});
/*-------------------------------*/
const pj_swiper = new Swiper('.pj_wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
  }
  // If we need pagination
});
/*---------------------------------*/
const swiper = new Swiper('.middle_slide', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
$('.video_list .controls span.next').click(function(){
  controlSwiper.slideNext();
});
$('.video_list .controls span.prev').click(function(){
  controlSwiper.slidePrev();
});
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
let topHeader =$('header');
    let headerOst = topHeader.offset().top;

    $(window).scroll(function(){
        let stc = $(this).scrollTop();
        
        if(stc > headerOst){
          topHeader.addClass('sticky');
        }else{
          topHeader.removeClass('sticky');
        };
});
