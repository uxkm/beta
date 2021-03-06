
var respon_size = 767 - 17;
var md_size = 993 - 17;
var UXKM = 'UXKM';
var $html = $('html');
var $title = $('title');
var $body = $('body');
var $htmlbody = $('html, body');
var $wrap= $('.wrap');
var $ukSkip= $('.uk-skip');

//header
var $ukHeader = $('.uk_header');
var $ukLogo = $ukHeader.find('.uk_logo a');
var $hdNavArea = $ukHeader.find('.hd_nav_area');
var $hdNav= $hdNavArea.find('.nav');
var $search_btn = $hdNavArea.find('.search_btn');
var $search_area = $hdNavArea.find('.search_area');
var $search_submit = $hdNavArea.find('.search_submit');
var $assetsLink_btn = $hdNavArea.find('.assetsLink_btn');
var $assetsLink_area = $hdNavArea.find('.assetsLink_area');
var hd_progress = 'hd_progress';
var hd_assetsLink_on = 'hd_assetsLink_on';
var hd_search_on = 'hd_search_on';

//footer
var $ukFooter = $('.uk_footer');
var $ftDepth1 = $ukFooter.find('.depth1');
var $ftDepth2 = $ukFooter.find('.depth2');

//container
var $ukContainer = $('.uk_container');
var sub_top = 'sub_top';
var top_link = 'top_link';
var common_info = 'common_info';
var top_info = 'top_info';
var sub_content = 'sub_content';
var side_menu_area = 'side_menu_area';
var side_menu = 'side_menu';
var content_area = 'content_area';
var uk_course = 'uk_course';

//class
var main_page = 'main_page';
var sub_page = 'sub_page';
var main_true = $html.is('.'+main_page);
var sub_true = $html.is('.'+sub_page);
var md_state = 'md_state';
var tg_on = 'tg_on';
var assets_page_move = 'assets_page_move';
var sub_black = 'sub_black';
var opacity_on = 'opacity_on';

var uk_link = 'uk_link';
var hash_move = 'hash_move';
var dp4 = 'dp4';
var ready_link = 'ready_link';
var toggle_link = 'toggle_link';
var html5_new = 'html5_new';

var load_scrollTop;
var loadingFirstStart = 1000;
var loadingStartTime = 300;
var loadingEndTime = 300;
var pageTop_scrollSpeed = 700;
var side_offsetTop = [];
var top_link_offsetTop = [];
var top_link_offsetLeft = [];
var pcmb_state = [];
var iscroll_psmb = [];

var loading = $('.loading');
var hide_loading = 'hide_loading';
var hide_fix_loading = 'hide_fix_loading';


