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

document.querySelector('.menu_btn').addEventListener('click', function(event){

	event.preventDefault();
	if (menu_state == 1){
		upgrades.classList.remove('menu_actived');
		menu_state = 0;
	}
	else {
		upgrades.classList.add('menu_actived');
		menu_state = 1;
	}

	

});

// CHICKEN ANIMATION

var chicken 								= {};
chicken.elements						= {};
chicken.elements.container	= document.querySelector('.chicken_character');

var cackle = new Audio('./src/cackle_chicken.mp3');
//var soundtrack = new Audio('./src/soundtrack.mp3');
chicken.elements.container.addEventListener( 'click', function( event )
{
	cackle.play();
	cackle.currentTime = 0;
	
	event.preventDefault();
	
	chicken.elements.container.classList.add( 'active' );
	
	window.setTimeout( function()
	{
		chicken.elements.container.classList.remove( 'active' );
	}, 100 );
} );

/** canvas_noon_evening **/

var state_time = document.querySelector('.pause_btn');
	day_time   = document.querySelector('.day_time');

state_time.addEventListener('click', function(event){
	event.preventDefault();

	if (day_state == 'night'){
		day_state = 'day';
		document.querySelector('.black_screen_bot').style.opacity = "0";
		document.querySelector('.black_screen_top').style.opacity = "0";
		chicken.elements.container.classList.remove('sleeping');
	}
	else {
		day_state = 'night';
		document.querySelector('.black_screen_bot').style.opacity = "0.5";
		document.querySelector('.black_screen_top').style.opacity = "0.5";
		chicken.elements.container.classList.add('sleeping');
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

var day_state = 'day'; // day | night

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



// var food = 10;
// var has_bought_element = false;

// //faut faire le code : quand on achète un élément on passe la var has_bought_element à true pour un temps très court (pour faire apparaitre les coeurs et les faire disparaitre après) --> sauf si il dort --> ne pas passer à true : window set timeout

// setInterval(function()
// { 
// 	if ( (food < 5) && (food > 0) ) {
// 		if ( !chicken.elements.container.classList.contains('sad') )
// 			chicken.elements.container.classList.add('sad');
// 	}
// 	else if (food <= 0)
// 	{
// 		if ( chicken.elements.container.classList.contains('sad') )
// 			chicken.elements.container.classList.remove('sad');
// 		if ( !chicken.elements.container.classList.contains('dead') )
// 			chicken.elements.container.classList.add('dead');
// 	}
// 	else
// 	{
// 		if ( chicken.elements.container.classList.contains('sad') )
// 			chicken.elements.container.classList.remove('sad');
// 		if ( chicken.elements.container.classList.contains('dead') )
// 			chicken.elements.container.classList.remove('dead');
// 	}

	
// 	if (has_bought_element == true)
// 	{
// 		if ( !chicken.elements.container.classList.contains('happy') )
// 			chicken.elements.container.classList.add('happy');
// 	}


//var food = 10;
//var sleeping = false;
//var has_bought_element = false;

//faut faire le code : quand on achète un élément on passe la var has_bought_element à true pour un temps très court (pour faire apparaitre les coeurs et les faire disparaitre après) --> sauf si il dort --> ne pas passer à true : window set timeout

//setInterval(function()
//{ 
//	if ( (food < 5) && (food > 0) ) {
//		if ( !chicken.elements.container.classList.contains('sad') )
//			chicken.elements.container.classList.add('sad');
//	}
//	else if (food <= 0)
//	{
//		if ( chicken.elements.container.classList.contains('sad') )
//			chicken.elements.container.classList.remove('sad');
//		if ( !chicken.elements.container.classList.contains('dead') )
//			chicken.elements.container.classList.add('dead');
//	}
//	else
//	{
//		if ( chicken.elements.container.classList.contains('sad') )
//			chicken.elements.container.classList.remove('sad');
//		if ( chicken.elements.container.classList.contains('dead') )
//			chicken.elements.container.classList.remove('dead');
//	}
//	
//	if (sleeping == true)
//	{
//		if ( !chicken.elements.container.classList.contains('sleeping') )
//			chicken.elements.container.classList.add('sleeping');
//	}
//	else
//	{
//		if ( chicken.elements.container.classList.contains('sleeping') )
//			chicken.elements.container.classList.remove('sleeping');
//	}
//	
//	if (has_bought_element == true)
//	{
//		if ( !chicken.elements.container.classList.contains('happy') )
//			chicken.elements.container.classList.add('happy');
//	}
//	
//}, 1000);