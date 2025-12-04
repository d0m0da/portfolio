$(document).ready(function(){
    
    var swiper_v = new Swiper(".portfolio_v", {
        direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
    });

    var swiper_h = new Swiper(".portfolio_h", {
        direction: "horizontal",
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		allowTouchMove: false,
		keyboard: true,
		ally: true,
		nested: true,
    });
    

})// 맨끝