$(document).ready(function(){
	//ajax start --------------------------------------------------------------------------------------------------------------//
	var al_depth1, al_depth2, al_depth3;
	var d1_on, d2_on, d3_on, d4_on;
	var d4_true = false;
	$ukSkip.attr('tabindex','-1');


	//loading ---------------------------------------------------------------------------------//
	loading/*.css('height',window.innerHeight)*/.find('.tit').addClass(device_check);
	function loadingEnd(){
		if( loading.is('.uxkm_start') ){
			setTimeout(function(){
				loading.addClass(hide_loading);
				$wrap.addClass(hide_loading);
				$body.removeClass(hide_fix_loading);
				setTimeout(function(){
					loading.removeClass('uxkm_start');
				}, 800);
			}, loadingFirstStart);
		}
		else{
			setTimeout(function(){
				loading.addClass(hide_loading);
				$wrap.addClass(hide_loading);
				$body.removeClass(hide_fix_loading);
			}, 300);
		}
	}
	function loadingStart(){
		loading.removeClass(hide_loading);
		$wrap.removeClass(hide_loading);
	}


	//?????? ???mina sub class ?????? -----------------------------------------------------------//
	mainSubClass();
	function mainSubClass(){
		if( location.href.match(data) ){
			$html.removeClass(main_page).addClass(sub_page);
		}
		else{
			$html.removeClass(sub_page).addClass(main_page);
		}
	}

	//mainSet ajax
	function mainSet( time ){
		loadingStart();														//?????? ??????
		$(window).off('scroll resize');								//scroll, resize ?????????
		setTimeout(function(){
			$title.text(UXKM);											//????????? ??????
			$ukSkip.trigger('focus');									//????????? ?????????
			$ukLogo.removeAttr('data_tit');						//?????? data_tit ??????
			$assetsLink_area.find('li').removeClass('on');	//assets?????? ?????? ?????????
			al_depth1.find('>li').eq(0).addClass('on');			//assets?????? html??? ?????????
			$hdNav.find('a').removeClass('on');					//?????? ?????? ?????? ?????????
			$ftDepth1.children().removeClass('on');			//?????? ?????? depth1 ?????? ?????????
			$ftDepth2.children().removeClass('on');			//?????? ?????? depth2 ?????? ?????????

			$html.removeClass(sub_page).addClass(main_page);
			$ukContainer.children().remove();
			$assetsLink_area.removeClass(assets_page_move);

			$.ajax({
				url:'main.html',
				type:'get',
				dataType:'html',
				async:true,
				error:function(){
					console.log("????????? ???????????? ??????");
					setTimeout(function(){
						loadingEnd();
					}, loadingEndTime);
				},
				success:function(data){
					$ukContainer.html(data);
					uk_editor();
					main_action();
					setTimeout(loadScrollTop, loadingEndTime/3);
					setTimeout(function(){
						loadingEnd();
						$('.main_intro').addClass('start');
					}, loadingEndTime);
					setTimeout(function(){
						$(window).trigger('resize');
						$(window).trigger('scroll');
					}, loadingEndTime*2);
				}
			});
		}, time);
	}

	//subSet ajax
	function subSet( time, target_url ){
		loadingStart();														//?????? ??????
		$(window).off('scroll resize');								//scroll, resize ?????????
		setTimeout(function(){
			onindex( target_url );										//?????? ????????? ?????????
			$ukSkip.trigger('focus');									//????????? ?????????
			$ukLogo.attr('data-tit', menu[d1_on].d1_nm);	//????????? 1?????? ????????? ??????

			var file_url;
			//assets ?????? ????????? ??? || assets ?????? ?????? ??????
			if( d1_on === 0 ){
				if( target_url.split('&').length > 3 ){
					file_url = menu[d1_on].d2[d2_on].d3[d3_on].d4[d4_on].d4_file;
				}
				else{
					file_url = menu[d1_on].d2[d2_on].d3[d3_on].d3_file;
				}

				//part??? ?????? ?????? ??????
				if( target_url.match('part') ){
					var part_idx = target_url.split('part')[1]-1;
					file_url = menu[d1_on].d2[d2_on].d3[d3_on].d4[d4_on].part_div[part_idx].part_file;
				}
			}
			//Project GUIDE, Web Trends ??? ?????? ????????? ??? || Project GUIDE, Web Trends ?????? ?????? ??????
			else {
				file_url = menu[d1_on].d1_file;
				$ftDepth2.children().removeClass('on'); 			//?????? 2?????? on????????? ??????
				al_depth1.find('li').removeClass('on');
				al_depth1.find('>li').eq(0).addClass('on');			//assets?????? html??? ?????????
			}

			$html.removeClass(main_page).addClass(sub_page);
			$ukContainer.children().remove();
			$assetsLink_area.removeClass(assets_page_move);

			$.ajax({
				url:file_url,
				type:'get',
				dataType:'html',
				async:true,
				error:function(){
					$ukContainer.html('???????????? ?????????^^');
					setTimeout(function(){
						loadingEnd();
					}, loadingEndTime);
				},
				success:function(data){
					sub_action(data, target_url, d1_on, d2_on, d3_on, d4_on);
					ukEditor_txtarea();
					//setTimeout(uk_editor, 100);
					setTimeout(function(){
						$(window).on('load', loadingEnd());
						uk_editor();
            //gist_code();
					}, loadingEndTime);
					setTimeout(function(){
						loadScrollTop();
						$(window).trigger('resize');
						$(window).trigger('scroll');
					}, loadingEndTime*2);
				}
			});
		}, time);
	}


	//assets link ??????(assets??? ??????????????? ??????) ------------------------------------------//
	$assetsLink_area.attr('tabindex','0').find('.assetsLink_in').append('<ul class="al_depth1"></ul>');
	al_depth1 = $assetsLink_area.find('.al_depth1');
	var d2 = menu[0].d2;
	if( typeof d2 !== 'undefined' ){
		//al_depth1 ??????
		for( c=0; c<d2.length; c++ ){
			al_depth1.append('<li><a href="'+ d2[c].d2_url +'" class="d1_link link_0'+(c+1)+'"><i>'+ d2[c].d2_nm +'</i></a></li>');
			//al_depth1.find('>li').eq(d2_on).addClass('on');
		}
		al_depth1.find('li').each(function(c, d){
			var d3 = d2[c].d3;
			if( typeof d3 !== 'undefined' ){
				$(d).append('<div class="al_depth2_wrap"><ol class="al_depth2"></ol></div>');
				al_depth2 = $(d).find('.al_depth2');

				//al_depth2 ??????
				for( e=0; e<d3.length; e++ ){
					al_depth2.append('<li class="item"><a href="'+ d3[e].d3_url +'" class="'+uk_link+'">'+ d3[e].d3_nm + '</a></li>');
					//if( c === d2_on && e === d3_on ) al_depth2.find('>li').eq(e).addClass('on');
				}
				al_depth2.find('li').each(function(e, f){
					var d4 = d3[e].d4;
					if( typeof d4 !== 'undefined' ){
						$(f).append('<ol class="al_depth3"></ol>');
						al_depth3 = $(f).find('.al_depth3');

						//al_depth3 ??????
						for( g=0; g<d4.length; g++ ){
							var part_state = d4[g].part;

							/*
							var $e_ol = $(f).find('>ol');
							$e_ol.append('<li class="'+dp4+'"></li>');
							var $e_ol_li = $e_ol.find('>li');

							//part ?????? ??????
							if( !part_state ){
								$e_ol_li.eq(g).append('<a href="'+d4[g].d4_url+'" class="'+uk_link+'">'+d4[g].d4_nm+'</a>');
							}
							//part ??? ??????
							else if( part_state ){
								$e_ol_li.eq(g).addClass('part');
								var part_div = d4[g].part_div;
								for( p=0; p<part_div.length; p++ ){
									$e_ol_li.eq(g).append('<p><a href="'+part_div[p].part_url+'" class="'+uk_link+'">'+part_div[p].part_nm+'</a></p>');
								}
							}
							*/

							//?????? ?????? / element ????????? ?????? ?????? ?????? / html5 ??????
							element_color_div(part_state, d4[g].d4_nm, $(f), g, d4);
						}
					}
				});
			}
		});
	}

	//assets link masonry ??????
	al_depth1.find('> li').each(function(i, e){
		$(e).find('.al_depth2').masonry({
			itemSelector: '.item',
			percentPosition: true
		});
	});


	//?????? nav / ?????? nav ?????? --------------------------------------------------------------//
	for( i=0; i<menu.length; i++ ){
		 if( menu[i].d1_url === '#' ){
			 $hdNav.append('<a href="'+menu[i].d1_url+'" class="'+ready_link+'"><i>'+menu[i].d1_nm+'</i></a>');
			 $ftDepth1.append('<a href="'+menu[i].d1_url+'" class="'+ready_link+'"><i>'+menu[i].d1_nm+'</i></a>');
		 }
		 else{
			 $hdNav.append('<a href="'+menu[i].d1_url+'" class="'+uk_link+'"><i>'+menu[i].d1_nm+'</i></a>');
			 $ftDepth1.append('<a href="'+menu[i].d1_url+'" class="'+uk_link+'"><i>'+menu[i].d1_nm+'</i></a>');
		 }

	}
	var ft_depth2 = menu[0].d2;
	for( i=0; i<ft_depth2.length; i++ ){
		if( ft_depth2[i].d2_url === '#' ){
			$ftDepth2.append('<a href="'+ft_depth2[i].d2_url+'" class="'+ready_link+'"><i>'+ft_depth2[i].d2_nm+'</i></a>');
		}
		else{
			$ftDepth2.append('<a href="'+ft_depth2[i].d2_url+'" class="'+uk_link+'"><i>'+ft_depth2[i].d2_nm+'</i></a>');
		}
	}


	//?????? ??? ????????? ajax ?????? ---------------------------------------------------------------//
	//main ??????
	if( $html.is('.'+main_page) ){
		mainSet( 0 );
	}
	//sub ??????
	else{
		var t_url = basic_url.split('?')[1];
		subSet( 0, t_url );
	}


	//uk_link ?????? ----------------------------------------------------------------------------//
	$(document).on('click', '.'+uk_link, function(){
		var this_local_url = location.href.split('?')[1];
		var this_link_url = $(this).attr('href');
		var this_link_split = this_link_url.split('?')[1];

		var this_local = this_local_url;
		var this_local_split;
		if( location.href.match(data) ){
			this_local_split = this_local_url.split('&');
			if( this_local_split.length > 3 ){
				this_local = '';
				for( i=0; i<this_local_split.length-1; i++ ){
					if( i === 0 ) this_local += this_local_split[i];
					else this_local += '&'+this_local_split[i];
				}
			}
		}

		//?????? ??? ?????? ????????? ??? ??????
		if( this_local_url === this_link_split ){
			$htmlbody.stop().animate({'scrollTop':0}, pageTop_scrollSpeed, 'easeInOutCubic');
		}

		//?????? ??? ????????? ??????
		else{
			load_scrollTop = 0;
			sessionStorage.setItem('scrollTop', load_scrollTop);
			$assetsLink_area.addClass(assets_page_move);

			//?????? ??????
			if( this_link_url === '/' ){
				mainSet(loadingStartTime);
				setTimeout(function(){
					$htmlbody.stop().animate({'scrollTop':0},0);
				}, loadingStartTime);
			}
			//?????? ??????
			else {
				var before;
				if( location.href.match(data) ) before = this_local_url.split('&')[2];
				else before = '/';
				var after = this_link_url.split('&')[ this_link_url.split('&').length-1 ];

				//?????? ?????? ?????????
				if( before === after ){
					$htmlbody.stop().animate({'scrollTop':0}, pageTop_scrollSpeed, 'easeInOutCubic');
					$(this).siblings().find('li').removeClass('on');
				}
				//?????? ??????
				else{
					subSet( loadingStartTime, this_link_url );
					setTimeout(function(){
						$htmlbody.stop().animate({'scrollTop':0},0);
					}, loadingStartTime);
				}
			}

			//hd_progress ?????????
			setTimeout(function(){
				$('.'+hd_progress).removeAttr('style');
			}, loadingStartTime);

			history.pushState(this_link_url, null, this_link_url);
		}


		//assets link ??????
		setTimeout(function(){
			if( $html.is('.'+hd_assetsLink_on) ) $assetsLink_btn.trigger('click');
		}, 0); //loadingStartTime
		return false;
	});


	//??????????????? toggle_link ?????? ----------------------------------------------------------//
	$(document).on('click', '.'+toggle_link, function(){
		$(this).parent().toggleClass(tg_on).siblings().removeClass(tg_on);
		$(this).next().slideToggle(200).parent().siblings()/*.not('.on')*/.find('ol').slideUp(200);
		return false;
	});


	//????????? ????????? ?????? ---------------------------------------------------------------------//
	$(document).on('click', '.'+ready_link, function(){
		var txt = $(this).text();
		if( txt === 'js' ) txt = 'JAVASCRIPT';
		alert(txt+' ????????? ?????? ????????????.');
		//console.log('????????? ?????????^^');
		return false;
	});


	//on index & browser tit --------------------------------------------------------------//
	if( sub_true ) onindex( basic_url );
	function onindex( edit_url ){
		if( edit_url.match('#') ) edit_url = edit_url.split('#')[0];
		var this_link_split = edit_url.split('=')[1].split('&');
		if( this_link_split.length === 4 ) d4_true = true;

		for( i=0; i<menu.length; i++ ){
			if( menu[i].d1_nm.match( this_link_split[0] ) ) d1_on = i;
		}
		if( d1_on === 0 ){
			//depth2 on index
			var menuFileArrD2 = menu[d1_on].d2;
			if( typeof menuFileArrD2 !== 'undefined' ){
				for( i=0; i<menuFileArrD2.length; i++ ){
					if( menuFileArrD2[i].d2_nm.match( this_link_split[1] ) ) d2_on = i;
				}
			}
			//depth3 on index
			var menuFileArrD3 = menuFileArrD2[d2_on].d3;
			if( typeof menuFileArrD3 !== 'undefined' ){
				for( i=0; i<menuFileArrD3.length; i++ ){
					if( menuFileArrD3[i].d3_url.match( this_link_split[2] ) ) d3_on = i;
				}
			}
			//depth4 on index
			if( d4_true ){
				var menuFileArrD4 = menuFileArrD3[d3_on].d4;
				if( typeof menuFileArrD4 !== 'undefined' ){
					for( i=0; i<menuFileArrD4.length; i++ ){
						var before_split = menuFileArrD4[i].d4_url.split('&');
						var before = before_split[before_split.length-1];
						if(before.match('_part') ) before = before.split('_part')[0];
						var this_ls = this_link_split[3];
						if(this_ls.match('_part') ) this_ls = this_ls.split('_part')[0];
						//if( menuFileArrD4[i].d4_url.match( this_link_split[3] ) ) d4_on = i;
						if( before === this_ls ) d4_on = i;
					}
				}
			}

			//assets ?????? ?????????
			al_depth1.find('li').removeClass('on');
			var al_dp1_on = al_depth1.find('>li').eq(d2_on);
			al_dp1_on.addClass('on');

			var al_dp2_on = al_dp1_on.find('.al_depth2>li').eq(d3_on);
			al_dp2_on.addClass('on');

			//console.log(d4_true, this_link_split.length);
			if( d4_true && this_link_split.length > 3 ){
				var al_dp3_on = al_dp2_on.find('.al_depth3>li').eq(d4_on);
				al_dp3_on.addClass('on');

				if( al_dp3_on.is('.part') ){
					var part_idx = location.href.split('_part')[1]-1;
					al_dp3_on.find('p').removeClass('on').eq(part_idx).addClass('on');
				}
			}
		}

		//??????, ?????? ?????? ?????????
		$hdNav.find('a').removeClass('on').eq(d1_on).addClass('on');
		$ftDepth1.children().removeClass('on').eq(d1_on).addClass('on');
		if( d1_on === 0 ) $ftDepth2.children().removeClass('on').eq(d2_on).addClass('on');

		//browser tit
		var browser_tit;
		//UI/UX Assets????????? ?????? ??????
		if( d1_on !== 0 ){
			browser_tit = menu[d1_on].d1_nm;
		}
		//UI/UX Assets??? ????????????
		else{
			if( this_link_split.length > 3 ) browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d4[d4_on].d4_nm;
			else browser_tit = menu[d1_on].d2[d2_on].d3[d3_on].d3_nm;

			var target_url = location.href;
			var part_idx;
			if( target_url.match('_part') ){
				part_idx = target_url.split('_part')[1]-1;
				var on_target, before_mm, after_nm;
				on_target = menu[d1_on].d2[d2_on].d3[d3_on].d4[d4_on];
				before_mm = on_target.d4_nm;
				after_nm = on_target.part_div[part_idx].part_nm;
				browser_tit = before_mm + ' ' + after_nm;
			}
		}

		$title.text(browser_tit+' | '+UXKM);
	}


	//???????????? ??????/????????? ?????? -------------------------------------------------------------//
	window.onpopstate = function(){
		load_scrollTop = 0;
		sessionStorage.setItem('scrollTop', load_scrollTop);

		$body.addClass(hide_fix_loading);

		if( history.state === null )history.back(+1);

		if( history.state === '/' ){
			mainSet( loadingStartTime );
		}
		else{
			var t_url = history.state;
			subSet( loadingStartTime, t_url );
		}
	};


	//???????????? ??? ????????? ?????? ??????
	function loadScrollTop(){
		$(window).on('scroll', function(){
			load_scrollTop = $(window).scrollTop();
			sessionStorage.setItem('scrollTop', load_scrollTop);
		});
		$htmlbody.animate({'scrollTop':sessionStorage.scrollTop}, 0);
	}
	//ajax end --------------------------------------------------------------------------------------------------------------------//


	//-------------------------------------------------------------------------------------------------------------------------------//


	//common function start --------------------------------------------------------------------------------------------------//
	//header progress bar ??????
	$ukHeader.addClass(device_check);
	$ukHeader.append('<span class="'+hd_progress+'">????????? ????????????</span>');

	//assetsLink open btn
	$assetsLink_btn.click(function(){
	  //??????
		if( !$(this).is('.active') ){
			$(this).addClass('active').removeClass('after');
			$html.css('overflow','hidden').addClass(hd_assetsLink_on+' '+sub_black);
			$assetsLink_area.trigger('focus').removeClass(hash_move);
			offsetTopControl();

			setTimeout(function(){
				al_depth1.find('> li').each(function(i, e){
					$(e).find('.al_depth2').masonry('layout');
				});
			}, loadingEndTime);
		}
    //??????
		else if( $(this).is('.active') ){
			$(this).removeClass('active').addClass('after');
			$html.removeAttr('style').removeClass(hd_assetsLink_on);
			setTimeout(function(){
				$html.removeClass(sub_black);
			}, 300);
			setTimeout(function(){
				$('.'+top_link+' ul').removeClass(opacity_on).removeAttr('style');
				$('.'+side_menu).removeClass(opacity_on).removeAttr('style');
				$(window).trigger('scroll');
			}, 600);
		}
		return false;
	});
	
	//assets link tab
	al_depth1.children().each(function(i, e){
		var link = $(e).find('> a');
		if( link.attr('href') !== '#' ){
			link.on('click focus', function(){
				$(this).parent().addClass('on').siblings().removeClass('on');
				return false;
			});
		}
		else{
			link.on('click', function(){
				var txt = $(this).text();
				alert(txt+' ????????? ?????? ????????????.');
				return false;
			});
		}
	});

	//search open
	$search_btn.click(function(){
    alert('?????? ?????? ????????? ?????????.');
    return false;

    /*
		if( !$html.is('.'+hd_search_on) ){
			$html.css('overflow','hidden').addClass(hd_search_on);
			$assetsLink_btn.addClass('active');
			$('.search_area input[type="text"]').trigger('focus');
			offsetTopControl();
			//setTimeout(function(){}, 600);
		}
		*/
	});

  //search action //??? ??? ???????????? ??????
  /*
  $search_submit.click(function(){
    alert('?????? ?????? ????????? ?????????.');
    return false;
  });
  */

	//search close
	$('.search_close').click(function(){
		$html.css('overflow','scroll').removeClass(hd_search_on);
		$assetsLink_btn.removeClass('active').addClass('after');

		setTimeout(function(){
			$('.'+top_link+' ul').removeClass(opacity_on).removeAttr('style');
			$('.'+side_menu).removeClass(opacity_on).removeAttr('style');
		}, 600);
		return false;
	});

	//uk-skip click
	$('.uk-skip a').on({
		focusin:function(){
			$(document).find('#content').attr('tabindex','0');
		},
		click:function(){
			$(document).find('#content').trigger('focus');
			if( $html.is('.sub_page') ){
				$htmlbody.stop().animate({'scrollTop':$('.'+sub_content).offset().top - $ukHeader.height()}, 0);
			}
			return false;
		}
	});
	//common function end -----------------------------------------------------------------------------------------------//
});


