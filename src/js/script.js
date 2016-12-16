// list_tabs         = [];

// list_tabs_content = document.querySelector('.tabs_content');
// list_tabs_lis     = list_tabs.content.querySelectorAll('.stats');
// console.log(list_tabs_lis)

// upgrades                     = [];

// upgrades_consumables         = document.querySelector('.consumables');

list = [];

list_container         = document.querySelector('.tabs_content');
list_container_content = list_container.querySelectorAll('ul li');

var upgrades = document.querySelector('.upgrades');

improvements_content = upgrades.querySelector('.improvements_content');
consumables_content  = upgrades.querySelector('.consumables_content');
boosts_content       = upgrades.querySelector('.boosts_content');

for (i=0; i < list_container_content.length ; i++){

list_container_content[i].addEventListener("click", function(event){
	event.preventDefault();
	var value_list = this.getAttribute('value'); 
	for (i=0; i < list_container_content.length ; i++){
		list_container_content[i].style.backgroundColor = "#e67e22";
	}
	this.style.backgroundColor = "#f28d4f";
	if (value_list == 1){
		improvements_content.classList.add('is-selected');
		boosts_content.classList.remove('is-selected');
		consumables_content.classList.remove('is-selected');
	}
	else if (value_list == 2){
		improvements_content.classList.remove('is-selected');
		boosts_content.classList.add('is-selected');
		consumables_content.classList.remove('is-selected');
	}
	else if (value_list == 3){
		improvements_content.classList.remove('is-selected');
		boosts_content.classList.remove('is-selected');
		consumables_content.classList.add('is-selected');
	}

	// var value_list = list_container_content(this).getAttribute('value');
	// var val = list_container.querySelector(this).getAttribute('value');
	// var value_list = this.getAttribute('value');

});

}

var menu_state;
	menu_btn = document.querySelector('.menu_btn');

menu_btn.addEventListener('click', function(event){

	event.preventDefault();
	if (menu_state == 1){
		upgrades.classList.remove('menu_actived');
		menu_state = 0;
		menu_btn.classList.remove('left');
	}
	else {
		upgrades.classList.add('menu_actived');
		menu_state = 1;
		menu_btn.classList.add('left');
	}

	

});

// CHICKEN ANIMATION

var chicken 								= {};
chicken.elements						= {};
chicken.elements.container	= document.querySelector('.chicken_character');
chicken.elements.picture	= document.querySelector('.chicken_picture');
	
var day_state = 'day';

/** canvas_noon_evening **/

var state_time = document.querySelector('.pause_btn');
	day_time   = document.querySelector('.day_time');
	bar_pause = state_time.querySelector('polygon');
	bar_play  = state_time.querySelectorAll('path');

state_time.addEventListener('click', function(event){
	event.preventDefault();

	if (day_state == 'night'){
		day_state = 'day';
		document.querySelector('.black_screen_bot').style.opacity = "0";
		document.querySelector('.black_screen_top').style.opacity = "0";
		for (var u = 0; u < bar_play.length; u++){
			bar_play[u].style.opacity = "1";
		}
		bar_pause.style.opacity = "0";
		
		//display normal chicken
		if ( chicken.elements.container.classList.contains('sleeping') )
			chicken.elements.container.classList.remove('sleeping');

		if ( chicken.elements.picture.classList.contains('sleeping') )
			chicken.elements.picture.classList.remove('sleeping');
		
		//launch day soundtrack
		soundtrack.setAttribute('src','src/music/day_soundtrack.mp3');
		
		chicken_thirst_animation();
		chicken_hunger_animation();
	
	} else {
		day_state = 'night';
		document.querySelector('.black_screen_bot').style.opacity = "0.5";
		document.querySelector('.black_screen_top').style.opacity = "0.5";
		console.log(bar_play);
		for (var u = 0; u < bar_play.length; u++){
			bar_play[u].style.opacity = "0";
		}
		bar_pause.style.opacity = "1";
		//display sleeping chicken
		if ( !chicken.elements.container.classList.contains('sleeping') )
			chicken.elements.container.classList.add('sleeping');
		
		if ( !chicken.elements.picture.classList.contains('sleeping') )
			chicken.elements.picture.classList.add('sleeping');
		
		if ( chicken.elements.container.classList.contains('sad') )
			chicken.elements.container.classList.remove('sad');

		if ( chicken.elements.picture.classList.contains('sad') )
			chicken.elements.picture.classList.remove('sad');
		
		//launch night soundtrack
		soundtrack.setAttribute('src','src/music/night_soundtrack.mp3');
		
		reverse_chicken_thirst_animation();
		reverse_chicken_hunger_animation();
	}
});

var canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");

function resize() {

	if (window.matchMedia("(max-width: 39.9375em)").matches) {
 		canvas.width = window.innerWidth;
    	canvas.height = window.innerHeight;
	} else {
	    canvas.width = window.innerWidth -350;
    	canvas.height = window.innerHeight;
	}
}
window.addEventListener('resize', resize);
resize();

var j = 0;

var sun = function(color, r) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(0, 0, r, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
}

var moon = function(x, y, color, r){
	context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI, true);
  context.closePath();
  context.fill();
}

// context.translate(canvas.width/2, canvas.height/2);
// context.rotate(360 * Math.PI / 180);
// context.translate(canvas.width/2 - 100, 0 - canvas.height/2 + 100);
// sun('yellow', 50);

context.beginPath();
context.arc(canvas.width/2 + 420, canvas.height/2 - 300, 50, 0, 2 * Math.PI, true);    
context.fillStyle="yellow";
context.fill();
context.closePath();

function loop() {
	
	window.requestAnimationFrame(loop);
  
	// rotate + move along x
  if (day_state == 'night'){
		if (j <=360) {
	    context.clearRect(0,0,canvas.width, canvas.height);
	    context.save();
		  context.translate(canvas.width/2, canvas.height/2);
	    context.rotate(j * Math.PI / 180);
	    context.translate(canvas.width/2 - 100, 0 - canvas.height/2 + 100);
	    
			if (j <= 100){
	    	sun('yellow', 50);
	    }
	    else{
	    	sun('white', 50);
	    }

	    context.restore();

	    j+=3;
	  }
  }
  else {
    if (j >= 0) {
	  	context.clearRect(0,0,canvas.width, canvas.height);
	    context.save();
		  context.translate(canvas.width/2, canvas.height/2);
	    context.rotate(-j * Math.PI / 180);
	    context.translate(canvas.width/2 - 100, 0 - canvas.height/2 + 100);
	    if (j >= 280){
	    	sun('white', 50);
	    }
	    else{
	    	sun('yellow', 50);
	    }
			context.restore();

	    j-=3;
	  }
  }
};

loop();


var cackle_source = ['./src/music/cackle_1.mp3', './src/music/cackle_2.mp3', './src/music/cackle_3.mp3', './src/music/cackle_4.mp3'];
var cackle = new Audio('./src/music/cackle_1.mp3');

/** btn_mute **/

if(localStorage.muted == undefined)
  localStorage.muted = 0;
console.log(Boolean(Number(localStorage.muted)))

var mute_btn   = document.querySelector('.mute_btn');
	speaker    = mute_btn.querySelectorAll('.speaker');
	sound_wave = mute_btn.querySelectorAll('.sound_wave');
	soundtrack = document.querySelector('audio.soundtrack');

if (Boolean(Number(localStorage.muted)) == true)
	{
		for (g = 0; g < sound_wave.length ; g++){
          console.log('sarentreTrue')
			sound_wave[g].style.opacity = '0';
		}
	}
	else {
		for (g = 0; g < sound_wave.length ; g++){
          console.log('sarentre')
			sound_wave[g].style.opacity = '1';
		}	
	}


if (Boolean(Number(localStorage.muted)) == false) {
	cackle.volume = 1;
	soundtrack.volume = 0.7;
} else {
	cackle.volume = 0;
	soundtrack.volume = 0;
}

function chicken_cackle_random() {
	var cackle_random = Math.floor(Math.random() * cackle_source.length);
	cackle = new Audio(cackle_source[cackle_random]);
}

chicken.elements.container.addEventListener( 'click', function( event )
{
	if (day_state == 'day') {
		chicken_cackle_random();
		if (Boolean(Number(localStorage.muted)) == false) {
			cackle.volume = 1;
		} else {
			cackle.volume = 0;
		}
		cackle.play();
		cackle.currentTime = 0;
	} 
	
	event.preventDefault();
	
	chicken.elements.container.classList.add( 'active' );
	
	window.setTimeout( function()
	{
		chicken.elements.container.classList.remove( 'active' );
	}, 100 );
} );

mute_btn.addEventListener('click', function(){

	if (Boolean(Number(localStorage.muted)) == true)
	{
		for (g = 0; g < sound_wave.length ; g++){
			sound_wave[g].style.opacity = '1';
		}
		localStorage.muted = 0;
		soundtrack.volume = 0.7;
		cackle.volume = 1;
	}
	else {
		for (g = 0; g < sound_wave.length ; g++){
			sound_wave[g].style.opacity = '0';
		}	
		localStorage.muted = 1;
		soundtrack.volume = 0;
		cackle.volume = 0;
	}

});