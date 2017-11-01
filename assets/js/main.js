$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
	var w = $(window).width();
	var option;
	if (w >= 993)
 		$("#upcoming-right").stick_in_parent();

 	if (w < 767 && w > 576 ){
	 	option = {
		    center: true,
		    items:2,
		    loop:true,
		    margin:10,
		    navContainer: '#inside-navigasi-owl',
		    navText: ["<span class='glyphicon glyphicon-triangle-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span>"],
		    dots:true
		}
	}
	else if(w < 576){
		option = {
		    center: true,
		    items:2,
		    loop:true,
		    margin:10,
		    navContainer: '#inside-navigasi-owl',
		    navText: ["<span class='glyphicon glyphicon-triangle-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span>"],
		    dots:false
		}
	}
	else{
		option = {

			    //nav: true,
			    dots: true,
			    center: true,
			    items:2,
			    loop:true,
			    margin:10,
			    autoWidth:true,
			    navContainer: '#inside-navigasi-owl',
			    navText: ["<span class='glyphicon glyphicon-triangle-left' aria-hidden='true'></span>", "<span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span>"]
		}
	}

 	$('.owl-carousel').owlCarousel(option);
});

