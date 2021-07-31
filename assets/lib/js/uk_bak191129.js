
var respon_size = 767;
var $html = $('html');
var $body = $('body');
var $htmlbody = $('html, body');
var $wrap= $('.wrap');

var $ukHeader = $('.uk_header');
var $ukFooter = $('.uk_footer');
var $ukContainer = $('.uk_container');

var hd_progress = 'hd_progress';

var mainHeightArr = [];
var $main_content = $('.main_content');
var $main_intro = $main_content.find('.main_intro');
var $main_info = $main_content.find('.main_info');
var mainInfoStep1 = $main_info.find('.step1');
var mainInfoStep2 = $main_info.find('.step2');
var mainInfoStep3 = $main_info.find('.step3');
var mainInfoStep4 = $main_info.find('.step4');
var mainInfoStep5 = $main_info.find('.step5');


//$(document).ready(function(){
//$(window).load(function(){
$(function(){

	//header progress bar 생성
	$ukHeader.addClass(device_check);
	$ukHeader.append('<span class="'+hd_progress+'">스크롤 진행상태</span>');

	//네비
	nav_area();


	//resize
	$(window).resize(function(){
		var win_w = $(window).width();
		var win_h = $(window).height();
		var document_h = $(document).height();


		//반응형 pc
		if( win_w > respon_size ){
			$html.addClass('pc').removeClass('mb');
		}
		//반응형 mobile
		else if( win_w <= respon_size ){
			$html.addClass('mb').removeClass('pc');
		}
		var state_pc = $html.is('.pc');
		var state_mb = $html.is('.mb');


		//main intro height
		if( device_check === 'device' ) $main_intro.css('height',win_h);


		//scroll -------------------------------------------------------------------------------//
		$(window).scroll(function(){
			var sct = $(window).scrollTop();

			//uk_header ---------------------------//
			//uk_header fixed css
			if( sct > 10 ) $ukHeader.addClass('fixed');
			else $ukHeader.removeClass('fixed');

			//uk_header progress
			var docHeight = document_h - window.innerHeight;
			var hd_proW = (sct/docHeight)*100;  //Math.ceil();
			$('.'+hd_progress).css('width',hd_proW+'%');

			//main info scroll ---------------------------//
			var info_top = $main_intro.height() - $ukHeader.height();
			if( sct >= info_top ) $main_info.addClass('info_scroll');
			//keyboard 페럴렉스
			var f_sct = sct - info_top;
			if( state_pc ){
				mainInfoStep1.css('transform','translateY('+ (f_sct*-0.8) +'px)');
				mainInfoStep2.css('transform','translateY('+ (f_sct*-0.6) +'px)');
				mainInfoStep3.css('transform','translateY('+ (f_sct*-0.4) +'px)');
				mainInfoStep4.css('transform','translateY('+ (f_sct*-0.2) +'px)');
				mainInfoStep5.css('transform','translateY('+ (f_sct*-0.1) +'px)');
			}
			else if( state_mb ){
				mainInfoStep1.css('transform','translateY('+ (f_sct*-0.4) +'px)');
				mainInfoStep2.css('transform','translateY('+ (f_sct*-0.3) +'px)');
				mainInfoStep3.css('transform','translateY('+ (f_sct*-0.2) +'px)');
				mainInfoStep4.css('transform','translateY('+ (f_sct*-0.1) +'px)');
				mainInfoStep5.css('transform','translateY('+ (f_sct*-0.05) +'px)');
			}
		});
		//end scroll --------------------------------------------------------------------------//
	});


	//main_next
	$(document).on('click', '.next_content', function(){
		var topSize = $main_intro.height() - $ukHeader.height();
		$htmlbody.stop().animate({'scrollTop':topSize}, 900, 'easeInOutExpo');
		return false;
	});

	$(window).trigger('resize');
	$(window).trigger('scroll');
});




//nav_area()
function nav_area(){
	var el_navArea = $('.nav_area');
	el_navArea.find('button').click(function(){
		if( !$(this).is('.active') ){
			$(this).addClass('active').removeClass('after');
		}else if( $(this).is('.active') ){
			$(this).removeClass('active').addClass('after');
		}
		return false;
	});
}


function common(){

}
function main_action(){
}














