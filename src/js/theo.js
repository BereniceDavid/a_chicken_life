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

/**Hunger**/
clicker.el.container.gamer_interface.hunger = clicker.el.container.querySelector('.chicken_starve_bar');
clicker.el.container.gamer_interface.actual_hunger = clicker.el.container.gamer_interface.querySelector('.chicken_starve_bar_content .bar_current_count');
clicker.el.container.gamer_interface.hunger_bar = clicker.el.container.gamer_interface.querySelector('.chicken_starve_bar_content');

/**Thirst**/

clicker.el.container.gamer_interface.thirst = clicker.el.container.querySelector('.chicken_thirst_bar');
clicker.el.container.gamer_interface.thirst_bar = clicker.el.container.querySelector('.chicken_thirst_bar_content');
clicker.el.container.gamer_interface.actual_thirst = clicker.el.container.gamer_interface.thirst_bar.querySelector('.bar_current_count');

/**xp**/
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

localStorage.clear();

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

  if(localStorage.actual_hunger == undefined){
    localStorage.actual_hunger = clicker.el.container.gamer_interface.actual_hunger.getAttribute('value');
    localStorage.max_hunger = clicker.el.container.gamer_interface.actual_hunger.getAttribute('value');
  }
  else{
    localStorage.max_hunger = 100 + 20 * Number(localStorage.level);
    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/localStorage.max_hunger + ')';
  }

  /**Thirst**/

  if(localStorage.actual_thirst == undefined){
    localStorage.actual_thirst = clicker.el.container.gamer_interface.actual_thirst.getAttribute('value');
    localStorage.max_thirst = clicker.el.container.gamer_interface.actual_thirst.getAttribute('value');
  }
  else{
    localStorage.max_thirst = 50 + 10 * Number(localStorage.level);
    clicker.el.container.gamer_interface.thirst_bar.style.transform = 'scaleX(' + Number(localStorage.actual_thirst)/localStorage.max_thirst + ')';
  }

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
  if(chicken.elements.container.classList.contains('dead') == false){
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
    hunger(Number(localStorage.incrementation));
    thirst(Number(localStorage.incrementation));
  }
});

function click_incrementation(){
  localStorage.clickcount = Number(localStorage.clickcount) + Number(localStorage.incrementation);
  clicker.el.container.score.innerHTML = localStorage.clickcount;
}

/*************

XP Gestion

*************/

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
  //  clicker.el.container.gamer_interface.actual_xp.innerHTML = localStorage.actual_xp;  
  clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/xp_max + ')';
  if(localStorage.actual_xp >= xp_max){

    /*XP Gestion*/
    localStorage.level = Number(localStorage.level) + 1;

    clicker.el.container.gamer_interface.level.innerHTML = "lvl " + Number(localStorage.level);

    console.log(localStorage.level);
    localStorage.actual_xp = 0 + Math.abs((xp_max - Number(localStorage.actual_xp)));
    clicker.el.container.gamer_interface.xp_bar.setAttribute("value", 5 * 2 * Number(localStorage.level));
    clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/xp_max + ')';

    /*Hunger increase*/

    localStorage.max_hunger = 100 + 20 * Number(localStorage.level);
    localStorage.actual_hunger = Number(localStorage.actual_hunger) + 20;
    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';

    /*Thirst increase*/

    localStorage.max_thirst = 50 + 10 * Number(localStorage.level);
    localStorage.actual_thirst = Number(localStorage.actual_thirst) + 10;
    clicker.el.container.gamer_interface.thirst_bar.style.transform = 'scaleX(' + Number(localStorage.actual_thirst)/localStorage.max_thirst + ')';

    //    level_check();
  }
}

/***************

Hunger Gestion

****************/

var hunger_max_upgrade = false;

function hunger(incrementation){
  if(hunger_max_upgrade == false){
    localStorage.actual_hunger = Number(localStorage.actual_hunger) - incrementation;
    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';
    if(Number(localStorage.actual_hunger) <= Number(localStorage.max_hunger)/2){
      if ( !chicken.elements.container.classList.contains('sad') )
        chicken.elements.container.classList.add('sad');
      clicker.el.container.gamer_interface.hunger_bar.style.backgroundColor = "#f2c637"
    }
    if(Number(localStorage.actual_hunger) <= Number(localStorage.max_hunger)/4){
      console.log("wtf")
      clicker.el.container.gamer_interface.hunger_bar.style.backgroundColor = "#ff3a3a"
    }
    if(Number(localStorage.actual_hunger) <= 0){
      if ( chicken.elements.container.classList.contains('sad') )
        chicken.elements.container.classList.remove('sad');
      if ( !chicken.elements.container.classList.contains('dead') )
        chicken.elements.container.classList.add('dead');

      setTimeout(function(){localStorage.clear();window.location.reload();}, 2000);
    }
  }
}

/*****************

Thirst Gestion

******************/

var thirst_max_upgrade = false;

function thirst(incrementation){
  console.log(Number(localStorage.actual_thirst)/Number(localStorage.max_thirst));
  if(thirst_max_upgrade == false){
    localStorage.actual_thirst = Number(localStorage.actual_thirst) - incrementation;
    clicker.el.container.gamer_interface.thirst_bar.style.transform = 'scaleX(' + Number(localStorage.actual_thirst)/Number(localStorage.max_thirst) + ')';
    if(Number(localStorage.actual_thirst) <= Number(localStorage.max_thirst)/2){
      if ( !chicken.elements.container.classList.contains('sad') )
        chicken.elements.container.classList.add('sad');
      clicker.el.container.gamer_interface.actual_thirst.style.backgroundColor = "#ffc300"
    }
    if(Number(localStorage.actual_thirst) <= Number(localStorage.max_thirst)/4){
      console.log("wtf")
      clicker.el.container.gamer_interface.actual_thirst.style.backgroundColor = "#f40000"
    }
    if(Number(localStorage.actual_thirst) <= 0){
      if ( chicken.elements.container.classList.contains('sad') )
        chicken.elements.container.classList.remove('sad');
      if ( !chicken.elements.container.classList.contains('dead') )
        chicken.elements.container.classList.add('dead');

      setTimeout(function(){localStorage.clear();window.location.reload();}, 2000);
    }
  }
}
