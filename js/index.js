$('#fullpage').fullpage({
    //options here
    navigation: true,
    navigationPosition: 'right',
    autoScrolling:true,
    scrollHorizontally: true,
    slidesNavigation: true,
    slidesNavPosition: 'top',
    keyboardScrolling: true,
    afterLoad: function(origin, destination, direction, trigger){
      var origin = this;
  
      if(destination.index == 1){
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
        });;
      }
  
      if(destination.index != 0){
        $('.main_header_top').addClass('sticky');
      }else{
        $('.main_header_top').removeClass('sticky');
      };
  
    }
  });

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
    slidesPerView: 1, 
    direction: 'horizontal',
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
    },

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


  
  