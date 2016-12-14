var clicker = {};

clicker.el = {};
clicker.el.container = document.querySelector('.game_content');
clicker.el.container.chicken_house = clicker.el.container.querySelector('.chicken_character');
//clicker.el.container.chicken_house.oeuf = clicker.el.container.chicken_house.querySelector('.oeuf');
clicker.el.container.score = clicker.el.container.querySelector('.number_eggs');

/**UPGRADES**/
//clicker.el.container.upgrades = clicker.el.container.querySelector('.upgrades');
//clicker.el.container.upgrades.upgrade_1 = clicker.el.container.upgrades.querySelector('.upgrade-1');
//clicker.el.container.upgrades.upgrade_1.cost = clicker.el.container.upgrades.upgrade_1.querySelector('.egg-cost');
//clicker.el.container.upgrades.upgrade_1.egg_incrementation = clicker.el.container.upgrades.upgrade_1.querySelector('.egg-incrementation');
//
//clicker.el.container.upgrades.upgrade_2 = clicker.el.container.upgrades.querySelector('.upgrade-2');
//clicker.el.container.upgrades.upgrade_2.cost = clicker.el.container.upgrades.upgrade_2.querySelector('.upgrade-productivity-cost');
//clicker.el.container.upgrades.upgrade_2.time_incrementation = clicker.el.container.upgrades.upgrade_2.querySelector('.time-incrementation');

/**GAMER INTERFACE**/
clicker.el.container.gamer_interface = clicker.el.container.querySelector('.stats');
clicker.el.container.gamer_interface.hunger = clicker.el.container.querySelector('.chicken_starve_bar');
clicker.el.container.gamer_interface.actual_hunger = clicker.el.container.gamer_interface.querySelector('.chicken_starve_bar_content .bar_current_count');

//clicker.el.container.gamer_interface.hunger_max = clicker.el.container.gamer_interface.querySelector('.hunger-max');

clicker.el.container.gamer_interface.hunger_bar = clicker.el.container.gamer_interface.querySelector('.chicken_starve_bar_content');


/**XP**/
clicker.el.container.gamer_interface.xp_bar = clicker.el.container.querySelector('.chicken_lvl_content .bar_current_count');
clicker.el.container.gamer_interface.level = clicker.el.container.querySelector('.current_lvl');


//clicker.el.container.gamer_interface.actual_xp = clicker.el.container.querySelector('.actual-xp');

/**Food**/
//clicker.el.container.upgrades.food = clicker.el.container.upgrades.querySelector('.food');
//clicker.el.container.upgrades.food.food_cost = clicker.el.container.upgrades.food.querySelector('.food-cost');
//
///**God**/
//clicker.el.container.upgrades.upgrade_3 = clicker.el.container.upgrades.querySelector('.upgrade-3');
//clicker.el.container.upgrades.upgrade_3.cost = clicker.el.container.upgrades.upgrade_3.querySelector('.gold-egg-cost');
//
///**House**/
//clicker.el.container.house = clicker.el.container.querySelector('.house');
//clicker.el.container.house.house_cost = clicker.el.container.house.querySelector('.house-cost');
//
///**Automatic Food**/
//clicker.el.container.automatic_food = clicker.el.container.querySelector('.automatic-food');
//clicker.el.container.automatic_food.automatic_food_cost = clicker.el.container.querySelector('.automatic-food-cost');

//localStorage.clear();

