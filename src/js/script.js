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

list_container_content[i].addEventListener("click", function(){
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

// CHICKEN ANIMATION

var chicken 								= {};
chicken.elements						= {};
chicken.elements.container	= document.querySelector('.chicken_character');

chicken.elements.container.addEventListener( 'click', function( event )
{
	event.preventDefault();
	
	chicken.elements.container.classList.add( 'active' );
	
	window.setTimeout( function()
	{
		chicken.elements.container.classList.remove( 'active' );
	}, 100 );
} );

var food = 10;
var sleeping = false;
var has_bought_element = false;

//faut faire le code : quand on achète un élément on passe la var has_bought_element à true pour un temps très court (pour faire apparaitre les coeurs et les faire disparaitre après) --> sauf si il dort --> ne pas passer à true : window set timeout

setInterval(function()
{ 
	if ( (food < 5) && (food > 0) ) {
		if ( !chicken.elements.container.classList.contains('sad') )
			chicken.elements.container.classList.add('sad');
	}
	else if (food <= 0)
	{
		if ( chicken.elements.container.classList.contains('sad') )
			chicken.elements.container.classList.remove('sad');
		if ( !chicken.elements.container.classList.contains('dead') )
			chicken.elements.container.classList.add('dead');
	}
	else
	{
		if ( chicken.elements.container.classList.contains('sad') )
			chicken.elements.container.classList.remove('sad');
		if ( chicken.elements.container.classList.contains('dead') )
			chicken.elements.container.classList.remove('dead');
	}
	
	if (sleeping == true)
	{
		if ( !chicken.elements.container.classList.contains('sleeping') )
			chicken.elements.container.classList.add('sleeping');
	}
	else
	{
		if ( chicken.elements.container.classList.contains('sleeping') )
			chicken.elements.container.classList.remove('sleeping');
	}
	
	if (has_bought_element == true)
	{
		if ( !chicken.elements.container.classList.contains('happy') )
			chicken.elements.container.classList.add('happy');
	}
	
}, 1000);