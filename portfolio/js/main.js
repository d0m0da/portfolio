$(document).ready(function(){
    
	// ----------------------------------------------------
    // 1. 내부 수평 Swiper 초기화 (portfolio_h)
    // ----------------------------------------------------
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

    // ----------------------------------------------------
    // 2. 외부 수직 Swiper 초기화 (portfolio_v)
    // ----------------------------------------------------
    var swiper_v = new Swiper(".portfolio_v", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: false,
        keyboard: true,
        ally: true,
        
    });

	function update_gnb_state(v_idx, h_idx){
		const $gnb = $('.gnb_menu');
	
		// 기본 상태 초기화
		$('.gnb_menu .gnb-item').removeClass('active');
		$gnb.removeClass('pos_profile pos_project01 pos_project02 pos_end');
	
		// *** 0번 슬라이드에서는 GNB를 무조건 숨김 ***
		if (v_idx === 0) {
			$gnb.removeClass('show'); // 숨김
			return;
		}
	
		// *** 1번 이후 슬라이드에서는 항상 노출 ***
		$gnb.addClass('show');
	
	
		// -----------------------------------
		// 아래는 기존 active/class 로직 유지
		// -----------------------------------
	
		if (v_idx === 1) {
			$('.gnb_menu .profile').addClass('active');
			$gnb.addClass('pos_profile');
		}
	
		if (v_idx === 2) {
			if (h_idx === 0) {
				$('.gnb_menu .project01').addClass('active');
				$gnb.addClass('pos_project01');
			}
			if (h_idx === 1) {
				$('.gnb_menu .project02').addClass('active');
				$gnb.addClass('pos_project02');
			}
		}
	
		if (v_idx === 3) {
			$('.gnb_menu .end').addClass('active');
			$gnb.addClass('pos_end');
		}
	}

	$('.gnb_menu .home').on('click', function(){
		swiper_v.slideTo(0);
	});
	
	$('.gnb_menu .profile').on('click', function(){
		swiper_v.slideTo(1);
	});
	
	$('.gnb_menu .project01').on('click', function(){
		swiper_v.slideTo(2);
		swiper_h.slideTo(0);
	});
	
	$('.gnb_menu .project02').on('click', function(){
		swiper_v.slideTo(2);
		swiper_h.slideTo(1);
	});
	
	$('.gnb_menu .end').on('click', function(){
		swiper_v.slideTo(3);
	});

	swiper_v.on('slideChange', function(){
		update_gnb_state(this.realIndex, swiper_h.realIndex);
	});
	
	swiper_h.on('slideChange', function(){
		if(swiper_v.realIndex === 2){
			update_gnb_state(2, this.realIndex);
		}
	});
	

	// 마우스 커서
	const cursorSpin = document.querySelector('.cursor_spin');
	const targets = document.querySelectorAll('.cursor_target');

	// 마우스 따라다니기
	document.addEventListener('mousemove', (e) => {
		cursorSpin.style.top = `${e.clientY}px`;
		cursorSpin.style.left = `${e.clientX}px`;
	});

	// 여러 a 태그에도 적용 가능
	targets.forEach(target => {
		target.addEventListener('mouseenter', () => {
			cursorSpin.style.opacity = 1;
		});

		target.addEventListener('mouseleave', () => {
			cursorSpin.style.opacity = 0;
		});
	});

	

})// 맨끝