//main action
function main_action(){
	var $main_intro = $ukContainer.find('.main_intro');
	var $main_info = $ukContainer.find('.main_info');
	var mainInfoStep1 = $main_info.find('.step1');
	var mainInfoStep2 = $main_info.find('.step2');
	var mainInfoStep3 = $main_info.find('.step3');
	var mainInfoStep4 = $main_info.find('.step4');
	var mainInfoStep5 = $main_info.find('.step5');

	//ukContainer ????????? ??????
	$ukContainer.attr('id','content');

	//?????? ????????? next??????
	$(document).on('click', '.next_content', function(){
		var topSize = $main_intro.height() - $ukHeader.height();
		$htmlbody.stop().animate({'scrollTop':topSize}, 1000, 'easeInOutQuint');
		return false;
	});

	//?????? ????????? ?????? ??????
	var intro_link = menu[0].d2;
	var intro_banner = $main_intro.find('.banner');
	for( i=0; i<intro_link.length; i++ ){
		if( intro_link[i].d2_url === '#' ){
			intro_banner.append('<a href="'+intro_link[i].d2_url+'" class="'+ready_link+' bn'+(i+1)+'">'+intro_link[i].d2_nm+'</a>');
		}
		else{
			intro_banner.append('<a href="'+intro_link[i].d2_url+'" class="'+uk_link+' bn'+(i+1)+'">'+intro_link[i].d2_nm+'</a>');
		}
		//if( i === 2 ) $ukContainer.find('.main_intro').find('.banner a').eq(i).text('JS');
	}

	//resize
	$(window).on('resize', function(){
		var win_w = $(window).width();
		var win_h = $(window).height();
		pc_mb_class(win_w);

		//main intro height
		if( device_check === 'device' ) $main_intro.css('height',win_h);
	}).trigger('resize');

	//scroll
	$(window).on('scroll', function(){
		var sct = $(window).scrollTop();
		hd_common(sct);

		//main info scroll ---------------------------//
		var info_top = $main_intro.height() - $ukHeader.height();
		if( sct >= info_top ) $main_info.addClass('info_scroll');
		//keyboard ????????????
		var f_sct = sct - info_top;

		if( $html.is('.pc') ){
			mainInfoStep1.css('transform','translateY('+ (f_sct*-0.8) +'px)');
			mainInfoStep2.css('transform','translateY('+ (f_sct*-0.6) +'px)');
			mainInfoStep3.css('transform','translateY('+ (f_sct*-0.4) +'px)');
			mainInfoStep4.css('transform','translateY('+ (f_sct*-0.2) +'px)');
			mainInfoStep5.css('transform','translateY('+ (f_sct*-0.1) +'px)');
		}
		else if( $html.is('.mb') ){
			mainInfoStep1.css('transform','translateY('+ (f_sct*-0.4) +'px)');
			mainInfoStep2.css('transform','translateY('+ (f_sct*-0.3) +'px)');
			mainInfoStep3.css('transform','translateY('+ (f_sct*-0.2) +'px)');
			mainInfoStep4.css('transform','translateY('+ (f_sct*-0.1) +'px)');
			mainInfoStep5.css('transform','translateY('+ (f_sct*-0.05) +'px)');
		}
	});

	//common
	removeTabindex();	//remove tabindex
	focusControl();			//focus controll
}


