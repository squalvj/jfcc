$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
	var w = $(window).width();
	var option;
	if (w >= 993)
 		$("#upcoming-right").stick_in_parent();

 	if (w < 767){
	 	option = {
		    center: true,
		    items:2,
		    loop:true,
		    margin:10,
		}
	}else{
		option = {
		    center: true,
		    items:2,
		    loop:true,
		    margin:10,
		    autoWidth:true
	}
}

 	$('.owl-carousel').owlCarousel(option);
});