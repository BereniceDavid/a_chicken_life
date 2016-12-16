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
clicker.el.container.gamer_interface.current_hunger = clicker.el.container.gamer_interface.querySelector('.current_starve');
clicker.el.container.gamer_interface.max_hunger = clicker.el.container.gamer_interface.querySelector('.total_starve');

/**Thirst**/

clicker.el.container.gamer_interface.thirst = clicker.el.container.querySelector('.chicken_thirst_bar');
clicker.el.container.gamer_interface.thirst_bar = clicker.el.container.querySelector('.chicken_thirst_bar_content');
clicker.el.container.gamer_interface.actual_thirst = clicker.el.container.gamer_interface.thirst_bar.querySelector('.bar_current_count');
clicker.el.container.gamer_interface.current_thirst = clicker.el.container.gamer_interface.querySelector('.current_thirst');
clicker.el.container.gamer_interface.max_thirst = clicker.el.container.gamer_interface.querySelector('.total_thirst');

/**xp**/
clicker.el.container.gamer_interface.xp_bar = clicker.el.container.querySelector('.chicken_lvl_content .bar_current_count');
clicker.el.container.gamer_interface.level = clicker.el.container.querySelector('.current_lvl');
clicker.el.container.gamer_interface.current_xp = clicker.el.container.gamer_interface.querySelector('.current_xp');
clicker.el.container.gamer_interface.total_xp = clicker.el.container.gamer_interface.querySelector('.total_xp');


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

/**Improvment content**/
clicker.el.container.improvements_content = clicker.el.container.querySelector('.improvements_content');
clicker.el.container.improvements_content.li = clicker.el.container.improvements_content.querySelectorAll('ul li');

/**Boost content**/
clicker.el.container.boost_content = clicker.el.container.querySelector('.boosts_content');
clicker.el.container.boost_content.li = clicker.el.container.boost_content.querySelectorAll('ul li');

/** Pop up beginning **/
clicker.el.container.pop_up_beginning = clicker.el.container.querySelector('.pop-up-beginning');
clicker.el.container.pop_up_beginning.button_beginning = clicker.el.container.pop_up_beginning.querySelector('.button-beginning');

//localStorage.clear();
console.log(localStorage.level);

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
    localStorage.clickcount = 6000;

  /**XP**/
  if(localStorage.level == undefined || localStorage.level == 0){
    localStorage.level = 9;
    clicker.el.container.gamer_interface.xp_bar.setAttribute("value", 5);
  }
  else{
    clicker.el.container.gamer_interface.xp_bar.setAttribute("value", 5 * 2 * Number(localStorage.level));
    clicker.el.container.gamer_interface.level.innerHTML = "lvl " + Number(localStorage.level);
    clicker.el.container.pop_up_beginning.style.display = "none";
  }

  if(localStorage.actual_xp == undefined){
    localStorage.actual_xp = 0;
  }
  else{
    clicker.el.container.gamer_interface.xp_bar.style.transform = 'scaleX(' + Number(localStorage.actual_xp)/clicker.el.container.gamer_interface.xp_bar.getAttribute('value') + ')';
  }

  xp_actualisation();

  /**Hunger**/

  if(localStorage.actual_hunger == undefined){
    localStorage.actual_hunger = clicker.el.container.gamer_interface.actual_hunger.getAttribute('value');
    localStorage.max_hunger = clicker.el.container.gamer_interface.actual_hunger.getAttribute('value');
  }
  else{
    localStorage.max_hunger = 100 + 20 * Number(localStorage.level);
    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/localStorage.max_hunger + ')';
  }

  hunger_actualisation();
  chicken_hunger_animation();

  /**Thirst**/

  if(localStorage.actual_thirst == undefined){
    localStorage.actual_thirst = clicker.el.container.gamer_interface.actual_thirst.getAttribute('value');
    localStorage.max_thirst = clicker.el.container.gamer_interface.actual_thirst.getAttribute('value');
  }
  else{
    localStorage.max_thirst = 50 + 10 * Number(localStorage.level);
    clicker.el.container.gamer_interface.thirst_bar.style.transform = 'scaleX(' + Number(localStorage.actual_thirst)/localStorage.max_thirst + ')';
  }

  thirst_actualisation();
  chicken_thirst_animation();

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
  init_upgrade();
  if(Number(localStorage.upgrade_3) == 0)
    clicker.el.container.boost_content.li[0].querySelector('.price_upgrade').innerHTML = "200";
  if(Number(localStorage.upgrade_2) == 0)
    clicker.el.container.boost_content.li[1].querySelector('.price_upgrade').innerHTML = "400";
  if(Number(localStorage.automatic_food) == 0)
    clicker.el.container.boost_content.li[2].querySelector('.price_upgrade').innerHTML = "600";
}

