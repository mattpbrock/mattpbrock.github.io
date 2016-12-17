

$(document).ready(function(){
	
	const pagePath = window.location.pathname;
	
	$('.nav__item').each(function(){
		if(!$(this).hasClass('nav__item--spacer')){
			let h = $(this).find('a').attr('href').split('/')[1];
			if(pagePath.search(h) > -1){
				$(this).addClass('nav__item--active');
			}
		}
		console.log(pagePath.split('/')[1]);
		$('body').addClass('p--' + pagePath.split('/')[1]);
	});
	
});

