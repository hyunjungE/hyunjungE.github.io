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
            header.stop().animate({height:newHeight});
        });
        $('header nav').mouseout(function(){
            header.removeClass('active');
            header.stop().animate({height:headerHeight});
        });


/*-------------------------------*/

AOS.init({
  once: true,
  duration: 800,
});
// let topHeader =$('.main_header_top');
//     let headerOst = topHeader.offset().top;

//     $(window).scroll(function(){
//         let stc = $(this).scrollTop();
        
//         if(stc > headerOst){
//           topHeader.addClass('sticky');
//         }else{
//           topHeader.removeClass('sticky');
//         };
// });


let asideBtn = $('.aside_button');

asideBtn.click(()=>{
    $('body').toggleClass('active');
}); 