init();

clicker.el.container.chicken_house.addEventListener('click', function(){
  if(chicken.elements.container.classList.contains('dead') == false && day_state == "day"){
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

function gold_click_incrementation(){
  localStorage.clickcount = Number(localStorage.clickcount) + (Number(localStorage.incrementation) * 2 * Number(localStorage.upgrade_3));
  clicker.el.container.score.innerHTML = localStorage.clickcount;
}
/****************

Pop up beginning

****************/

clicker.el.container.pop_up_beginning.button_beginning.addEventListener('click', function(){
  clicker.el.container.pop_up_beginning.style.display = "none";
});

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
  xp_actualisation();
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

function xp_actualisation(){
  clicker.el.container.gamer_interface.current_xp.innerHTML = localStorage.actual_xp;
  clicker.el.container.gamer_interface.total_xp.innerHTML = Number(clicker.el.container.gamer_interface.xp_bar.getAttribute('value'));
}

/***************

Hunger Gestion

****************/

var hunger_max_upgrade = false;

function hunger(incrementation){
  if(hunger_max_upgrade == false){
    localStorage.actual_hunger = Number(localStorage.actual_hunger) - incrementation;
    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';
    chicken_hunger_animation();
    hunger_actualisation();
  }
}

function chicken_hunger_animation(){
  if(Number(localStorage.actual_hunger) <= Number(localStorage.max_hunger)/2){
    if ( !chicken.elements.container.classList.contains('sad') )
      chicken.elements.container.classList.add('sad');
    if ( !chicken.elements.picture.classList.contains('sad') )
      chicken.elements.picture.classList.add('sad');
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
    if ( chicken.elements.picture.classList.contains('sad') )
      chicken.elements.picture.classList.remove('sad');
    if ( !chicken.elements.picture.classList.contains('dead') )
      chicken.elements.picture.classList.add('dead');

    setTimeout(function(){localStorage.clear();window.location.reload();}, 2000);
  }
}

function reverse_chicken_hunger_animation(){
  if(Number(localStorage.actual_hunger) >= Number(localStorage.max_hunger)/4){                 
    clicker.el.container.gamer_interface.hunger_bar.style.backgroundColor = "#f2c637";
  }
  if(Number(localStorage.actual_hunger) >= Number(localStorage.max_hunger)/2){
    if(Number(localStorage.actual_thirst) >= Number(localStorage.max_thirst)/2) {
      chicken.elements.container.classList.remove('sad');
      chicken.elements.picture.classList.remove('sad');
    }
    clicker.el.container.gamer_interface.hunger_bar.style.backgroundColor = "#F47F5F";
  }
}

function hunger_augmentation(augmentation){
  localStorage.actual_hunger = Number(localStorage.actual_hunger) + augmentation;
  if(Number(localStorage.actual_hunger) > Number(localStorage.max_hunger)){
    localStorage.actual_hunger = localStorage.max_hunger;
  } 
  clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';
  reverse_chicken_hunger_animation();
  hunger_actualisation();
}

function hunger_max()
{
  hunger_max_upgrade = true;
  localStorage.actual_hunger = localStorage.max_hunger;
  clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';
  reverse_chicken_hunger_animation();
  hunger_actualisation();
  var time = setTimeout(function(){ hunger_max_upgrade = false }, 12000);
}

function hunger_actualisation(){
  clicker.el.container.gamer_interface.current_hunger.innerHTML = localStorage.actual_hunger;
  clicker.el.container.gamer_interface.max_hunger.innerHTML = localStorage.max_hunger;
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
    chicken_thirst_animation();
    thirst_actualisation();
  }
}

function chicken_thirst_animation(){
  if(Number(localStorage.actual_thirst) <= Number(localStorage.max_thirst)/2){
    if ( !chicken.elements.container.classList.contains('sad') )
      chicken.elements.container.classList.add('sad');
    if ( !chicken.elements.picture.classList.contains('sad') )
      chicken.elements.picture.classList.add('sad');
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
    if ( chicken.elements.picture.classList.contains('sad') )
      chicken.elements.picture.classList.remove('sad');
    if ( !chicken.elements.picture.classList.contains('dead') )
      chicken.elements.picture.classList.add('dead');

    setTimeout(function(){localStorage.clear();window.location.reload();}, 2000);
  }
}

function reverse_thirst_chicken_animation(){
  if(Number(localStorage.actual_thirst) >= Number(localStorage.max_thirst)/4){                 
    clicker.el.container.gamer_interface.actual_thirst.style.backgroundColor = "#ffc300";
  }
  if(Number(localStorage.actual_thirst) >= Number(localStorage.max_thirst)/2
    ){
    if(Number(localStorage.actual_hunger) >= Number(localStorage.max_hunger)/2) {
      chicken.elements.container.classList.remove('sad');
      chicken.elements.picture.classList.remove('sad');
    }
    clicker.el.container.gamer_interface.actual_thirst.style.backgroundColor = "cyan";
  }
}

function thirst_augmentation(augmentation){
  localStorage.actual_thirst = Number(localStorage.actual_thirst) + augmentation;
  if(Number(localStorage.actual_thirst) > Number(localStorage.max_thirst)){
    //    console.log('sa devrai pas rentrer');
    localStorage.actual_thirst = localStorage.max_thirst;
  } clicker.el.container.gamer_interface.thirst_bar.style.transform = 'scaleX(' + Number(localStorage.actual_thirst)/Number(localStorage.max_thirst) + ')';
  reverse_thirst_chicken_animation();
  thirst_actualisation();
}

function thirst_actualisation(){
  clicker.el.container.gamer_interface.current_thirst.innerHTML = localStorage.actual_thirst;
  clicker.el.container.gamer_interface.max_thirst.innerHTML = localStorage.max_thirst;
}

/**************************

Improvments content gestion

***************************/

for(var n = 0; n < clicker.el.container.improvements_content.li.length; n++){
  clicker.el.container.improvements_content.li[n].addEventListener('click', function(){
    var selected_upgrade = this;
    for( var m = 0; m < clicker.el.container.improvements_content.li.length; m++){
      if(clicker.el.container.improvements_content.li[m] == this)
        classic_augmentation(m);
    }
  });
}

function classic_augmentation(m){
  if(day_state == 'day'){
    var cost = Number(clicker.el.container.improvements_content.li[m].querySelector('.price_upgrade').innerHTML);
    var level_required = Number(clicker.el.container.improvements_content.li[m].querySelector('.level_required').innerHTML);
    console.log(level_required)
    if(Number(localStorage.clickcount) >= cost && Number(localStorage.level) >= level_required){
      localStorage.clickcount = Number(localStorage.clickcount) - cost;
      clicker.el.container.score.innerHTML = localStorage.clickcount;
      if(level_required == 2 && m%2 == 0){
        hunger_augmentation(30);
      }
      else if(level_required == 5  && m%2 == 0){
        hunger_augmentation(80);
      }
      else if(level_required == 2 && m%2 == 1){
        thirst_augmentation(15);
      }
      else if(level_required == 6  && m%2 == 1){
        thirst_augmentation(50);
      }
      else if(level_required == 7 && m%2 == 0){
        hunger_max();
      }
    }
  }
}

/******************

Boost content

*******************/

for(var t = 0; t < clicker.el.container.boost_content.li.length; t++){
  clicker.el.container.boost_content.li[t].addEventListener('click', function(){
    var selected_upgrade = this;
    for( var m = 0; m < clicker.el.container.boost_content.li.length; m++){
      if(clicker.el.container.boost_content.li[m] == this)
        boost_augmentation(m);
    }
  });
}

function boost_augmentation(m){
  if(day_state == 'day'){
    var cost = Number(clicker.el.container.boost_content.li[m].querySelector('.price_upgrade').innerHTML);
    var level_required = Number(clicker.el.container.boost_content.li[m].querySelector('.level_required').innerHTML);
    console.log(level_required)
    if(Number(localStorage.clickcount) >= cost && Number(localStorage.level) >= level_required){
      localStorage.clickcount = Number(localStorage.clickcount) - cost;
      clicker.el.container.score.innerHTML = localStorage.clickcount;
      if(m == 0){
        gold_egg(cost, m, level_required);
      }
      else if(m == 1){
        daily_egg(cost, m, level_required);
      }
      else if(m == 2){
        dispenser(cost, m, level_required);
      }
    }
  }
}

/*****************

Gold Egg

*****************/

function gold_egg(cost, m, level_required){
  localStorage.upgrade_3 = Number(localStorage.upgrade_3) + 1;
  clicker.el.container.boost_content.li[m].querySelector('.number_upgrade').innerHTML = Number(localStorage.upgrade_3);
  clicker.el.container.boost_content.li[m].querySelector('.price_upgrade').innerHTML = cost * 4;
  clicker.el.container.boost_content.li[m].querySelector('.level_required').innerHTML = (level_required + 2);
  console.log(Number(clicker.el.container.boost_content.li[m].querySelector('.unit_lvl').innerHTML.charAt(2)))
  if(Number(localStorage.upgrade_3) == 1){
    clicker.el.container.boost_content.li[m].querySelector('img').setAttribute('src', 'src/img/upgrade/diamond-egg.svg');
  }
  else if(Number(localStorage.upgrade_3) == 2){
    clicker.el.container.boost_content.li[m].querySelector('img').setAttribute('src', 'src/img/upgrade/platine-egg.svg');
  }
}

/****************

Daily egg

*****************/

function daily_egg(cost, m, level_required){
  localStorage.upgrade_2 = Number(localStorage.upgrade_2) + 1;
  localStorage.upgrade_2_delay = Number(localStorage.upgrade_2_delay) / (Number(localStorage.upgrade_2));
  clearInterval(timer_daily_egg);
  timer_daily_egg = setInterval(upgrade_2_auto, Number(localStorage.upgrade_2_delay));
  clicker.el.container.boost_content.li[m].querySelector('.number_upgrade').innerHTML = Number(localStorage.upgrade_2);
  clicker.el.container.boost_content.li[m].querySelector('.price_upgrade').innerHTML = cost * 4;
  clicker.el.container.boost_content.li[m].querySelector('.level_required').innerHTML = (level_required + 2);
}

function upgrade_2_auto(){
  if(Boolean(Number(localStorage.upgrade_2)) == true && day_state == "day"){
    localStorage.clickcount = Number(localStorage.clickcount)+1;
    clicker.el.container.score.innerHTML = localStorage.clickcount;
    hunger(1);
    thirst(1);
    level_check_house(1);
  }
}

var timer_daily_egg = setInterval(upgrade_2_auto, Number(localStorage.upgrade_2_delay));

/********************

Dispenser

********************/

var timer_automatic_food = setInterval(automatic_food, 2000);

function dispenser(cost, m, level_required){
  localStorage.automatic_food = Number(localStorage.automatic_food) + 1;

  clicker.el.container.boost_content.li[m].querySelector('.number_upgrade').innerHTML = Number(localStorage.automatic_food);
  clicker.el.container.boost_content.li[m].querySelector('.price_upgrade').innerHTML = cost * 4;
  clicker.el.container.boost_content.li[m].querySelector('.level_required').innerHTML = (level_required + 2);
  
  if(Number(localStorage.automatic_food) == 1){
    clicker.el.container.boost_content.li[m].querySelector('img').setAttribute('src', 'src/img/upgrade/Distributeur_niveau_2.svg');
  }
  else if(Number(localStorage.automatic_food) == 2){
    clicker.el.container.boost_content.li[m].querySelector('img').setAttribute('src', 'src/img/upgrade/Distributeur_niveau_3.svg');
  }
}

function automatic_food(){
  if(Boolean(Number(localStorage.automatic_food)) == true && day_state == "day"){
    localStorage.actual_hunger = Number(localStorage.actual_hunger) + (10 * Number(localStorage.automatic_food));
    if(Number(localStorage.actual_hunger) > Number(localStorage.max_hunger)){
      localStorage.actual_hunger = Number(localStorage.max_hunger);
    }
    hunger_actualisation(); clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';

    localStorage.actual_thirst = Number(localStorage.actual_thirst) + (5 * Number(localStorage.automatic_food));
    if(Number(localStorage.actual_thirst) > Number(localStorage.max_thirst)){
      localStorage.actual_thirst = Number(localStorage.max_thirst);
    }
    hunger_actualisation();
    reverse_chicken_hunger_animation();
    thirst_actualisation(); 
    reverse_thirst_chicken_animation();
    clicker.el.container.gamer_interface.hunger_bar.style.transform = 'scaleX(' + Number(localStorage.actual_hunger)/Number(localStorage.max_hunger) + ')';
    clicker.el.container.gamer_interface.thirst_bar.style.transform = 'scaleX(' + Number(localStorage.actual_thirst)/Number(localStorage.max_thirst) + ')';
  }
}

function init_upgrade(){

  /**Prices init**/

  clicker.el.container.boost_content.li[0].querySelector('.price_upgrade').innerHTML = Number(clicker.el.container.boost_content.li[0].querySelector('.price_upgrade').innerHTML) * 4 * Number(localStorage.upgrade_3);
  clicker.el.container.boost_content.li[1].querySelector('.price_upgrade').innerHTML = Number(clicker.el.container.boost_content.li[1].querySelector('.price_upgrade').innerHTML) * 4 * Number(localStorage.upgrade_2);
  clicker.el.container.boost_content.li[2].querySelector('.price_upgrade').innerHTML = Number(clicker.el.container.boost_content.li[2].querySelector('.price_upgrade').innerHTML) * 4 * Number(localStorage.automatic_food);

  /**lvl init**/
  clicker.el.container.boost_content.li[0].querySelector('.level_required').innerHTML =  Number(clicker.el.container.boost_content.li[0].querySelector('.level_required').innerHTML) + (2 * Number(localStorage.upgrade_3));
  clicker.el.container.boost_content.li[1].querySelector('.level_required').innerHTML =  Number(clicker.el.container.boost_content.li[1].querySelector('.level_required').innerHTML) + (2 * Number(localStorage.upgrade_2));
  clicker.el.container.boost_content.li[2].querySelector('.level_required').innerHTML =  Number(clicker.el.container.boost_content.li[2].querySelector('.level_required').innerHTML) + (2 * Number(localStorage.automatic_food));

  /**Number upgrade init**/

  clicker.el.container.boost_content.li[0].querySelector('.number_upgrade').innerHTML = Number(localStorage.upgrade_3);
  clicker.el.container.boost_content.li[1].querySelector('.number_upgrade').innerHTML = Number(localStorage.upgrade_2);
  clicker.el.container.boost_content.li[2].querySelector('.number_upgrade').innerHTML = Number(localStorage.automatic_food);

  /**Images init**/
  if(Number(localStorage.upgrade_3) == 1){
    clicker.el.container.boost_content.li[0].querySelector('img').setAttribute('src', 'src/img/upgrade/diamond-egg.svg');
  }
  else if(Number(localStorage.upgrade_3) == 2){
    clicker.el.container.boost_content.li[0].querySelector('img').setAttribute('src', 'src/img/upgrade/platine-egg.svg');
  }
  
  if(Number(localStorage.automatic_food) == 1){
    clicker.el.container.boost_content.li[2].querySelector('img').setAttribute('src', 'src/img/upgrade/Distributeur_niveau_2.svg');
  }
  else if(Number(localStorage.automatic_food) == 2){
    clicker.el.container.boost_content.li[2].querySelector('img').setAttribute('src', 'src/img/upgrade/Distributeur_niveau_3.svg');
  }
}
