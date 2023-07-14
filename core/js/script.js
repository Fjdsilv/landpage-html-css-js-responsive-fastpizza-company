/*PRELOADER*/
document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.querySelector("#preloader");
		if(!preloader.classList.contains("done")){
			preloader.classList.add("done");
		}	
	}, 2000);
}
/*RESPONSIVE MENU*/
var btn = document.querySelector('#menu-resp');

function change() {
	btn.classList.toggle('toggle');
}	

/*BUTTO SCROLLTOP*/
var sctop = document.querySelector("#stop");
window.onscroll = function(){stop()};
function stop(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		sctop.style.display = "block";
	}
	else{
		sctop.style.display = "none";
	}
}

function rtop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


/*SCROLLREVEAL*/
window.sr = ScrollReveal({
	duration: 1000,
	easing: 'ease',
	mobile: true,
	reset: true,
	viewFactor: 0.4,
});

sr.reveal('.animb', {
	distance: '20px',
	origin: 'top',
});
		  
sr.reveal('.anim00', {
	distance: '50px',
	origin: 'top',
});
	 
sr.reveal('.anim01',{
	distance: '70px',
	origin: 'left',
});
			
sr.reveal('.anim02',{
	distance: '70px',
	origin: 'right',
});
		
/*NAV STICKY*/
$('.js--sec00').waypoint(function(direction){
	if(direction === 'down'){
		$('nav').addClass('sticky');
	}
	else{
		$('nav').removeClass('sticky');
	}
},

{
	offset:'60px;'
});