//sub action
function sub_action(data, target_url, d1_on, d2_on, d3_on, d4_on){
	//assets ??????
	if( d1_on === 0 ){
		var d2_target = menu[0].d2[d2_on];
		var d3_target = d2_target.d3[d3_on];
		if( target_url.split('&').length > 3 ) var d4_target = d3_target.d4[d4_on];
		$ukContainer.append(
			'<article class="'+sub_top+'">' +
				//'<h1 class="tit">'+d2_target.d2_nm+'</h1>' +
				'<h1 class="tit">'+(d3_on+1)+'. '+d3_target.d3_nm+'</h1>' +
				'<nav class="'+top_link+'"><ul></ul></nav>' +
				'<blockquote class="inner note_none" cite="https://uxkm.github.io">' +
					'<div class="'+common_info+'"></div>' +
				'</blockquote>' +
			'</article>' +
			'<article class="sub_content inner">' +
				'<aside class="'+side_menu_area+'">' +
					'<h1 class="tit"><b>'+d2_target.d2_nm+'</b> <i>Table of Contents</i></h1>' +
					//'<h1 class="tit"><b>ACCESSIBILITY</b> <i>Table of Contents</i></h1>' +
					'<nav class="'+side_menu+'"><ol></ol></nav>' +
				'</aside>' +
				'<main id="content" class="'+content_area+'" role="main"></main>' + //tabindex="-1"
			'</article>'
		);

		var dp4_true = target_url.split('&').length > 3;

		//?????? ?????? ??????
		var assets_d2 = menu[0].d2;
		for( i=0; i<assets_d2.length; i++ ){
			if( assets_d2[i].d2_url === '#' ){
				$('.'+top_link+' ul').append('<li><a href="'+assets_d2[i].d2_url+'" class="'+ready_link+'"><i>'+assets_d2[i].d2_nm+'</i></a></li>');
			}
			else{
				$('.'+top_link+' ul').append('<li><a href="'+assets_d2[i].d2_url+'" class="'+uk_link+'"><i>'+assets_d2[i].d2_nm+'</i></a></li>');
			}
			if( i === d2_on ) $('.'+top_link+' li').eq(i).addClass('on');
		}

		//????????? ??????
		$('.'+content_area).html(data);
		if( dp4_true ){
			if( d4_target.part === true ){
				var target_idx = target_url.split('_part')[1]-1;
				var part_nm = d4_target.part_div[target_idx].part_nm;
				$ukContainer.find('.'+content_area+' h1').html(d4_target.d4_nm + ' <i>'+part_nm+'</i>').attr('data-number', (d3_on+1)+'.'+(d4_on+1)+'. ');
			}
			else {
				$ukContainer.find('.'+content_area+' h1').text(d4_target.d4_nm).attr('data-number', (d3_on+1)+'.'+(d4_on+1)+'. ');
			}
		}
		else{
			$ukContainer.find('.'+content_area+' h1').text(d3_target.d3_nm).attr('data-number', (d3_on+1)+'. ');
			$('.sub_content').addClass('depth3_last');
		}

		//html5??? ?????? ????????? ??????
		if( dp4_true && d4_target.html5 === true ){
			$ukContainer.find('.'+content_area+' h1').addClass('html5');
		}


		//???????????? / ?????? ?????? / ?????? ????????? ??????
		var d3Note = d3_target.d3_note;
		var d3Refer = d3_target.d3_refer;
		var d3_fileUrl = d3_target.d3_file;

		//?????? ?????? info ??????
    //if( d2_target.d2_nm === 'FRAMEWORK' ) conAjax( $('.'+common_info), file+'/06-framework/common_info.html' );
    if( d2_target.d2_nm === 'FRAMEWORK' ) $('.'+common_info).parent().remove();
    else  conAjax( $('.'+common_info), file+'common_info.html' );

		//???????????? ?????? ?????? ?????? ??????
		if( d3Note === true ){
			filerUrl_reset();
			var note_file = d3_fileUrl + 'note.html';
			conAjax( $('.'+sub_top), note_file );
		}
		else{
			$('.'+sub_top+' .inner').append('<div class="'+top_info+'"></div>')
			conAjax( $('.'+top_info), d2_target.d2_info );
		}
		//?????? ??????
		if( d3Refer === true ){
			filerUrl_reset();
			var refer_file = d3_fileUrl + 'reference.html';
			conAjax( $('.'+content_area), refer_file );
		}
		function filerUrl_reset(){
			var filerUrl_split = d3_fileUrl.split('/');
			var filerUrl_length = filerUrl_split.length - 1;
			var filerUrl_re = filerUrl_split[filerUrl_length];
			var filerUrl_custom = filerUrl_split[0]+'/';
			if( filerUrl_re !== '' ){
				for( i=1; i<filerUrl_length; i++ ){
					filerUrl_custom += filerUrl_split[i]+'/';
				}
				d3_fileUrl = filerUrl_custom;
			}
		}

		//?????? ?????? ????????? ?????? ??????
		function conAjax(el, target){
			$.get(target, function(content){
				el.append(content);
			});
		}

		//part??? ?????? ??? ????????? ??????
		if( dp4_true && d4_target.part === true && !$('.tab_menu').is(':visible') ){
			$('.'+content_area+'>header').after('<nav class="tab_menu mt_xxl x'+d4_target.part_div.length+'"><ul></ul></nav>');
			var part_tab = $('.'+content_area+' .tab_menu ul');
			for( i=0; i<d4_target.part_div.length; i++  ){
				var part_target = d4_target.part_div[i];
				part_tab.append('<li><a href="'+part_target.part_url+'" class="uk_link"><i>'+part_target.part_tab+'</i></a></li>');
			}

			var part_idx = Number(location.href.split('_part')[1]-1);
			part_tab.find('li').eq(part_idx).addClass('on');
		}
		
		//????????? ????????? ?????? ??????
		var side_d3 = d2_target.d3;
		for( i=0; i<side_d3.length; i++ ){
			$('.'+side_menu+'>ol').append(
				'<li class="item"><a href="'+side_d3[i].d3_url+'">'+side_d3[i].d3_nm+'</a></li>'
			);
			if( i === d3_on ) $('.'+side_menu+'>ol>li').eq(i).addClass('on tg_on');
		}
		$('.'+side_menu+'>ol>li').each(function(i, e){
			var side_d4 = side_d3[i].d4;
			if( typeof side_d4 !== 'undefined' ){
				$(e).append('<ol class="side_d2"></ol>');
				$(e).addClass('toggle_box').find('>a').addClass(toggle_link);

				//4????????? ??????
				for( a=0; a<side_d4.length; a++ ){
					var part_state = side_d4[a].part;

					/*
					var $e_ol = $(e).find('>ol');
					$e_ol.append('<li class="'+dp4+'"></li>');
					var $e_ol_li = $e_ol.find('>li');

					//part ?????? ??????
					if( !part_state ){
						$e_ol_li.eq(a).append('<a href="'+side_d4[a].d4_url+'" class="'+uk_link+'">'+side_d4[a].d4_nm+'</a>');
					}
					//part ??? ??????
					else if( part_state ){
						$e_ol_li.eq(a).addClass('part');
						var part_div = side_d4[a].part_div;
						for( p=0; p<part_div.length; p++ ){
							$e_ol_li.eq(a).append('<p><a href="'+part_div[p].part_url+'" class="'+uk_link+'">'+part_div[p].part_nm+'</a></p>');
						}
					}
					*/

					//?????? ?????? / element ????????? ?????? ?????? ?????? / html5 ??????
					element_color_div(part_state, side_d4[a].d4_nm, $(e), a, side_d4);

					//on ?????????
					if( i === d3_on && a === d4_on && target_url.split('&').length > 3  ){
						$(e).find('li').eq(a).addClass('on');
					}
					//part?????? ?????????
					if( part_state ){
						var part_idx = Number(location.href.split('_part')[1]-1);
						$(e).find('>ol>li.part.on p').eq(part_idx).addClass('on');
					}
				}
			}
			else{
				$(e).find('>a').addClass(uk_link);
			}
		});

		//????????? ?????? data-tit
		var change_target = $('.'+side_menu).find('li.item.on');
		if( target_url.split('&').length > 3 ){
			var active_target = menu[d1_on].d2[d2_on].d3[d3_on].d4[d4_on];
			var browser_tit = active_target.d4_nm;
			if( d4_target.part === true ) {
				var target_idx = Number(target_url.split('_part')[1] - 1);
				browser_tit += ' '+d4_target.part_div[target_idx].part_nm;
			}

			change_target.find('>a').attr('data-tit',(d3_on+1)+'.'+(d4_on+1)+'. '+browser_tit);
			if( active_target.html5 === true ) change_target.find('>a').addClass('html5');
		}

		//????????? ?????????
		if( !$('.'+content_area+' h1').parent().next().is(':visible') ){
			$('.'+content_area).append('<div class="ready_content"><i class="fas fa-tools"></i><p>Coming soon</p></div>');
		}
		if( dp4_true && d4_target.part === true && $('.tab_menu').is(':visible') ){
			if( !$('.'+content_area+' h1').parent().siblings('.tab_menu').next().is(':visible') ){
				$('.'+content_area).append('<div class="ready_content"><i class="fas fa-tools"></i><p>Coming soon</p></div>');
			}
		}

		//css > ?????? > animation
		if( dp4_true && d4_target.d4_nm === 'Animation' ){
			$('.'+side_menu_area).addClass('animation_side');
		}
	}

	///Project GUIDE, Web Trends ??????
	else{
		$ukContainer.html(data);
	}

	//resize
	var iframe_con = $('.iframe_con');
	var side_state = false;
	top_link_offsetTop = [];
	$(window).on('resize', function(){
		var win_w = $(window).width();
		var hd_h = $ukHeader.height();
		pc_mb_class(win_w);
    //gist_auto_height();

		side_offsetTop = [];
		side_offsetTop.push( $('.'+side_menu_area).offset().top - hd_h );

		top_link_offsetTop.push( $('.'+top_link+' ul').offset().top - hd_h );
		top_link_offsetTop.sort(function(a, b) {
			return a - b;
		});

		//md-max ???????????? ??? side menu ?????????
		var side_target = $('.'+side_menu+' .item.on');
		if( win_w < md_size ){
			$html.addClass(md_state);
			if( side_target.is('.'+tg_on) && !side_state ){
				side_target.removeClass(tg_on).find('ol').hide();
				side_state = true;
			}
			$('.'+top_link+' ul').removeAttr('style');
		}
		else{
			$html.removeClass(md_state);
			if( side_state ){
				side_target.siblings().removeClass(tg_on).find('ol').removeAttr('style');
				side_target.addClass(tg_on).find('ol').show();
				side_state = false;
			}
			var top_left = $('.'+sub_content).offset().left + Number($('.'+sub_content).css('paddingLeft').split('px')[0]) + 4;
			top_link_offsetLeft = [];
			top_link_offsetLeft.push(top_left);
			if( $('.'+top_link+' ul').is('.fixed') ) $('.'+top_link+' ul').css('right',top_left+'px');
		}

		//kmtemp con
		if( iframe_con.is(':visible') ){
			iframe_con.each(function(i, e) {
				var target = $(e).find('iframe');
				var the_height;
				the_height = target.contents().find('body').height();
				$(e).css({'height': the_height});

				if( the_height === null ){
					var th_interval = setInterval(function(){
						if( the_height === null ){
							the_height = target.contents().find('body').height();
							$(e).css({'height': the_height});
						}
						else {
							clearInterval(th_interval);
						}
					}, 100);
				}
			});
		}
	}).trigger('resize');

	//scroll
	$(window).on('scroll', function(){
		var sct = $(window).scrollTop();
		hd_common(sct);
		//console.log(sct);

		if( sct > side_offsetTop ) $('.'+side_menu_area).addClass('fixed');
		else $('.'+side_menu_area).removeClass('fixed');

		if( sct > top_link_offsetTop[0] ) $('.'+top_link+' ul').addClass('fixed').css('right',top_link_offsetLeft+'px');
		else $('.'+top_link+' ul').removeClass('fixed').removeAttr('style');
	});


	//common
	removeTabindex();	//remove tabindex
	focusControl();		//focus controll
	line_code_box();
  uk_gist_skin_code();
  terminal_code_box();
}


