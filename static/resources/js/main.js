$(window).load(function() {
	jQuery("#preloader").delay(500).fadeOut("slow");
	sliderHeight();
	topMenuAnimate();
	$('.panel-title').children('a').children('.accordion_sign').html('+');
	$('.activePanel').children('a').children('.accordion_sign').html('-');
	$('.main_slider').flexslider({
	animation: "slide",
	direction: "vertical",
	directionNav: false,
	pauseOnHover:true,
	slideshowSpeed: 2500,
	animationSpeed: 500
	});
	var deviceDetect = $(window).width();
	var sliderContentWidth;
	if(deviceDetect<=1024 && deviceDetect>=800)
	{
		sliderContentWidth = 320;
		counter_no = 3
	}
	else if(deviceDetect<=799 && deviceDetect>=768)
	{
		sliderContentWidth =370;
		counter_no = 2
	}
	else if(deviceDetect<=767 && deviceDetect>=480)
	{
		sliderContentWidth =480;
		counter_no = 1
	}
	else
	{
		sliderContentWidth = 292;
		counter_no = 4
	}
	$('.landing_page_slider_container').flexslider({
	animation: "slide",
	animationLoop: true,
	directionNav: true,
	itemWidth: sliderContentWidth,
	controlNav: false,
	itemMargin: counter_no,
	prevText: "",
	nextText: ""
	});
	$('.twitter_slider').flexslider({
	animation: "slide",
	directionNav: false,
	});
});
jQuery(window).resize(function(){
	sliderHeight();
});
jQuery(document).resize(function(){
	sliderHeight();
});
jQuery(document).ready(function(){

		sliderHeight();
		$('img').retina();
		// theme color change function
		$('.preViewsColor a').click(function(){
			$('#themeColorChangeLink').attr({'href':'css/color/'+$(this).attr('data-folderName')+'/style.css'});
			return false;
		});
		$('.single_team_mamber_close').click(function(){
			$('#single_team_mamber_back').css({"display":"none"});
		});
		$('.team_menu').click(function(){
			$('#single_team_mamber_back').css({"display":"block"});
			$(this).attr('data-teamShow');
			$('.all_team').slideUp(0);
			$('.'+$(this).attr('data-teamShow')).slideDown("slow");
			return false;
		});
		$('#formSubmit').click(function(){
			var error = false;
			if(emailValidation('email') == false){
				error = true;
			}
			if(textBoxValidation('name') == false)
			{
				error = true;
			}
			if(error == true)
			{
				return false;
			}
			else
			{
				var uname = $('#name').val();
				var uemail = $('#email').val();
				var umessage = $('#message').val();
				$.ajax({
				type: "POST",
				url: "mailto.php",
				data: { uname: uname, uemail: uemail, umessage: umessage }
				}).done(function( msg ) {
					$('.mail_message').css({"display":"block"});
					$('.mail_message').html(msg);
				});
			}
		})
		topMenuAnimate();
		//main manu scroll and active code start
	    $('.menu_area a[href^="#"] , .team_menu[href^="#"], .single_team_mamber_close[href^="#"]').bind('click.smoothscroll',function (e) {
			e.preventDefault();
			var target = this.hash,
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top-0
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
		$('#nav').onePageNav({
				currentClass: 'active',
				changeHash: false,
				easing: 'swing',
			}
		);
		//main manu scroll and active end
	$('.panel-title').click(function(){
		$('.panel-title').removeClass('activePanel');
		$('.panel-title').children('a').children('.accordion_sign').html('+');
		$(this).children('a').children('.accordion_sign').html('-');
		$(this).addClass('activePanel');
	});
	/*
	// Active BxSlider.
	$('.bxslider').bxSlider();
	*/
	// fotter slider
	/*portfolio_menu */
	$('.portfolio_menu ul li').click(function(){
		$('.portfolio_menu ul li').removeClass('active_prot_menu');
		$(this).addClass('active_prot_menu');
	});
	
	var $container = $('#portfolio');
	$container.isotope({
	  itemSelector: '.col-md-3',
	  layoutMode: 'fitRows'
	});
	/*
	$('.rating_active').mouseover(function(){
		$(this).prevAll().addClass('rating_active');
	});
	*/
	$('#filters').on( 'click', 'a', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	  return false;
	});
});
$(window).scroll(function(){
	topMenuAnimate();
});
function topMenuAnimate(){
		var topSliderHeight = jQuery('#home').height();
		var menuAreaHeight = $('.menu_area').height();
		if($(window).width()>=768){
			if($('body').hasClass('menuTop') && $('body').hasClass('transparentMenu') && jQuery(window).scrollTop()>=menuAreaHeight){
				$('.menu_area').addClass('topFixedMenu');
				$('.main_menu_outer').css({
					"opacity":'1'
				});
			}
			else if($('body').hasClass('menuTop') && jQuery(window).scrollTop()>=menuAreaHeight){
				$('.menu_area').addClass('topFixedMenu');
			}
			else if(jQuery(window).scrollTop()>=topSliderHeight){
				$('.menu_area').addClass('topFixedMenu');
			}
			else
			{
				$('.menu_area').removeClass('topFixedMenu');
				if($('body').hasClass('menuTop') && $('body').hasClass('transparentMenu')){
					$('.main_menu_outer').css({
					"opacity":'0'
				});
				}
			}
		}
		if(!$('body').hasClass('transparentMenu')){
			$('.main_menu_outer').css({
				"min-height":menuAreaHeight
			});
		}
		
}

/* User Input Validation Functions*/
function emailValidation(id){
	var email_compare = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var email = $('#'+id).val();
		if (email == "" || email == " ") {
			$('#'+id).addClass('invalid');
			return false;
		}else if (!email_compare.test(email)) {
			$('#'+id).addClass('invalid');
			return false;
		}
		else
		{
			$('#'+id).removeClass('invalid');
			return true;
		}
}
function textBoxValidation(id){
	var selctor = $('#'+id).val();
	if(selctor == "" || selctor == " ") {
		$('#'+id).addClass('invalid');
		return false;
	}
	else{
		if($('#'+id).hasClass('invalid')){
			$('#'+id).removeClass('invalid');
		}
		return true;
	}
}
function sliderHeight(){
	var sliderConHeight = $('.slider_readmore').height() + $('.main_slider').height();
	var paddingTop = parseInt(($(window).height() - sliderConHeight)/2);
	$('.header_inner').css({"height":$(window).height(),"padding-top":paddingTop})
}


/* Theme Setup icon*/
function themeColorShow(){
	if($('.preViewsMenu_area').hasClass('visibleTrue')){
		jQuery('.preViewsMenu_area').animate({ left: "-263px" }, 500 );
		jQuery('.preViewsMenu_area').removeClass('visibleTrue');
	}
	else{
		jQuery('.preViewsMenu_area').animate({ left: "0" }, 500 );
		jQuery('.preViewsMenu_area').addClass('visibleTrue');
	}
	
}