
var basic_url = location.href;

var data = 'data=Assets&'
var url_html =          '?'+data+'HTML&';
var url_css =			'?'+data+'CSS&';
var url_javascript =    '?'+data+'JAVASCRIPT&';
var url_accessibility = '?'+data+'ACCESSIBILITY&';
var url_ncs =			'?'+data+'NCS&';
var url_framework =			'?'+data+'FRAMEWORK&';

//var data_guide =			'data=Guide&';
//var url_framework = '?'+data_guide+'FRAMEWORK&';

var file =      '/assets/';
var file_html = file+'01-html';
var file_css =  file+'02-css';
var file_js =   file+'03-javascript';
var file_acc =  file+'04-accessibility';
var file_ncs =  file+'05-ncs';
var file_framework =  file+'06-framework';

var file_project_guide =  file+'_project_guide';
//var file_framework = file_project_guide+'/framework';

var menu = [
	{
		d1_nm:	'UI/UX Assets',
		d1_url:		url_html+'htmlStart&html_start',
		d2:[
			//HTML ------------------------------------------------//
			{
				d2_nm:	    'HTML',
				d2_url:		url_html+ 'htmlStart&html_start',
				d2_info:	file_html+ '/info.html',
				d3:[
					//HTML 시작
					{
						d3_nm:	    'HTML 시작',
						d3_url:		url_html+ 'htmlStart&html_start',
						d3_file:	file_html+ '/01-htmlStart/',
						d3_note:	false,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'HTML이란?',
								d4_url:		url_html+ 'htmlStart&html_start',
								d4_file:	file_html+ '/01-htmlStart/01-html_start.html',
								html5:		false,
							},
							{
								d4_nm:	    'HTML 기본구조',
								d4_url:		url_html+ 'htmlStart&html_basic',
								d4_file:	file_html+ '/01-htmlStart/02-html_basic.html',
								html5:		false,
							},
							{
								d4_nm:  	'HTML 요소',
								d4_url:		url_html+ 'htmlStart&html_element',
								d4_file:	file_html+ '/01-htmlStart/03-html_element.html',
								html5:		false,
							},
						]
					},

					//블록 요소 vs 인라인 요소
					{
						d3_nm:	    '블록 요소 vs 인라인 요소',
						d3_url:		url_html+'blockInline&block_element',
						d3_file:	file_html+'/02-blockInline/',
						d3_note:	true,
						d3_refer:	false,
						d4:[
							{
								d4_nm:	    '블록 요소',
								d4_url:		url_html+'blockInline&block_element',
								d4_file:	file_html+'/02-blockInline/01-block_element.html',
								html5:		false,
							},
							{
								d4_nm:		'대표적인 블록 요소 - div',
								d4_url:		url_html+'blockInline&div_block',
								d4_file:	file_html+'/02-blockInline/02-div_block.html',
								html5:	    false,
							},
							{
								d4_nm:	    '인라인 요소',
								d4_url:		url_html+'blockInline&inline_element',
								d4_file:	file_html+'/02-blockInline/03-inline_element.html',
								html5:		false,
							},
							{
								d4_nm:	    '대표적인 인라인 요소 - span',
								d4_url:		url_html+'blockInline&span_inline',
								d4_file:	file_html+'/02-blockInline/04-span_inline.html',
								html5:		false,
							},
							{
								d4_nm:	    '요소 중첩',
								d4_url:		url_html+'blockInline&element_nesting',
								d4_file:	file_html+'/02-blockInline/05-element_nesting.html',
								html5:		false,
							},
							{
								d4_nm:  	'단일 요소 또는 빈 요소',
								d4_url:		url_html+'blockInline&only_empty',
								d4_file:	file_html+'/02-blockInline/06-only_empty.html',
								html5:		false,
							},
						]
					},

					//섹션 콘텐츠(Section content)
					{
						d3_nm:	    '섹션 콘텐츠(Section Content)',
						d3_url:		url_html+ 'sections&header_element',
						d3_file:	file_html+'/03-sections/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'header element',
								d4_url:		url_html+ 'sections&header_element',
								d4_file:	file_html+'/03-sections/01-header_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'heading(h1~h6) element',
								d4_url:		url_html+ 'sections&heading_element',
								d4_file:	file_html+'/03-sections/02-heading_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'section element',
								d4_url:		url_html+ 'sections&section_element',
								d4_file:	file_html+'/03-sections/03-section_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'nav element',
								d4_url:		url_html+ 'sections&nav_element',
								d4_file:	file_html+'/03-sections/04-nav_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'article element',
								d4_url:		url_html+ 'sections&article_element',
								d4_file:	file_html+'/03-sections/05-article_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'footer element',
								d4_url:		url_html+ 'sections&footer_element',
								d4_file:	file_html+'/03-sections/06-footer_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'aside element',
								d4_url:		url_html+ 'sections&aside_element',
								d4_file:	file_html+'/03-sections/07-aside_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'hgroup element',
								d4_url:		url_html+ 'sections&hgroup_element',
								d4_file:	file_html+'/03-sections/08-hgroup_element.html',
								html5:		true,
							},
						]
					},

					//콘텐츠 그룹화(Grouping content)
					{
						d3_nm:  	'콘텐츠 그룹화(Grouping content)',
						d3_url:		url_html+'grouping&main_element',
						d3_file:	file_html+'/04-grouping/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'main element',
								d4_url:		url_html+'grouping&main_element',
								d4_file:	file_html+'/04-grouping/01-main_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'p element',
								d4_url:		url_html+'grouping&p_element',
								d4_file:	file_html+'/04-grouping/02-p_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'ol element',
								d4_url:		url_html+'grouping&ol_element',
								d4_file:	file_html+'/04-grouping/03-ol_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'ul element',
								d4_url:		url_html+'grouping&ul_element',
								d4_file:	file_html+'/04-grouping/04-ul_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'li element',
								d4_url:		url_html+'grouping&li_element',
								d4_file:	file_html+'/04-grouping/05-li_element.html',
								html5:		false,
							},
							{
								d4_nm:      'dl element',
								d4_url:		url_html+'grouping&dl_element',
								d4_file:	file_html+'/04-grouping/06-dl_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'dt element',
								d4_url:		url_html+'grouping&dt_element',
								d4_file:	file_html+'/04-grouping/07-dt_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'dd element',
								d4_url:		url_html+'grouping&dd_element',
								d4_file:	file_html+'/04-grouping/08-dd_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'address element',
								d4_url:		url_html+'grouping&address_element',
								d4_file:	file_html+'/04-grouping/09-address_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'figure element',
								d4_url:		url_html+'grouping&figure_element',
								d4_file:	file_html+'/04-grouping/10-figure_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'figcaption element',
								d4_url:		url_html+'grouping&figcaption_element',
								d4_file:	file_html+'/04-grouping/11-figcaption_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'pre element',
								d4_url:		url_html+'grouping&pre_element',
								d4_file:	file_html+'/04-grouping/12-pre_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'blockquote element',
								d4_url:		url_html+'grouping&blockquote_element',
								d4_file:	file_html+'/04-grouping/13-blockquote_element.html',
								html5:		false,
							},
						]
					},

					//문자 컨텐츠(Text-level semantics)
					{
						d3_nm:	    '문자 컨텐츠(Text-level semantics)',
						d3_url:		url_html+'textLevel&a_element',
						d3_file:	file_html+'/05-textLevel/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:      'a element',
								d4_url:		url_html+'textLevel&a_element',
								d4_file:	file_html+'/05-textLevel/01-a_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'em element',
								d4_url:		url_html+'textLevel&em_element',
								d4_file:	file_html+'/05-textLevel/02-em_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'i element',
								d4_url:		url_html+'textLevel&i_element',
								d4_file:	file_html+'/05-textLevel/03-i_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'strong element',
								d4_url:		url_html+'textLevel&strong_element',
								d4_file:	file_html+'/05-textLevel/04-strong_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'b element',
								d4_url:		url_html+'textLevel&b_element',
								d4_file:	file_html+'/05-textLevel/05-b_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'br element',
								d4_url:		url_html+'textLevel&br_element',
								d4_file:	file_html+'/05-textLevel/06-br_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'small element',
								d4_url:		url_html+'textLevel&small_element',
								d4_file:	file_html+'/05-textLevel/07-small_element.html',
								html5:		false,
							},
							{
								d4_nm:  	's element',
								d4_url:		url_html+'textLevel&s_element',
								d4_file:	file_html+'/05-textLevel/08-s_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'cite element',
								d4_url:		url_html+'textLevel&cite_element',
								d4_file:	file_html+'/05-textLevel/09-cite_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'sub element',
								d4_url:		url_html+'textLevel&sub_element',
								d4_file:	file_html+'/05-textLevel/10-sub_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'sup element',
								d4_url:		url_html+'textLevel&sup_element',
								d4_file:	file_html+'/05-textLevel/11-sup_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'mark element',
								d4_url:		url_html+'textLevel&mark_element',
								d4_file:	file_html+'/05-textLevel/12-mark_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'q element',
								d4_url:		url_html+'textLevel&q_element',
								d4_file:	file_html+'/05-textLevel/13-q_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'code element',
								d4_url:		url_html+'textLevel&code_element',
								d4_file:	file_html+'/05-textLevel/14-code_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'var element',
								d4_url:		url_html+'textLevel&var_element',
								d4_file:	file_html+'/05-textLevel/15-var_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'abbr element',
								d4_url:		url_html+'textLevel&abbr_element',
								d4_file:	file_html+'/05-textLevel/16-abbr_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'data element',
								d4_url:		url_html+'textLevel&data_element',
								d4_file:	file_html+'/05-textLevel/17-data_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'time element',
								d4_url:		url_html+'textLevel&time_element',
								d4_file:	file_html+'/05-textLevel/18-time_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'samp element',
								d4_url:		url_html+'textLevel&samp_element',
								d4_file:	file_html+'/05-textLevel/19-samp_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'kbd element',
								d4_url:		url_html+'textLevel&kbd_element',
								d4_file:	file_html+'/05-textLevel/20-kbd_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'bdi element',
								d4_url:		url_html+'textLevel&bdi_element',
								d4_file:	file_html+'/05-textLevel/21-bdi_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'bdo element',
								d4_url:		url_html+'textLevel&bdo_element',
								d4_file:	file_html+'/05-textLevel/22-bdo_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'wbr element',
								d4_url:		url_html+'textLevel&wbr_element',
								d4_file:	file_html+'/05-textLevel/23-wbr_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'ruby element',
								d4_url:		url_html+'textLevel&ruby_element',
								d4_file:	file_html+'/05-textLevel/24-ruby_element.html',
								html5:		true,
							},
						]
					},

					//내장 컨텐츠(Embedded content)
					{
						d3_nm:  	'내장 컨텐츠(Embedded content)',
						d3_url:		url_html+'embedded&iframe_element',
						d3_file:	file_html+'/06-embedded/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'iframe element',
								d4_url:		url_html+'embedded&iframe_element',
								d4_file:	file_html+'/06-embedded/01-iframe_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'img element',
								d4_url:		url_html+'embedded&img_element',
								d4_file:	file_html+'/06-embedded/02-img_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'map element',
								d4_url:		url_html+'embedded&map_element',
								d4_file:	file_html+'/06-embedded/03-map_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'area element',
								d4_url:		url_html+'embedded&area_element',
								d4_file:	file_html+'/06-embedded/04-area_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'video element',
								d4_url:		url_html+'embedded&video_element',
								d4_file:	file_html+'/06-embedded/05-video_element.html',
								html5:		true
							},
							{
								d4_nm:  	'audio element',
								d4_url:		url_html+'embedded&audio_element',
								d4_file:	file_html+'/06-embedded/06-audio_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'track element',
								d4_url:		url_html+'embedded&track_element',
								d4_file:	file_html+'/06-embedded/07-track_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'picture element',
								d4_url:		url_html+'embedded&picture_element',
								d4_file:	file_html+'/06-embedded/08-picture_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'source element',
								d4_url:		url_html+'embedded&source_element',
								d4_file:	file_html+'/06-embedded/09-source_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'svg element',
								d4_url:		url_html+'embedded&svg_element',
								d4_file:	file_html+'/06-embedded/10-svg_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'embed element',
								d4_url:		url_html+'embedded&embed_element',
								d4_file:	file_html+'/06-embedded/11-embed_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'object element',
								d4_url:		url_html+'embedded&object_element',
								d4_file:	file_html+'/06-embedded/12-object_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'param element',
								d4_url:		url_html+'embedded&param_element',
								d4_file:	file_html+'/06-embedded/13-param_element.html',
								html5:		false,
							},
						]
					},

					//수정(edits)
					{
						d3_nm:	    '수정(edits)',
						d3_url:		url_html+'edits&del_element',
						d3_file:	file_html+'/07-edits/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:  	'del(Deleted Text) element',
								d4_url:		url_html+'edits&del_element',
								d4_file:	file_html+'/07-edits/01-del_element.html',
								html5:		false,
							},
							{
								d4_nm:      'ins(insert) element',
								d4_url:		url_html+'edits&ins_element',
								d4_file:	file_html+'/07-edits/02-ins_element.html',
								html5:		false,
							},
						]
					},

					//표 데이터(Tabular data)
					{
						d3_nm:  	'표 데이터(Tabular data)',
						d3_url:		url_html+'table&table_element',
						d3_file:	file_html+'/08-table/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'table element',
								d4_url:		url_html+'table&table_element',
								d4_file:	file_html+'/08-table/01-table_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'caption element',
								d4_url:		url_html+'table&caption_element',
								d4_file:	file_html+'/08-table/02-caption_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'colgroup element',
								d4_url:		url_html+'table&colgroup_element',
								d4_file:	file_html+'/08-table/03-colgroup_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'col element',
								d4_url:		url_html+'table&col_element',
								d4_file:	file_html+'/08-table/04-col_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'thead element',
								d4_url:		url_html+'table&thead_element',
								d4_file:	file_html+'/08-table/05-thead_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'tbody element',
								d4_url:		url_html+'table&tbody_element',
								d4_file:	file_html+'/08-table/06-tbody_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'tfoot element',
								d4_url:		url_html+'table&tfoot_element',
								d4_file:	file_html+'/08-table/07-tfoot_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'tr element',
								d4_url:		url_html+'table&tr_element',
								d4_file:	file_html+'/08-table/08-tr_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'th element',
								d4_url:		url_html+'table&th_element',
								d4_file:	file_html+'/08-table/09-th_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'td element',
								d4_url:		url_html+'table&td_element',
								d4_file:	file_html+'/08-table/10-td_element.html',
								html5:		false,
							},
						]
					},

					//폼(forms)
					{
						d3_nm:	    '폼(forms)',
						d3_url:		url_html+'forms&form_element',
						d3_file:	file_html+'/09-forms/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'form element',
								d4_url:		url_html+'forms&form_element',
								d4_file:	file_html+'/09-forms/01-form_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'label element',
								d4_url:		url_html+'forms&label_element',
								d4_file:	file_html+'/09-forms/02-label_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'input element',
								d4_url:		url_html+'forms&input_element_part1',
								d4_file:	file_html+'/09-forms/03-input_element_part1.html',
								html5:		false,
								part:     true,
								part_div : [
									{
										part_nm :   'part-1',
										part_tab :  'input <em>part-1</em>',
										part_url :  url_html+'forms&input_element_part1',
										part_file : file_html+'/09-forms/03-input_element_part1.html',
									},
									{
										part_nm :   'part-2',
										part_tab :  'input <em>part-2</em>',
										part_url :  url_html+'forms&input_element_part2',
										part_file : file_html+'/09-forms/03-input_element_part2.html',
									},
									{
										part_nm :   'part-3',
										part_tab :  'input <em>part-3</em>',
										part_url :  url_html+'forms&input_element_part3',
										part_file : file_html+'/09-forms/03-input_element_part3.html',
									},
								],
							},
							{
								d4_nm:  	'button element',
								d4_url:		url_html+'forms&button_element',
								d4_file:	file_html+'/09-forms/04-button_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'select element',
								d4_url:		url_html+'forms&select_element',
								d4_file:	file_html+'/09-forms/05-select_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'optgroup element',
								d4_url:		url_html+'forms&optgroup_element',
								d4_file:	file_html+'/09-forms/06-optgroup_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'option element',
								d4_url:		url_html+'forms&option_element',
								d4_file:	file_html+'/09-forms/07-option_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'datalist element',
								d4_url:		url_html+'forms&datalist_element',
								d4_file:	file_html+'/09-forms/08-datalist_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'textarea element',
								d4_url:		url_html+'forms&textarea_element',
								d4_file:	file_html+'/09-forms/09-textarea_element.html',
								html5:		false,
							},
							{
								d4_nm:	    'output element',
								d4_url:		url_html+'forms&output_element',
								d4_file:	file_html+'/09-forms/10-output_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'progress element',
								d4_url:		url_html+'forms&progress_element',
								d4_file:	file_html+'/09-forms/11-progress_element.html',
								html5:		true,
							},
							{
								d4_nm:	    'meter element',
								d4_url:		url_html+'forms&meter_element',
								d4_file:	file_html+'/09-forms/12-meter_element.html',
								html5:		true,
							},
							{
								d4_nm:  	'fieldset element',
								d4_url:		url_html+'forms&fieldset_element',
								d4_file:	file_html+'/09-forms/13-fieldset_element.html',
								html5:		false,
							},
							{
								d4_nm:  	'legend element',
								d4_url:		url_html+'forms&legend_element',
								d4_file:	file_html+'/09-forms/14-legend_element.html',
								html5:		false,
							},
						]
					},

					//HTML 문서구조
					{
						d3_nm:  	'HTML 문서구조',
						d3_url:		url_html+'structure&html4_document',
						d3_file:	file_html+'/10-structure/',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'HTML4에서의 문서 구조',
								d4_url:		url_html+'structure&html4_document',
								d4_file:	file_html+'/10-structure/01-html4_document.html',
								html5:		false,
							},
							{
								d4_nm:	    'HTML5에서의 문서 구조',
								d4_url:		url_html+'structure&html5_document',
								d4_file:	file_html+'/10-structure/02-html5_document.html',
								html5:		false,
							},
							{
								d4_nm:	    '프레임셋 문서 구조',
								d4_url:		url_html+'structure&frameset_document',
								d4_file:	file_html+'/10-structure/03-frameset_document.html',
								html5:		false,
							},
						]
					},

					//컨텐츠 모델(Content models)
					{
						d3_nm:	    '콘텐츠 모델(Content models)',
						d3_url:		url_html+'models',
						d3_file:	file_html+'/11-models/models.html',
						d3_note:	false,
						d3_refer:	true,
					},

					//참조 사이트
					{
						d3_nm:	    '참조 사이트',
						d3_url:		url_html+'bookmark',
						d3_file:	file_html+'/12-bookmark/bookmark.html',
						d3_note:	false,
						d3_refer:	false,
					},
				]
			},

			//CSS --------------------------------------------------//
			{
				d2_nm:	    'CSS',
				d2_url:		url_css+'cssStart&css_intro',
				d2_info:	file_css+ '/info.html',
				d3:[
					//CSS 시작하기
					{
						d3_nm:	    'CSS 시작',
						d3_url:		url_css+'cssStart&css_intro',
						d3_file:	file_css+'/01-cssStart/cssStart.html',
						d3_note:	false,
						d3_refer:	true,
						d4:[
							{
								d4_nm:	    'CSS란?',
								d4_url:		url_css+'cssStart&css_intro',
								d4_file:	file_css+'/01-cssStart/01-css_intro.html',
								html5:		false,
							},
							{
								d4_nm:	    'CSS를 사용하는 이유?',
								d4_url:		url_css+'cssStart&css_reason',
								d4_file:	file_css+'/01-cssStart/02-css_reason.html',
								html5:		false,
							},
							{
								d4_nm:	    'CSS의 발전',
								d4_url:		url_css+'cssStart&css_history',
								d4_file:	file_css+'/01-cssStart/03-css_history.html',
								html5:		false,
							},
							{
								d4_nm:  	'CSS 모듈과 표준화 과정',
								d4_url:		url_css+'cssStart&css_modules',
								d4_file:	file_css+'/01-cssStart/04-css_modules.html',
								html5:		false,
							},
							{
								d4_nm:	    'CSS의 문법',
								d4_url:		url_css+'cssStart&css_syntax',
								d4_file:	file_css+'/01-cssStart/05-css_syntax.html',
								html5:		false,
							},
							{
								d4_nm:	    'CSS 선언방식',
								d4_url:		url_css+'cssStart&css_apply',
								d4_file:	file_css+'/01-cssStart/06-css_apply.html',
								html5:		false,
							},
							{
								d4_nm:	    'CSS 상속과 캐스케이딩',
								d4_url:		url_css+'cssStart&css_cascading',
								d4_file:	file_css+'/01-cssStart/07-css_cascading.html',
								html5:		false,
							},
						]
					},

					//CSS 초급
					{
						d3_nm:  	'CSS 초급',
						d3_url:		url_css+'cssBeginner&css_units',
						d3_file:	file_css+'/02-cssBeginner/cssBeginner.html',
						d3_note:	true,
						d3_refer:	true,
						d4:[
							{
								d4_nm:  	'CSS 단위',
								d4_url:		url_css+'cssBeginner&css_units',
								d4_file:	file_css+'/02-cssBeginner/01-css_units.html',
								html5:		false,
							},
							{
								d4_nm:  	'CSS 선택자 level 1, 2',
								d4_url:		url_css+'cssBeginner&css_selectors_level1',
								d4_file:	file_css+'/02-cssBeginner/02-css_selectors_level1.html',
								html5:		false,
                part:       true,
                part_div : [
                  {
                    part_nm :   'part-1',
                    part_tab :  'CSS 선택자 level 1, 2 <em>part-1</em>',
                    part_url :  url_css+'cssBeginner&css_selectors_level1_part1',
                    part_file : file_css+'/02-cssBeginner/02-css_selectors_level1_part1.html',
                  },
                  {
                    part_nm :   'part-2',
                    part_tab :  'CSS 선택자 level 1, 2 <em>part-2</em>',
                    part_url :  url_css+'cssBeginner&css_selectors_level1_part2',
                    part_file : file_css+'/02-cssBeginner/02-css_selectors_level1_part2.html',
                  },
                ],
							},
							{
								d4_nm:  	'Color 속성',
								d4_url:		url_css+'cssBeginner&css_color',
								d4_file:	file_css+'/02-cssBeginner/03-css_color.html',
								html5:		false,
							},
							{
								d4_nm:  	'Font 속성',
								d4_url:		url_css+'cssBeginner&css_font',
								d4_file:	file_css+'/02-cssBeginner/04-css_font.html',
								html5:		false,
							},
							{
								d4_nm:  	'Text 속성',
								d4_url:		url_css+'cssBeginner&css_text',
								d4_file:	file_css+'/02-cssBeginner/05-css_text.html',
								html5:		false,
							},
							{
								d4_nm:  	'Background 속성',
								d4_url:		url_css+'cssBeginner&css_background',
								d4_file:	file_css+'/02-cssBeginner/06-css_background.html',
								html5:		false,
							},
							{
								d4_nm:  	'List 속성',
								d4_url:		url_css+'cssBeginner&css_list',
								d4_file:	file_css+'/02-cssBeginner/07-css_list.html',
								html5:		false,
							},
							{
								d4_nm:	    'Table 속성',
								d4_url:		url_css+'cssBeginner&css_table',
								d4_file:	file_css+'/02-cssBeginner/08-css_table.html',
								html5:		false,
							},
							{
								d4_nm:	    '박스 모델 속성',
								d4_url:		url_css+'cssBeginner&css_boxmodel',
								d4_file:	file_css+'/02-cssBeginner/09-css_boxmodel.html',
								html5:		false,
                part:       true,
                part_div : [
                  {
                    part_nm :   'part-1',
                    part_tab :  '박스 모델 속성 <em>part-1</em>',
                    part_url :  url_css+'cssBeginner&css_boxmodel_part1',
                    part_file : file_css+'/02-cssBeginner/09-css_boxmodel_part1.html',
                  },
                  {
                    part_nm :   'part-2',
                    part_tab :  '박스 모델 속성 <em>part-2</em>',
                    part_url :  url_css+'cssBeginner&css_boxmodel_part2',
                    part_file : file_css+'/02-cssBeginner/09-css_boxmodel_part2.html',
                  },
                ],
							},
							{
								d4_nm:	    '시각적인 속성',
								d4_url:		url_css+'cssBeginner&css_effects',
								d4_file:	file_css+'/02-cssBeginner/10-css_effects.html',
								html5:		false,
							},
							{
								d4_nm:  	'위치 속성',
								d4_url:		url_css+'cssBeginner&css_formatting',
								d4_file:	file_css+'/02-cssBeginner/11-css_formatting.html',
								html5:		false,
							},
							{
								d4_nm:  	'사용자 인터페이스 속성',
								d4_url:		url_css+'cssBeginner&css_interface',
								d4_file:	file_css+'/02-cssBeginner/12-css_interface.html',
								html5:		false,
							},
						]
					},

					//CSS 중급
					{
						d3_nm:      'CSS 중급',
						d3_url:		url_css+'cssMiddleclass&css_selectors_level3',
						d3_file:	file_css+'/03-cssMiddleclass/cssMiddleclass.html',
						d3_note:	true,
						d3_refer:	false,
						d4:[
							{
								d4_nm:	    'CSS 선택자 level 3',
								d4_url:		url_css+'cssMiddleclass&css_selectors_level3',
								d4_file:	file_css+'/03-cssMiddleclass/01-css_selectors_level3.html',
								html5:		false,
                part:       true,
                part_div : [
                  {
                    part_nm :   'part-1',
                    part_tab :  'CSS 선택자 level 3 <em>part-1</em>',
                    part_url :  url_css+'cssMiddleclass&css_selectors_level3_part1',
                    part_file : file_css+'/03-cssMiddleclass/01-css_selectors_level3_part1.html',
                  },
                  {
                    part_nm :   'part-2',
                    part_tab :  'CSS 선택자 level 3 <em>part-2</em>',
                    part_url :  url_css+'cssMiddleclass&css_selectors_level3_part2',
                    part_file : file_css+'/03-cssMiddleclass/01-css_selectors_level3_part2.html',
                  },
                ],
							},
							{
								d4_nm:	    '가상 요소',
								d4_url:		url_css+'cssMiddleclass&css_content',
								d4_file:	file_css+'/03-cssMiddleclass/02-css_content.html',
								html5:		false,
							},
							{
								d4_nm:  	'CSS 카운터',
								d4_url:		url_css+'cssMiddleclass&css_counter',
								d4_file:	file_css+'/03-cssMiddleclass/03-css_counter.html',
								html5:		false,
							},
							{
								d4_nm:  	'접두어',
								d4_url:		url_css+'cssMiddleclass&css_vendor',
								d4_file:	file_css+'/03-cssMiddleclass/04-css_vendor.html',
								html5:		false,
							},
							{
								d4_nm:  	'IR 기법',
								d4_url:		url_css+'cssMiddleclass&css_ir',
								d4_file:	file_css+'/03-cssMiddleclass/05-css_ir.html',
								html5:		false,
							},
							{
								d4_nm:	    'CSS3 Module',
								d4_url:		url_css+'cssMiddleclass&css_module3_part1',
								d4_file:	file_css+'/03-cssMiddleclass/06-css_module3_part1.html',
								html5:		false,
								part:       true,
								part_div : [
									{
										part_nm :   'part-1',
										part_tab :  'CSS3 Module <em>part-1</em>',
										part_url :  url_css+'cssMiddleclass&css_module3_part1',
										part_file : file_css+'/03-cssMiddleclass/06-css_module3_part1.html',
									},
									{
										part_nm :   'part-2',
										part_tab :  'CSS3 Module <em>part-2</em>',
										part_url :  url_css+'cssMiddleclass&css_module3_part2',
										part_file : file_css+'/03-cssMiddleclass/06-css_module3_part2.html',
									},
								],
							},
							{
								d4_nm:  	'@규칙(At-Rule)',
								d4_url:		url_css+'cssMiddleclass&css_atrule',
								d4_file:	file_css+'/03-cssMiddleclass/07-css_atrule.html',
								html5:		false,
							},
							{
								d4_nm:  	'@font-face',
								d4_url:		url_css+'cssMiddleclass&css_fontface',
								d4_file:	file_css+'/03-cssMiddleclass/08-css_fontface.html',
								html5:		false,
							},
							{
								d4_nm:	    '@media',
								d4_url:		url_css+'cssMiddleclass&css_media',
								d4_file:	file_css+'/03-cssMiddleclass/09-css_media.html',
								html5:		false,
								part:       true,
								part_div : [
									{
										part_nm :   'part-1',
										part_tab :  '@media <em>part-1</em>',
										part_url :  url_css+'cssMiddleclass&css_media_part1',
										part_file : file_css+'/03-cssMiddleclass/09-css_media_part1.html',
									},
									{
										part_nm :   'part-2',
										part_tab :  '@media <em>part-2</em>',
										part_url :  url_css+'cssMiddleclass&css_media_part2',
										part_file : file_css+'/03-cssMiddleclass/09-css_media_part2.html',
									},
								],
							},
							{
								d4_nm:	    'CSS 속성 선언순서',
								d4_url:		url_css+'cssMiddleclass&css_attr_rule',
								d4_file:	file_css+'/03-cssMiddleclass/10-css_attr_rule.html',
								html5:		false,
							},
						]
					},

					//CSS 고급
					{
						d3_nm:	    'CSS 고급',
						d3_url:		url_css+'cssAdvanced&css_transform',
						d3_file:	file_css+'/04-cssAdvanced/cssAdvanced.html',
						d3_note:	true,
						d3_refer:	false,
						d4:[
							/*
							{
								d4_nm:  	'미디어 쿼리',
								d4_url:		url_css+'cssAdvanced&css_mediaquery',
								html5:		false,
							},
							{
								d4_nm:	    'Print',
								d4_url:		url_css+'cssAdvanced&css_print',
								html5:		false,
							},
							*/
							{
								d4_nm:	    'Transform',
								d4_url:		url_css+'cssAdvanced&css_transform',
								d4_file:	file_css+'/04-cssAdvanced/01-css_transform.html',
								html5:		false,
								part:       true,
								part_div : [
									{
										part_nm :   '2D',
										part_tab :  'Transform 2D',
										part_url :  url_css+'cssAdvanced&css_transform_part1',
										part_file : file_css+'/04-cssAdvanced/01-css_transform_part1.html',
									},
									{
										part_nm :   '3D',
										part_tab :  'Transform 3D',
										part_url :  url_css+'cssAdvanced&css_transform_part2',
										part_file : file_css+'/04-cssAdvanced/01-css_transform_part2.html',
									},
								],
							},
							{
								d4_nm:	    'Transition',
								d4_url:		url_css+'cssAdvanced&css_transition',
								d4_file:	file_css+'/04-cssAdvanced/02-css_transition.html',
								html5:		false,
							},
							{
								d4_nm:  	'Animation',
								d4_url:		url_css+'cssAdvanced&css_animation',
								d4_file:	file_css+'/04-cssAdvanced/03-css_animation.html',
								html5:		false,
							},
							{
								d4_nm:  	'플렉서블 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_flexible',
								d4_file:	file_css+'/04-cssAdvanced/04-css_flexible.html',
								html5:		false,
								part:       true,
								part_div : [
									{
										part_nm :   '소개 및 요약',
										part_tab :  '소개 및 요약',
										part_url :  url_css+'cssAdvanced&css_flexible_part1',
										part_file : file_css+'/04-cssAdvanced/04-css_flexible_part1.html',
									},
									{
										part_nm :   '부모 속성',
										part_tab :  '부모 속성',
										part_url :  url_css+'cssAdvanced&css_flexible_part2',
										part_file : file_css+'/04-cssAdvanced/04-css_flexible_part2.html',
									},
									{
										part_nm :   '자식 속성 및 데모',
										part_tab :  '자식 속성 및 데모',
										part_url :  url_css+'cssAdvanced&css_flexible_part3',
										part_file : file_css+'/04-cssAdvanced/04-css_flexible_part3.html',
									},
								],
							},
							{
								d4_nm:  	'그리드 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_grid',
								d4_file:	file_css+'/04-cssAdvanced/05-css_grid.html',
								html5:		false,
								part:       true,
								part_div : [
									{
										part_nm :   '요약, 함수, 단위',
										part_tab :  '요약, 함수, 단위',
										part_url :  url_css+'cssAdvanced&css_grid_part1',
										part_file : file_css+'/04-cssAdvanced/05-css_grid_part1.html',
									},
									{
										part_nm :   '명시적, 암시적',
										part_tab :  '명시적, 암시적',
										part_url :  url_css+'cssAdvanced&css_grid_part2',
										part_file : file_css+'/04-cssAdvanced/05-css_grid_part2.html',
									},
									{
										part_nm :   '부모 속성',
										part_tab :  '부모 속성',
										part_url :  url_css+'cssAdvanced&css_grid_part3',
										part_file : file_css+'/04-cssAdvanced/05-css_grid_part3.html',
									},
									{
										part_nm :   '자식 속성',
										part_tab :  '자식 속성',
										part_url :  url_css+'cssAdvanced&css_grid_part4',
										part_file : file_css+'/04-cssAdvanced/05-css_grid_part4.html',
									},
									{
										part_nm :   '가이드, 데모',
										part_tab :  '가이드, 데모',
										part_url :  url_css+'cssAdvanced&css_grid_part5',
										part_file : file_css+'/04-cssAdvanced/05-css_grid_part5.html',
									},
								],
							},
							{
								d4_nm:	    '멀티 컬럼 레이아웃',
								d4_url:		url_css+'cssAdvanced&css_multicolumn',
								d4_file:	file_css+'/04-cssAdvanced/06-css_multicolumn.html',
								html5:		false,
							},
							/*
							{
								d4_nm:	    'CSS 선택자 level 4',
								d4_url:		url_css+'cssAdvanced&css_selectors_level4',
								d4_file:	file_css+'/04-cssAdvanced/07-css_selectors_level4.html',
								html5:		false,
							},
							*/
						]
					},

					//UI/UX 구현
					/*
					{
						d3_nm:	    'UI/UX 구현(가이드로 이동 예정)',
						d3_url:		url_css+'uiux',
						d3_file:	file_css+'/05-uiux/uiux.html',
						d3_note:	false,
						d3_refer:	false,
					},
					*/

					//참조 사이트
					{
						d3_nm:  	'참조 사이트',
						d3_url:		url_css+'bookmark',
						d3_file:	file_css+'/06-bookmark/bookmark.html',
						d3_note:	false,
						d3_refer:	false,
					},
				]
			},

			//JAVASCRIPT ----------------------------------------//
      /*
			{
				d2_nm:	    'JAVASCRIPT',
				//d2_url: 	url_javascript+'javascript',
				d2_url:		'#',
				d2_info:	file_js+ '/info.html',
			},
			*/

			//ACCESSIBILITY --------------------------------------//
			{
        d2_nm:	  'ACCESSIBILITY',
        d2_url:		url_accessibility+ 'waStart',
        d2_info:	file_acc+ '/info.html',
        d3:[
          //웹 접근성이란?
          {
            d3_nm:	    '웹 접근성이란?',
            d3_url:		url_accessibility+ 'waStart',
            d3_file:	file_acc+ '/01-waStart/01-waStart.html',
            d3_note:	false,
            d3_refer:	true,
          },

          //WA 인증 마크란?
          {
            d3_nm:	    'WA 인증 마크란?',
            d3_url:		url_accessibility+ 'waMark',
            d3_file:	file_acc+ '/02-waMark/01-waMark.html',
            d3_note:	false,
            d3_refer:	true,
          },

          //KWCAG 2.1 개요
          {
            d3_nm:	    'KWCAG 2.1 개요',
            d3_url:		url_accessibility+ 'waKwcag',
            d3_file:	file_acc+ '/03-waKwcag/01-waKwcag.html',
            d3_note:	false,
            d3_refer:	true,
          },

          //웹 접근성을 고려한 콘텐츠 제작 방법
          {
            d3_nm:	    '웹 접근성을 고려한 콘텐츠 제작 방법',
            d3_url:		url_accessibility+ 'waContents',
            d3_file:	file_acc+ '/04-waContents/01-waContents.html',
            d3_note:	false,
            d3_refer:	true,
          },

          //인식의 용이성(perceivable)
          {
            d3_nm:	    '인식의 용이성(perceivable)',
            d3_url:		url_accessibility+ 'waPerceivable&text',
            d3_file:	file_acc+ '/05-waPerceivable/01-text.html',
            d3_note:	false,
            d3_refer:	true,
            d4:[
              {
                d4_nm:	    '대체 텍스트',
                d4_url:		url_accessibility+ 'waPerceivable&text',
                d4_file:	file_acc+ '/05-waPerceivable/01-text.html',
                html5:		false,
              },
              {
                d4_nm:	    '멀티미디어 대체 수단',
                d4_url:		url_accessibility+ 'waPerceivable&media',
                d4_file:	file_acc+ '/05-waPerceivable/02-media.html',
                html5:		false,
              },
              {
                d4_nm:	    '명료성',
                d4_url:		url_accessibility+ 'waPerceivable&clarity',
                d4_file:	file_acc+ '/05-waPerceivable/03-clarity.html',
                html5:		false,
              },
            ]
          },

          //운용의 용이성(operable)
          {
            d3_nm:	    '운용의 용이성(operable)',
            d3_url:		url_accessibility+ 'waOperable&input_devices',
            d3_file:	file_acc+ '/06-waOperable/01-input_devices.html',
            d3_note:	false,
            d3_refer:	true,
            d4:[
              {
                d4_nm:	    '입력장치 접근성',
                d4_url:		url_accessibility+ 'waOperable&input_devices',
                d4_file:	file_acc+ '/06-waOperable/01-input_devices.html',
                html5:		false,
              },
              {
                d4_nm:	    '충분한 시간 제공',
                d4_url:		url_accessibility+ 'waOperable&enough_time',
                d4_file:	file_acc+ '/06-waOperable/02-enough_time.html',
                html5:		false,
              },
              {
                d4_nm:	    '광과민성 발작 예방',
                d4_url:		url_accessibility+ 'waOperable&seizures',
                d4_file:	file_acc+ '/06-waOperable/03-seizures.html',
                html5:		false,
              },
              {
                d4_nm:	    '쉬운 내비게이션',
                d4_url:		url_accessibility+ 'waOperable&easy_navigation',
                d4_file:	file_acc+ '/06-waOperable/04-easy_navigation.html',
                html5:		false,
              },
            ]
          },

          //이해의 용이성(understandable)
          {
            d3_nm:	    '이해의 용이성(understandable)',
            d3_url:		url_accessibility+ 'waUnderstandable&readable',
            d3_file:	file_acc+ '/07-waUnderstandable/01-readable.html',
            d3_note:	false,
            d3_refer:	true,
            d4:[
              {
                d4_nm:	    '가독성',
                d4_url:		url_accessibility+ 'waUnderstandable&readable',
                d4_file:	file_acc+ '/07-waUnderstandable/01-readable.html',
                html5:		false,
              },
              {
                d4_nm:	    '예측 가능성',
                d4_url:		url_accessibility+ 'waUnderstandable&predictable',
                d4_file:	file_acc+ '/07-waUnderstandable/02-predictable.html',
                html5:		false,
              },
              {
                d4_nm:	    '콘텐츠의 논리성',
                d4_url:		url_accessibility+ 'waUnderstandable&logical_order',
                d4_file:	file_acc+ '/07-waUnderstandable/03-logical_order.html',
                html5:		false,
              },
              {
                d4_nm:	    '입력 도움',
                d4_url:		url_accessibility+ 'waUnderstandable&input_assistance',
                d4_file:	file_acc+ '/07-waUnderstandable/04-input_assistance.html',
                html5:		false,
              },
            ]
          },

          //견고성(robust)
          {
            d3_nm:	    '견고성(robust)',
            d3_url:		url_accessibility+ 'waRobust&markup',
            d3_file:	file_acc+ '/08-waRobust/01-markup.html',
            d3_note:	false,
            d3_refer:	true,
            d4:[
              {
                d4_nm:	    '문법 준수',
                d4_url:		url_accessibility+ 'waRobust&markup',
                d4_file:	file_acc+ '/08-waRobust/01-markup.html',
                html5:		false,
              },
              {
                d4_nm:	    '웹 애플리케이션 접근성',
                d4_url:		url_accessibility+ 'waRobust&waa',
                d4_file:	file_acc+ '/08-waRobust/02-waa.html',
                html5:		false,
              },
            ]
          },

          //WCAG 2.1
          {
            d3_nm:	    'WCAG 2.1',
            d3_url:		url_accessibility+ 'waWcag&perceivable',
            d3_file:	file_acc+ '/09-waWcag/01-perceivable.html',
            d3_note:	false,
            d3_refer:	true,
            d4:[
              {
                d4_nm:	    '인식의 용이성(Perceivable)',
                d4_url:		url_accessibility+ 'waWcag&perceivable',
                d4_file:	file_acc+ '/09-waWcag/01-perceivable.html',
                html5:		false,
              },
              {
                d4_nm:	    '운용의 용이성(Operable)',
                d4_url:		url_accessibility+ 'waWcag&operable',
                d4_file:	file_acc+ '/09-waWcag/02-operable.html',
                html5:		false,
              },
              {
                d4_nm:	    '이해의 용이성(Understandable)',
                d4_url:		url_accessibility+ 'waWcag&understandable',
                d4_file:	file_acc+ '/09-waWcag/03-understandable.html',
                html5:		false,
              },
              {
                d4_nm:	    '견고성(Robust)',
                d4_url:		url_accessibility+ 'waWcag&robust',
                d4_file:	file_acc+ '/09-waWcag/04-robust.html',
                html5:		false,
              },
            ]
          },

          //KWACG2.1 VS WCAG 2.1 비교
          {
            d3_nm:	    'KWACG2.1 VS WCAG 2.1 비교',
            d3_url:		url_accessibility+ 'waVs',
            d3_file:	file_acc+ '/10-waVs/01-waVs.html',
            d3_note:	false,
            d3_refer:	true,
          },

          //WAI-ARIA
          {
            d3_nm:	    'WAI-ARIA',
            d3_url:		url_accessibility+ 'waAria',
            d3_file:	file_acc+ '/11-waAria/01-waAria.html',
            d3_note:	false,
            d3_refer:	true,
          },

          //참조 사이트
          {
            d3_nm:	    '참조 사이트',
            d3_url:		url_accessibility+ 'bookmark',
            d3_file:	file_acc+ '/12-bookmark/01-bookmark.html',
            d3_note:	false,
            d3_refer:	false,
          },
        ],
			},

			//NCS ---------------------------------------------------//
      /*
			{
				d2_nm:	    'NCS',
				//d2_url:		url_ncs+'ncs',
				d2_url:		'#',
				d2_info:	file_ncs+ '/info.html',
			},
			*/
      /*
			{
				d2_nm:	    'JAVASCRIPT',
				//d2_url: 	url_javascript+'javascript',
				d2_url:		'#',
				d2_info:	file_js+ '/info.html',
			},
			*/

      //FRAMEWORK --------------------------------------//
      {
        d2_nm:	  'FRAMEWORK',
        d2_url:		url_framework+ 'gulp&gulp_start',
        d2_info:	file_framework+ '/info.html',
        d3:[
          //인식의 용이성(perceivable)
          {
            d3_nm:	    'Gulp',
            d3_url:		url_framework+ 'gulp&gulp_start',
            d3_file:	file_framework+ '/01-gulp/01-gulp_start.html',
            d3_note:	true,
            d3_refer:	true,
            d4:[
              {
                d4_nm:	  '걸프(Gulp)란?',
                d4_url:		url_framework+ 'gulp&gulp_start',
                d4_file:	file_framework+ '/01-gulp/01-gulp_start.html',
                html5:		false,
              },
              {
                d4_nm:	  'Gulp 설치 및 SCSS 컴파일러 설치',
                d4_url:		url_framework+ 'gulp&gulp_scss',
                d4_file:	file_framework+ '/01-gulp/02-gulp_scss.html',
                html5:		false,
              },
              {
                d4_nm:  	'HTML과 웹서버',
                d4_url:		url_framework+ 'gulp&html_webserver',
                d4_file:	file_framework+ '/01-gulp/03-html_webserver.html',
                html5:		false,
              },
              {
                d4_nm:  	'Watch와 BrowserSync',
                d4_url:		url_framework+ 'gulp&watch_browsersync',
                d4_file:	file_framework+ '/01-gulp/04-watch_browsersync.html',
                html5:		false,
              },
              /*
              {
                d4_nm:  	'layout',
                d4_url:		url_framework+ 'gulp&html_layout',
                d4_file:	file_framework+ '/01-gulp/05-layout_part1.html',
                html5:		false,
                part:     true,
                part_div : [
                  {
                    part_nm :   'file-include',
                    part_tab :  '<em>file-include</em>',
                    part_url :  url_framework+'gulp&html_layout_part1',
                    part_file : file_framework+'/01-gulp/05-layout_part1.html',
                  },
                  {
                    part_nm :   'nunjucks-render',
                    part_tab :  '<em>nunjucks-render</em>',
                    part_url :  url_framework+'gulp&html_layout_part2',
                    part_file : file_framework+'/01-gulp/05-layout_part2.html',
                  },
                ],
              },
              {
                d4_nm:  	'HTML Tamplate',
                d4_url:		url_framework+ 'gulp&html_tamplate',
                d4_file:	file_framework+ '/01-gulp/05-html_tamplate.html',
                html5:		false,
              },
              */
              {
                d4_nm:  	'HTML Tamplate',
                d4_url:		url_framework+ 'gulp&html_tamplate',
                d4_file:	file_framework+ '/01-gulp/05-html_tamplate_part1.html',
                html5:		false,
                part:     true,
                part_div : [
                  {
                    part_nm :   'njk 문법',
                    part_tab :  '<em>njk 문법</em>',
                    part_url :  url_framework+'gulp&html_tamplate_part1',
                    part_file : file_framework+'/01-gulp/05-html_tamplate_part1.html',
                  },
                  {
                    part_nm :   'njk 설치 및 적용',
                    part_tab :  '<em>njk 설치 및 적용</em>',
                    part_url :  url_framework+'gulp&html_tamplate_part2',
                    part_file : file_framework+'/01-gulp/05-html_tamplate_part2.html',
                  },
                ],
              },
              {
                d4_nm:  	'속도 개선과 파일 및 오류 관리',
                d4_url:		url_framework+ 'gulp&file_management',
                d4_file:	file_framework+ '/01-gulp/06-file_management.html',
                html5:		false,
              },
              /*
              {
                d4_nm:  	'Assets관리(상)',
                d4_url:		url_framework+ 'gulp&gulp_five',
                d4_file:	file_framework+ '/01-gulp/06-gulp_five.html',
                html5:		false,
              },
              {
                d4_nm:  	'Assets관리(하)',
                d4_url:		url_framework+ 'gulp&gulp_third',
                d4_file:	file_framework+ '/01-gulp/06-gulp_six.html',
                html5:		false,
              },
              {
                d4_nm:  	'파일관리 del',
                d4_url:		url_framework+ 'gulp&gulp_third',
                d4_file:	file_framework+ '/01-gulp/07-gulp_seven.html',
                html5:		false,
              },
              */
            ]
          },
        ],
      },
		]
	},
	{
		d1_nm:	    'UI/UX Guide', //UI/UX GUIDE
		//d1_url:		  url_framework+ 'Gulp&Gulp_first',
		d1_url:		'#',
		//d1_file:	file+ '/project_guide.html',
    /*
    d2:[
      //framework ------------------------------------------------//
      {
        d2_nm:	    'FRAMEWORK',
        d2_url:		url_framework+ 'Gulp&Gulp_first',
        d2_info:	file_framework+ '/info.html',
        d3:[
          //Gulp
          {
            d3_nm:	    'Gulp',
            d3_url:		url_framework+ 'Gulp&Gulp_first',
            d3_file:	file_framework+ '/gulp/01-gulp01.html',
            d3_note:	false,
            d3_refer:	false,
            d4:[
              {
                d4_nm:	  'Gulp 01',
                d4_url:		url_framework+ 'Gulp&Gulp_first',
                d4_file:	file_framework+ '/gulp/01-gulp01.html',
                html5:		false,
              },
              {
                d4_nm:	  'Gulp 02',
                d4_url:		url_framework+ 'Gulp&Gulp_second',
                d4_file:	file_framework+ '/gulp/01-gulp02.html',
                html5:		false,
              },
              {
                d4_nm:  	'Gulp 03',
                d4_url:		url_framework+ 'Gulp&Gulp_third',
                d4_file:	file_framework+ '/gulp/01-gulp03.html',
                html5:		false,
              },
            ]
          },
        ]
      },
    ]
    */
	},
  /*
	{
		d1_nm:	    'Web Trends',
		//d1_url:		'?'+data+'=Trends',
		d1_url:		'#',
		d1_file:	file+ '/web_trends.html',
	}
	*/
];