//?????? ?????? / element ????????? ?????? ?????? ?????? / html5 ??????
function element_color_div(part_state, target, target_this, target_idx, d4){
	var $e_ol = target_this.find('>ol');
	$e_ol.append('<li class="'+dp4+'"></li>');
	var $e_ol_li = $e_ol.find('>li');

	//part ?????? ??????
	if( !part_state ){
		$e_ol_li.eq(target_idx).append('<a href="'+d4[target_idx].d4_url+'" class="'+uk_link+'">'+d4[target_idx].d4_nm+'</a>');
	}
	//part ??? ??????
	else if( part_state ){
		$e_ol_li.eq(target_idx).addClass('part');
		var part_div = d4[target_idx].part_div;

		var on_target, before_mm, after_nm;
		on_target = d4[target_idx];
		before_mm = on_target.d4_nm;

		for( p=0; p<part_div.length; p++ ){
			after_nm = on_target.part_div[p].part_nm;
			var part_nm = before_mm + ' ' + '<em>' + after_nm + '</em>';
			//$e_ol_li.eq(target_idx).append('<p><a href="'+part_div[p].part_url+'" class="'+uk_link+'">'+part_div[p].part_nm+'</a></p>');
			$e_ol_li.eq(target_idx).append('<p><a href="'+part_div[p].part_url+'" class="'+uk_link+'">'+ part_nm +'</a></p>');
		}
	}

	if( !part_state ){
		if( target.match('element') ){
			var txt_split = target.split(' ');
			var tag_txt;
			if( txt_split[txt_split.length-1] === 'element' ){
				var element_txt = txt_split[txt_split.length-1];
				if( txt_split.length <= 2 ) tag_txt = txt_split[0];
				else tag_txt = txt_split[0] + ' ' + txt_split[1];
				target_this.find('li').eq(target_idx).find('>a').html('<b>'+ tag_txt+'</b> <i>'+element_txt+'</i>');
			}
			else if( txt_split[1] === 'element' ) {
				var ex_txt = txt_split[txt_split.length-1];
				tag_txt = txt_split[0];
				target_this.find('li').eq(target_idx).find('>a').html('<b>'+ tag_txt+'</b> <i>element</i> <b>'+ex_txt+'</b>');
			}
		}
	}
	else if( part_state ){
		var color_div_target = target_this.find('li').eq(target_idx).find('p');
		color_div_target.each(function(z, x){
			var part_div = d4[target_idx].part_div;
			var part_nm = on_target.d4_nm + ' ' + part_div[z].part_nm;
			var txt_split = part_nm.split(' ');
			var tag_txt;

			if( txt_split[txt_split.length-1] === 'element' ){
				var element_txt = txt_split[txt_split.length-1];
				if( txt_split.length <= 2 ) tag_txt = txt_split[0];
				else tag_txt = txt_split[0] + ' ' + txt_split[1];
				$(x).find('a').html('<b>'+ tag_txt+'</b> <i>'+element_txt+'</i>');
			}
			else if( txt_split[1] === 'element' ) {
				var ex_txt = txt_split[txt_split.length-1];
				tag_txt = txt_split[0];
				$(x).find('a').html('<b>'+ tag_txt+'</b> <i>element</i> <em>'+ex_txt+'</em>');
			}
		});
	}

	//html5?????? ?????? ????????? ?????? ??????
	if( d4[target_idx].html5 === true ){
		if( !part_state ){
			target_this.find('li').eq(target_idx).find('a').addClass(html5_new).append('<span class="html5 fab fa-html5">HTML5?????? ????????? ??????</span>');
		}
		else if( part_state ){
			target_this.find('li').eq(target_idx).find('p a').addClass(html5_new).append('<span class="html5 fab fa-html5">HTML5?????? ????????? ??????</span>');
		}
	}
}


//pc&mb class
function pc_mb_class(win_w){
	var scroll_state = false;
	//????????? pc
	if( win_w > respon_size ){
		$html.addClass('pc').removeClass('mb');
		// pcmb_state = [];
		// pcmb_state.push('state_pc');
		// iscroll_psmb = [];
		// iscroll_psmb.push(true);
		// if( !scroll_state ){
		// 	$(window).trigger('scroll');
		// 	sroll_state = true;
		// }
	}
	//????????? mobile
	else if( win_w <= respon_size ){
		$html.addClass('mb').removeClass('pc');
		// pcmb_state = [];
		// pcmb_state.push('state_mb');
		// iscroll_psmb = [];
		// iscroll_psmb.push(false);
		// if( scroll_state ){
		// 	$(window).trigger('scroll');
		// 	sroll_state = false;
		// }
	}
}


//header common
function hd_common(sct){
	//uk_header ---------------------------//
	if( sct > 10 ) $ukHeader.addClass('fixed');
	else $ukHeader.removeClass('fixed');

	//uk_header progress
	var docHeight = $(document).height() - window.innerHeight;
	var hd_proW = (sct/docHeight)*100;  //Math.ceil();
	$('.'+hd_progress).css('width',hd_proW+'%');
}


//#content remove tabindex
function removeTabindex(){
	$(document).find('#content').on('focusout', function(){
		$(this).removeAttr('tabindex');
	});
}


//focus ?????????
function focusControl(){
	$assetsLink_btn.on({
		keydown:function(e){
			if( !$(this).is('.active') ){
				if( e.keyCode == 9 && !e.shiftKey ){
					setTimeout(function(){
						$ukContainer.find('a').first().trigger('focus');
					}, 10);
				}
				if( e.keyCode == 9 && e.shiftKey ){
					setTimeout(function(){
						$search_btn.trigger('focus');
					}, 10);
				}
			}
		}
	});
	$ukContainer.find('a').first().on({
		keydown:function(e){
			if( e.keyCode == 9 && e.shiftKey ){
				setTimeout(function(){
					$assetsLink_btn.trigger('focus');
				}, 10);
			}
		}
	});
	$assetsLink_area.find('a').last().on({
		keydown:function(e){
			console.log('down');
			if( e.keyCode == 9 && !e.shiftKey){
				setTimeout(function(){
					$assetsLink_btn.trigger('focus').trigger('click');
				}, 10);
			}
		}
	});

	$search_btn.on({
		keydown:function(e){
			if( !$html.is('.'+hd_search_on) ){
				if (e.keyCode == 9 && !e.shiftKey){
					setTimeout(function(){
						$assetsLink_btn.trigger('focus');
					}, 10);
				}
			}
		}
	});
	$('.search_close').on({
		focus:function(){
			$(this).trigger('click');
		}
		/*
		keydown:function(e){
			if( e.keyCode == 9 && !e.shiftKey && $html.is('.'+hd_search_on) ){
				setTimeout(function(){
					$('.search_close').trigger('click');
				}, 10);
			}
		}
		*/
	});
}