function init(){
  console.log("init");
  if(localStorage.upgrade_2 == undefined)
    localStorage.upgrade_2 = 0;
  if(localStorage.upgrade_3 == undefined)
    localStorage.upgrade_3 = 0;
  if(localStorage.automatic_food == undefined)
    localStorage.automatic_food = 0;
  if(localStorage.incrementation == undefined)
    localStorage.incrementation = 1;
  if(localStorage.upgrade_2_delay == undefined)
    localStorage.upgrade_2_delay = 2000;
  if(localStorage.clickcount == undefined)
    localStorage.clickcount = 0;

  /**XP**/
  if(localStorage.level == undefined || localStorage.level == 0){
    localStorage.level = 0;
    clicker.el.container.gamer_interface.xp_bar.setAttribute("value", 5);
  }
  else{
		clicker.el.container.gamer_interface.xp_bar.setAttribute("value", 5 * 2 * Number(localStorage.level));
		clicker.el.container.gamer_interface.level.innerHTML = "lvl " + Number(localStorage.level);
  }

  if(localStorage.actual_xp == undefined){
    localStorage.actual_xp = 0;
  }
  else{
    clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/clicker.el.container.gamer_interface.xp_bar.getAttribute('value') + ')';
  }

  /**Hunger**/
//
//  if(localStorage.actual_hunger == undefined){
//    localStorage.actual_hunger = clicker.el.container.gamer_interface.hunger_max.innerHTML;
//  }
//  else{
//    clicker.el.container.gamer_interface.actual_hunger.innerHTML = Number(localStorage.actual_hunger);
//    clicker.el.container.gamer_interface.hunger_max.innerHTML = 200 + 20 * localStorage.level;
//    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/clicker.el.container.gamer_interface.hunger_max.innerHTML + ')';
//  }
//
//  /**Upgrade 1**/
//  clicker.el.container.upgrades.upgrade_1.cost.innerHTML = 50 * Number(localStorage.incrementation);
//  clicker.el.container.upgrades.upgrade_1.egg_incrementation.innerHTML = Number(localStorage.incrementation) + 1;
//
//  /**Upgrade 2**/
//  clicker.el.container.upgrades.upgrade_2.cost.innerHTML = 150 * ((Number(localStorage.upgrade_2) + 1) * 3);
//
//  if(Number(localStorage.upgrade_2) == 0){
//    clicker.el.container.upgrades.upgrade_2.time_incrementation.innerHTML = '2';
//  }
//  else{
//    clicker.el.container.upgrades.upgrade_2.time_incrementation.innerHTML = (Number(localStorage.upgrade_2_delay) / (Number(localStorage.upgrade_2)))/1000;
//  }
  clicker.el.container.score.innerHTML = localStorage.clickcount;

//  level_check();
}

init();

clicker.el.container.chicken_house.addEventListener('click', function(){
  var random = Math.floor(Math.random()*10);
//  clicker.el.container.chicken_house.oeuf.style.animationPlayState = "running";
//  var elm = this.lastElementChild;
//  var newone = elm.cloneNode(true);
//  elm.parentNode.replaceChild(newone, elm);

  if(random == 0 && Boolean(Number(localStorage.upgrade_3)) == true)
    gold_click_incrementation();
  else
    click_incrementation();
	
level_check_house(Number(localStorage.incrementation));
//  hunger(Number(localStorage.incrementation));
 
});

function click_incrementation(){
  localStorage.clickcount = Number(localStorage.clickcount) + Number(localStorage.incrementation);
  clicker.el.container.score.innerHTML = localStorage.clickcount;
}

function level_check_house(incrementation){
  localStorage.actual_xp = Number(localStorage.actual_xp) + incrementation;
  var xp_max = clicker.el.container.gamer_interface.xp_bar.getAttribute('value');
//  if(localStorage.actual_xp >= xp_max && Number(localStorage.level) == 4 && clicker.el.container.house.style.display == 'block'){
//    localStorage.actual_xp = xp_max;
//    clicker.el.container.gamer_interface.actual_xp.innerHTML = localStorage.actual_xp;
//    clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/Number(clicker.el.container.gamer_interface.xp_max.innerHTML) + ')';
//  }
//  else{
//    xp();
//  }
	xp();
}

function xp(){
  var xp_max = Number(clicker.el.container.gamer_interface.xp_bar.getAttribute('value'));
		console.log(xp_max);
//  clicker.el.container.gamer_interface.actual_xp.innerHTML = localStorage.actual_xp;  
  clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/xp_max + ')';
	console.log(Number(localStorage.actual_xp), xp_max)
  if(localStorage.actual_xp >= xp_max){

    /*XP Gestion*/
    localStorage.level = Number(localStorage.level) + 1;
		
		clicker.el.container.gamer_interface.level.innerHTML = "lvl " + Number(localStorage.level);
		
		console.log(localStorage.level);
    localStorage.actual_xp = 0 + Math.abs((xp_max - Number(localStorage.actual_xp)));
    clicker.el.container.gamer_interface.xp_bar.setAttribute("value", 5 * 2 * Number(localStorage.level));
		clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/xp_max + ')';

    /*Hunger increase*/

//    clicker.el.container.gamer_interface.hunger_max.innerHTML = 200 + 20 * localStorage.level;
//    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/clicker.el.container.gamer_interface.hunger_max.innerHTML + ')';

//    level_check();
  }
}
