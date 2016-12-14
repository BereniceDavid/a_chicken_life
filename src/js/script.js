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