//top_link, side_menu offset().top ?????????
function offsetTopControl(){
	if( !$html.is('.'+md_state) ){
		if( $('.'+top_link+' ul').is('.fixed') ){
			//$('.'+top_link+' ul').css('top',$(window).scrollTop() + $ukHeader.height());
			$('.'+top_link+' ul').addClass(opacity_on);
		}
	}
	else{
		if( $('.'+side_menu_area).is('.fixed') ){
			//$('.'+side_menu).css('top',$(window).scrollTop() + $ukHeader.height());
			$('.'+side_menu).addClass(opacity_on);
		}
	}
}


//uk_editor ?????? ??????
function ukEditor_txtarea(){
	var uk_editor = $('.uk_editor');
	/*
		uk_editor.each(function(i, e){
			var target = $(e).parent().attr('data-target');
			var txtarea = $(e).find('textarea');
			if( target.match('html') ){
				$.get('/ukncs/tutorials/'+target, function(content){
					txtarea.text(content);
				});
			}
		});
	*/
	uk_editor.each(function(i, e){
		var target = $(e).parent().attr('data-target');
		var txtarea = $(e).find('textarea');
		txtarea.val('');
		if( target !== 'none' || target !== 'false' || target !== '' ){
			$.get('/ukncs/tutorials/'+target, function(content){
				txtarea.val(content);
			});
		}
	});
}


//line_code_box
function line_code_box(){
  var lineCodeBox = $('.line_code_box');

  lineCodeBox.each(function(i, e){
    //gist_skin_app ?????????
    var li_target = $(e).find('ul > li');
    var li_length = li_target.length;
    $(e).find('ul').wrap('<div class="scroll_wrap" id="iscroll_'+i+'"><div class="scroll_inner"></div></div>');

    //line number ??????
    if( $(e).is('.line_code_number') && li_length > 1 ){
      $(e).find('ul').addClass('code_box');
      $(e).addClass('line_true').prepend('<ol class="line_number">');
      for( i=0; i<li_length; i++ ){
        $(e).find('.line_number').append('<li></li>');
      }
    }

    //?????? ??????
    li_target.each(function(j, k){
      var e_txt = $(k).text();
      if( e_txt.match('{') && !e_txt.match('}') ) $(k).addClass('t_777');
      if( e_txt.match('}') && !e_txt.match('{') ) $(k).addClass('t_777');

      if( e_txt.match('<!--') || e_txt.match('-->') ){
        $(k).addClass('t_999');
      }
      if( e_txt.indexOf("/*") !== -1 || e_txt.indexOf("*/") !== -1 ){
        $(k).addClass('t_999');
      }
    });
  });

  //iscroll ??????
  //$('.scroll_wrap').each(function(i, e){
  $('.line_code_box:not(.uk_gist_code) .scroll_wrap').each(function(i, e){
    var s_target = $(e).attr('id');

    new IScroll('#'+s_target, {
      //scrollbars: true,
      scrollbars: 'custom',
      mouseWheel: false,
      click: false,
      scrollX: true,
      scrollY: false,

      disableMouse: true,
      disablePointer: true,
      disableTouch: false,

      onBeforeScrollStart: function (e) { e.preventDefault(); }, //?????? ??????
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      //fadeScrollbars: true,
      preventDefaultException: {tagName: /^(INPUT|TEXTAREA|SELECT)$/},
    });
  });
}


