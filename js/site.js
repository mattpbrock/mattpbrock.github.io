

$(document).ready(function(){
	
	var pagePath = window.location.pathname;
	
	$('.nav__item').each(function(){
		if(!$(this).hasClass('nav__item--spacer')){
			var h = $(this).find('a').attr('href').split('/')[1];
			if(pagePath.search(h) > -1){
				$(this).addClass('nav__item--active');
			}
		}
	});
	
});