//uk_gist_skin_code box
function uk_gist_skin_code(){
  const uk_gist_code_box = 'uk_gist_code_box';
  const uk_gist_content = 'uk_gist_content';
  const uk_gist_code_pre = 'uk_gist_code_pre';
  const uk_gist_code_wrap = 'uk_gist_code_wrap';
  const uk_gist_code_line = 'uk_gist_code_line';
  const uk_gist_footer = 'uk_gist_footer';
  const not_ko = /[a-z0-9]|[\[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  const not_hashTags = /[a-z0-9]|[???-???|???-???|???-???]|[\[\]{}()<>?|`~!@$%^&*-_+=,.;:\"'\\]/g;
  const ko_check = /[???-???|???-???|???-???]/;
  const code_tab_size = '  ';

  $('.'+uk_gist_code_box).each(function(i, e){
    const str = $(e).find('textarea').val()
    .replace(/</g,"&lt;")                                                 // '<' ??????
    .replace(/>/g,"&gt;")                                                 // '>' ??????
    .replace(/\"/g,"<span class='uk_color_quot'>&quot;</span>")                // ???????????? ??????
    .replace(/\'/g,"&#39;")                                               // ??????????????? ??????
    //.replaceAll("____error__","<span class='uk_color_error'>")          // error?????? ?????? ??????
    //.replaceAll("__error____","</span>")                                // error?????? ?????? ??????
    .replace(/____error__/g,"<span class='uk_color_error'>")              // error?????? ?????? ??????
    .replace(/__error____/g,"</span>")                                    // error?????? ?????? ??????
    .replace(/--add--/g,"<span class='uk_color_add'>[-- ????????? ?????? --]</span>")     // --add--?????? ??????
    .replace(/--add_start--/g,"<span class='uk_color_add'>[-- ????????? ?????? {{ --]</span>")     // --add--?????? ??????
    .replace(/--add_end--/g,"<span class='uk_color_add'>[-- }} ????????? ?????? --]</span>")     // --add--?????? ??????
    .replace(/--edit--/g,"<span class='uk_color_edit'>[-- ????????? ?????? --]</span>")   // --edit--?????? ??????
    .replace(/--del--/g,"<span class='uk_color_edit'>[-- ????????? ?????? --]</span>")   // --edit--?????? ??????
    .replace(/--no_change--/g,"<span class='uk_color_nn'>[-- ?????? ?????? --]</span>")   // --edit--?????? ??????
    .replace(/\t/gi, code_tab_size);                                      // tab????????? ????????????(4???)??? ??????

    //----------------------------------------------------------------------------------------

    //????????? ????????? ???????????? ??????
    const line = str.split('\n');
    const lineLength = line.length - 1;

    //?????? ????????? ?????? ?????? ???????????? tab ?????? ??????
    const line_tab_split = line[0].trim().split('')[0];
    const line_tab_size = line[0].split(line_tab_split)[0];

    //----------------------------------------------------------------------------------------

    //????????? ??? ?????? ??????
    let str_content = '';
    let ex_line_color = '';
    let tab_count;
    let tab_count_css = '';
    const ex_line = '__ex_line__';
    for( i=0; i<lineLength; i++ ){
      //?????? ????????? ?????? ?????? ???????????? tab ?????? ??????
      if( line[i].match(line_tab_size) ){
        line[i] = line[i].replace(line_tab_size, '');
      }

      //?????? ????????? ?????? //ex_line
      if( line[i].match(ex_line) ){
        ex_line_color = line[i].split(' ')[0].split('__')[2];
        line[i] = line[i].replace(ex_line + ex_line_color + '__ ', '');
        line[i] = '<b class="uk_ex_line" style="color:'+ex_line_color+'">'+line[i]+'</b>';
      }

      //????????? ?????? ?????????
      let each_ko;
      if( line[i].match(ko_check) ){
        each_ko = line[i].replace(not_ko, '').split(' ').filter(function(item) {
          return item !== null && item !== undefined && item !== '';
        });
        $.each(each_ko, function(){
          line[i] = line[i].replace(this, '<span class="uk_leng_ko">'+this+'</span>')
        });
      }

      //???????????? ?????? ??????
      if( line[i] === '' ){
        str_content += '<span class="'+uk_gist_code_line+'">' + line[i] + '</span>\n';
      }
      //???????????? ?????? ?????? [ uk_gist_code_line class ?????? / doctype line ?????? / tab line ?????? ]
      else {
        //tab line ??????
        const each_tab_split = line[i].trim().split('')[0];
        const each_tab_size = line[i].split(each_tab_split)[0];
        tab_count = each_tab_size.split(code_tab_size).length - 1;

        let tab_indent = "";
        let tab_indent_line = "";
        if( tab_count > 0 && each_tab_size.match(code_tab_size) ){
          for( j=0; j<tab_count; j++ ){
            //tab_indent += '<span class="tab_indent tab_indent_'+(j+1)+'">'+ code_tab_size +'</span>';
            //tab_indent += '<span class="tab_indent tab_indent_'+(j+1)+'" data-tab="'+tab_size+'"></span>';
            tab_indent += '<span class="tab_indent" data-tab="'+code_tab_size+'"></span>';
          }
          tab_indent_line = '<span class="tab_indent_line">'+tab_indent+'</span>';
        }

        if( line[i].match('!DOCTYPE') ){
          str_content += '<span class="'+uk_gist_code_line+' uk_color_doctype">'+ line[i] + tab_indent_line + '</span>\n';
        }
        else {
          str_content += '<span class="'+uk_gist_code_line+'">'+ line[i] + tab_indent_line + '</span>\n';
        }
      }

      if( line[i].match('--del--') ){

      }
    }

    //----------------------------------------------------------------------------------------

    //data-tit ??????
    let dataTitle = '';
    if( $(e).attr('data-tit') ){
      dataTitle = '<b>' + $(e).attr('data-tit') + '</b> c';
    }else{
      dataTitle = 'C';
    }

    //----------------------------------------------------------------------------------------

    $(e).append(
      '<div class="'+uk_gist_content+'">' +
      '<pre class="'+uk_gist_code_pre+'">' +
      '<code class="'+uk_gist_code_wrap+'">'+str_content+'</code>' +
      '</pre>' +
      '</div>' +
      '<div class="'+uk_gist_footer+'">' +
      ''+dataTitle+'ode example ' +
      '<span class="by"><span class="hyphen">-</span> create <i>???</i> by <b>uxkm</b></span>' +
      '</div>'
    );

    //data-filename??? ?????? ??????
    const uk_gist_code_layer = 'uk_gist_code_layer';
    const file_name_box = 'file_name_box';
    const file_name = 'file_name';
    const view_full_layer = 'view_full_layer';
    const full_code_layer = 'full_code_layer';
    const code_layer_close = 'code_layer_close';
    const dataFilename = $(e).attr('data-filename');
    const if_next_layer = $(e).next().is('.'+full_code_layer);
    const if_e_layer = $(e).is('.'+full_code_layer);

    if( !$(e).is('.'+full_code_layer) && dataFilename || dataFilename !== undefined ){
      let dataFilename_btn = '<button type="button" class="'+file_name+' toggle_btn">'+dataFilename+' <span>[close]</span></button>';
      if( if_next_layer ) dataFilename_btn += '<button type="button" class="'+view_full_layer+'">View full code</button>';
      if( if_e_layer ){
        dataFilename_btn =
          '<span class="'+file_name+'">'+dataFilename+'</span>' +
          '<button type="button" class="'+code_layer_close+'"><i>layer close</i></button>'
        ;
      }
      $(e).prepend('<div class="'+file_name_box+'">'+ dataFilename_btn +'</div>');

      //file_name click
      $(e).find('.'+file_name_box+' button.'+file_name).on('click', function(){
        //code box ?????? ???
        if( !$(this).is('.on') ){
          $(this).addClass('on').children('span').text('[open]');
          $(this).parent().addClass('on').next().hide();
          $(e).next().find();
        }
        //code box ??? ???
        else{
          $(this).removeClass('on').children('span').text('[close]');
          $(this).parent().removeClass('on').next().show();
        }
        return false;
      });

      //view_full_layer click
      $(e).find('.'+file_name_box+' button.'+view_full_layer).on('click', function(){
        $(e).next().addClass('view_show');
        $html.css('overflow-y','hidden');
        return false;
      });
      //code_layer_close click
      $(e).find('.'+file_name_box+' button.'+code_layer_close).on('click', function(){
        $(this).parents('.'+uk_gist_code_layer).removeClass('view_show');
        $html.css('overflow-y','scroll');
        return false;
      });
    }

    //full_code_layer??? ??????
    if( if_e_layer ){
      $(e).wrap('<div class="uk_gist_code_layer">');

      if( device_check === 'desktop' ){
        const ly_scroll = 'ly_scroll';
        const pd = '17px';
        var code_width = $(e).find('.'+uk_gist_code_wrap).outerWidth();
        $(e).find('.'+uk_gist_code_wrap).css('padding-bottom',22);

        $(e).find('.'+uk_gist_content).after(
          '<div class="'+ly_scroll+'" style="overflow-x:auto; position:relative; z-index:2; height:'+pd+'; margin-top:-'+pd+';">' +
          '<p style="width:'+code_width+'px; font-size:0; text-indent:-9999px;">scroll var</p>' +
          '</div>'
        );

        $(e).find('.'+ly_scroll).scroll(function(){
          let scl = $(this).scrollLeft();
          $(e).find('.'+uk_gist_code_wrap).scrollLeft(scl);
        });
      }
    }

    const dataOpen = $(e).attr('data-open');
    if( dataOpen === 'false' ){
      $(e).find('.'+file_name_box).addClass('on');
      $(e).find('.'+file_name_box+' button.'+file_name).addClass('on').children().text('[open]')
      $(e).find('.'+uk_gist_content).hide();
    }

    //----------------------------------------------------------------------------------------

    //line number ??????
    $(e).find('.'+uk_gist_content).prepend('<ol class="line_number">');
    for( i=0; i<lineLength; i++ ){
      $(e).find('.line_number').append('<li></li>');
    }
  });

  //highlight.js ?????? ??? ?????? ?????????
  const hljsSelectorClass = '.hljs-selector-class';
  const hljsSelectorId = '.hljs-selector-id';
  const hljsNumber = '.hljs-number';
  setTimeout(function(){
    $('.'+uk_gist_code_wrap).each(function(i, e){
      //$(e).addClass('xml');
      hljs.highlightBlock(e);
      $(this).parents('.'+uk_gist_content).siblings('textarea').remove();

      //class '.' ?????? ?????? class ??????
      if( $(e).find(hljsSelectorClass).is(':visible') ){
        $(hljsSelectorClass).each(function(j, k){
          const change_str = $(k).text().replace('.','<span class="uk_color_class_dot">.</span>');
          $(k).html(change_str);
        });
      }

      //id '#' ?????? ?????? class ??????
      if( $(e).find(hljsSelectorId).is(':visible') ){
        $(hljsSelectorId).each(function(j, k){
          const change_str = $(k).text().replace('#','<span class="uk_color_id_hashTags">#</span>');
          $(k).html(change_str);
        });
      }

      //number?????? ????????? ?????? ?????? ??????
      if( $(e).find(hljsNumber).is(':visible') ){
        $(hljsNumber).each(function(j, k){
          let change_str;
          const str_arr = $(k).text().split('');


          if( str_arr[0] === '#' ){
            $(k).addClass('uk_color_hexCode');
          }
          else {
            const string_str = $(k).text().replace(/[0-9]/g,'').replace(/\./g,'').replace(/\s/g,'');
            //console.log( string_str );
            change_str = $(k).text().replace(string_str,'<span class="uk_color_number_in_string">'+string_str+'</span>');
          }
          $(k).html(change_str);
        });
      }

      //???????????? .hljs-number ?????? ??????
      $(e).find('.'+uk_gist_code_line).each(function(j, k){
        if( $(k).text().match('#') ){
          $(k).html( $(k).html().replace( /#/g, '<span class="uk_string_hashTags">#</span>' ) );

          if( $(k).find(hljsNumber).prev().is('.uk_string_hashTags') ){
            $(k).find(hljsNumber).addClass('uk_color_number_in_string');
          }
        }
      });

      // ???????????? ------------------------------------------------------------------------------------------------------

      //sub element ?????? ??????
      if( $(e).find(hljsSelectorClass).is(':visible') && $(e).parents('.'+uk_gist_code_box).attr('data-ex') === 'sub' ){
        $(e).find(hljsSelectorClass).each(function(j, k){
          if( $(k).text() === '.sub' ){
            $(k).addClass('hljs-selector-tag').find('.uk_color_class_dot').remove();
          }
        });
      }

      //img element > area ?????? ??????
      if( $(e).parents('.'+uk_gist_code_box).attr('data-ex') === 'img_area' ){
        let index;
        $(e).find('.'+uk_gist_code_line).each(function(j, k){
          if( $(k).text().match('<map name="vending">') ){
            index = j;
          }
          if( j === index + 1 ){
            $(k).find('.hljs-name').after(
              ' ' +
              '<span class="hljs-attr">shape</span>=<span class="hljs-string">"</span><span class="hljs-string">poly</span><span class="hljs-string">"</span>' +
              ' ' +
              '<span class="hljs-attr">coords</span>=<span class="hljs-string">"</span><span class="hljs-string">50,150,230,120,230,180,50,210</span><span class="hljs-string">"</span>' +
              ' ' +
              '<span class="hljs-attr">alt</span>=<span class="hljs-string">"</span><span class="hljs-string">??????</span><span class="hljs-string">"</span>' +
              ' ' +
              '<span class="hljs-attr">href</span>=<span class="hljs-string">"</span><span class="hljs-string">https://ko.wikipedia.org/wiki/%EC%A7%84%EC%8B%A4</span><span class="hljs-string">"</span>' +
              ''
            );
          }
          if( j === index + 2 ){
            $(k).find('.hljs-name').after(
              ' ' +
              '<span class="hljs-attr">shape</span>=<span class="hljs-string">"</span><span class="hljs-string">circle</span><span class="hljs-string">"</span>' +
              ' ' +
              '<span class="hljs-attr">coords</span>=<span class="hljs-string">"</span><span class="hljs-string">140,100,40</span><span class="hljs-string">"</span>' +
              ' ' +
              '<span class="hljs-attr">alt</span>=<span class="hljs-string">"</span><span class="hljs-string">??????</span><span class="hljs-string">"</span>' +
              ' ' +
              '<span class="hljs-attr">href</span>=<span class="hljs-string">"</span><span class="hljs-string">https://ko.wikipedia.org/wiki/%EA%B1%B0%EC%A7%93%EB%A7%90</span><span class="hljs-string">"</span>' +
              ''
            );
          }
        });
      }

      //css ????????? level 1, 2 ?????? ??????
      if( $(e).parents('.'+uk_gist_code_box).attr('data-ex') === 'attribute_selector' ){
        $(e).find('.'+uk_gist_code_line+':first .hljs-selector-tag').remove();
      }

      //text ?????? > vertical-align ?????? sub ?????? ??????
      value_error( 'align_vertical-align' );
      //text ?????? > word-break ?????? break-word ?????? ??????
      value_error( 'align_word-break' );
      //background ?????? > background-repeat ?????? ?????? ??????
      value_error( 'background-repeat' );
      //background ?????? > background-position ?????? ?????? ??????
      value_error( 'background-position' );
      function value_error( target ){
        if( $(e).parents('.'+uk_gist_code_box).attr('data-ex') === target ){
          const txt_clone = $(e).find('.hljs-attribute').clone();

          $(e).find('.hljs-attribute').parent().text('')
          .prepend('<span>'+ code_tab_size +'</span>')
          .append(txt_clone)
          .append('<span>'+ $(e).parents('.'+uk_gist_code_box).attr('data-text') +'</span>');
        }
      }

      //animation ????????? ?????? ?????????
      if( $(e).parents('.'+uk_gist_code_box).attr('data-ex') === 'animation-abbreviated-declaration' ){
        $(e).find('.hljs-attribute').each(function(j, k){
          const txt_clone = $(k).clone();
          let ex_text;
          ex_text = $(e).parents('.'+uk_gist_code_box).attr('data-ex-text'+(j+1));

          const each_split = ex_text.split(':')[1].replace(/\t/gi, '').replace(/\n/gi, '');
          ex_text = ':' + each_split;

          $(k).parent().text('')
          .prepend('<span>'+ code_tab_size +'</span>')
          .append(txt_clone).append(ex_text);

        });
      }

      //@media part-1 style ?????? ??????(style ?????? ??????)
      if( $(e).parents('.'+uk_gist_code_box).attr('data-ex') === 'style_tag_remove' ){
        //$('[data-ex="style_tag_remove"]').each(function(){});
        $(e).find('.'+uk_gist_code_line).first().remove();
        $(e).find('.css').first().remove();
        $(e).find('.'+uk_gist_code_line).last().remove();
        $(e).find('.css').last().remove();
        $(e).parents('.'+uk_gist_code_box).find('.line_number > li').slice(0, 2).remove();
      }

      //uk_gist_code_wrap each end -------------------------------------------------------------------------------------
    });
  }, 500);
}


//terminal_code_box
function terminal_code_box(){
  const terminal_code_box = 'terminal_code_box';
  const terminal_pre = 'terminal_pre';
  const terminal_code = 'terminal_code';
  const code_tab_size = '  ';

  $('.'+terminal_code_box).each(function(i, e){
    const str = $(e).find('textarea').val()
    .replace(/\t/gi, code_tab_size); // tab????????? ????????????(4???)??? ??????

    //----------------------------------------------------------------------------------------

    //????????? ????????? ???????????? ??????
    const line = str.split('\n');
    const lineLength = line.length - 1;

    //?????? ????????? ?????? ?????? ???????????? tab ?????? ??????
    const line_tab_split = line[0].trim().split('')[0];
    const line_tab_size = line[0].split(line_tab_split)[0];

    //----------------------------------------------------------------------------------------

    //????????? ??? ?????? ??????
    let str_content = '';
    for( i=0; i<lineLength; i++ ){
      //?????? ????????? ?????? ?????? ???????????? tab ?????? ??????
      if( line[i].match(line_tab_size) ){
        line[i] = line[i].replace(line_tab_size, '');
      }

      if( line[i].match('//') ){
        let note_split = line[i].split('//');
        let note_split_t = note_split[0].trim().split('')[note_split[0].trim().split('').length-1];
        let note_b_space = note_split[0].split(note_split_t)[note_split[0].split(note_split_t).length-1];
        let notes_txt = note_b_space+'//'+note_split[1];
        line[i] = line[i].replace(notes_txt, '');
        str_content += '<span data-note="'+notes_txt+'">' + line[i] + '</span>\n';
      }
      else{
        str_content += '<span>' + line[i] + '</span>\n';
      }

    }

    //----------------------------------------------------------------------------------------

    $(e).append(
      '<pre class="'+terminal_pre+'">' +
      '<code class="'+terminal_code+'">'+str_content+'</code>' +
      '</pre>'
    );
    $(e).find('textarea').remove();
  });
}



//gist_code
function gist_code(){
  function qsa(sel){
    return Array.apply(null, document.querySelectorAll(sel));
  }
  qsa(".gist_code").forEach(function(e){
    var gistFrame = document.createElement("iframe");
    gistFrame.setAttribute("width", "100%");

    var gist_code_wrap = e.querySelector('.gist_code_wrap');
    gist_code_wrap.appendChild(gistFrame).classList.add('gist_iframe');
    var gist_iframe = e.querySelector('.gist_iframe');

    var gist_url = e.getAttribute('data-url');
    var gist_inner_html = '' +
      '<html style="margin:0; padding:0;">' +
      '<body style="margin:0; padding:0;">' +
      '<scr'+'ipt type="text/javascript" src="'+gist_url+'"></sc'+'ript>' +
      '</body>' +
      '</html>' +
      '';
    var gistFrameDoc = gistFrame.document;
    if (gistFrame.contentDocument) {
      gistFrameDoc = gistFrame.contentDocument;
    } else if (gistFrame.contentWindow) {
      gistFrameDoc = gistFrame.contentWindow.document;
    }
    gistFrameDoc.open();
    gistFrameDoc.writeln(gist_inner_html);
    gistFrameDoc.close();
  });
}
function gist_auto_height(){
  $('.gist_iframe').each(function(i, e){
    var each_height = 0;
    setTimeout(function(){
      var height_target = $(e).contents().find('.gist-file')
      each_height = height_target.outerHeight();
      height_target.css('margin','0');
      $(e).height(each_height);

      if( !height_target.find('.gist-meta a').first().attr('target') ){
        height_target.find('.gist-meta a').attr('target','_blank');
      }
    }, 400);

    $(e).contents().find('.gist').addClass('testClass');
  });
}






//??? ????????? element ????????? ?????????
/*
setTimeout(function(){
	$('.'+side_menu+' a').each(function(i, e){
		if( $(e).text().match('element') ){
			var txt_split = $(e).text().split(' ');
			var element_txt = txt_split[txt_split.length-1];
			var tag_txt;
			if( txt_split.length <= 2 ) tag_txt = txt_split[0];
			else tag_txt = txt_split[0] + ' ' + txt_split[1];
			$(e).html('<b>'+ tag_txt+'</b> <i>'+element_txt+'</i>');
		}
	});
}, loadingStartTime+50);
*/

//touchFlow
/*
$('.'+side_menu).touchFlow({
	axis : "y",
	page : "li.on",
	speed: 100,
	scrollbar: true,
	scrollbarAutoHide:false,
});
*/
//swiper
/*
var side_swiper = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	direction: 'vertical',
	spaceBetween: 0,
	speed: 200,
	mousewheel: {
		forceToAxis: true,
		invert: true,
		sensitivity: 0.5,
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		//draggable: true,
		//snapOnRelease:false,
	},
	initialSlide : d3_on,
});
console.log(d3_on);
*/

//???????????? ?????? ??????
/*
var depth1, depth2, depth3, depth4;
$assetsLink_area.children().append('<ul class="depth1"></ul>');
depth1 = $assetsLink_area.find('.depth1');
for( a=0; a<menu.length; a++ ){
	depth1.append('<li><a href="'+ menu[a].d1_url +'" class="'+uk_link+'">'+ menu[a].d1_nm +'</a></li>');
}
depth1.find('li').each(function(a, b){
	var d2 = menu[a].d2;
	if( typeof d2 !== 'undefined' ){
		$(b).append('<ul class="depth2"></ul>');
		depth2 = $(b).find('.depth2');

		//depth2 ??????
		for( c=0; c<d2.length; c++ ){
			depth2.append('<li><a href="'+ d2[c].d2_url +'" class="'+uk_link+'">'+ d2[c].d2_nm +'</a></li>'); //<span> ' +d2[c].d2_url+'</span>
		}
		depth2.find('li').each(function(c, d){
			var d3 = menu[a].d2[c].d3;
			if( typeof d3 !== 'undefined' ){
				$(d).append('<ul class="depth3"></ul>');
				depth3 = $(d).find('.depth3');

				//depth3 ??????
				for( e=0; e<d3.length; e++ ){
					depth3.append('<li><a href="'+ d3[e].d3_url +'" class="'+uk_link+'">'+ d3[e].d3_nm + '</a></li>'); //<span> ' +d3[e].d3_url+'</span>
				}
				depth3.find('li').each(function(e, f){
					var d4 = menu[a].d2[c].d3[e].d4;
					if( typeof d4 !== 'undefined' ){
						$(f).append('<ul class="depth4"></ul>');
						depth4 = $(f).find('.depth4');

						//depth4 ??????
						for( g=0; g<d4.length; g++ ){
							depth4.append('<li><a href="'+ d4[g].d4_url +'" class="'+hash_link+'">'+ d4[g].d4_nm + '</a></li>'); //<span> ' +d3[e].d3_url+'</span>
						}
					}
				});
			}
		});
	}
});
*/
