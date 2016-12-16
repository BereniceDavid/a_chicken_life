/**
 * MOUSE
 */
var mouse_money = { x: 0, y: 0 };
document.addEventListener( 'mousemove', function( event )
{
    mouse_money.x = event.clientX;
    mouse_money.y = event.clientY;

} );


function click_incrementation(){
  localStorage.clickcount = Number(localStorage.clickcount) + Number(localStorage.incrementation);
  clicker.el.container.score.innerHTML = localStorage.clickcount;

  var spawn = document.createElement('div');
  spawn.innerHTML = '<div class="spawn"><span class="money">'+'+'+''+ Number(localStorage.incrementation) +'</span><img class="money_picture" src ="src/img/interface/gold.svg"></div>';
  
  var zone_spawn_pos = document.querySelector('.chicken_zone');

  zone_spawn_pos.appendChild(spawn);

  pos_mouse = document.querySelector('.spawn');

  pos_mouse.style.left = mouse_money.x - 35 + 'px';
  pos_mouse.style.top = mouse_money.y - 20 + 'px';
  window.setTimeout(function(){
    
    spawn.remove();
    
     }, 50);

}

/** buy_habitats **/

var home_content = document.querySelector('.consumables_content'),
    home_buy     = home_content.querySelectorAll('ul li'),
    home_change  = document.querySelector('.container_habitat img');

for (q = 0; q < home_buy.length; q++){
  home_buy[q].addEventListener('click', function(){
    var cost_home  = this.querySelector('.price_upgrade').innerHTML,
        lvl_home   = this.querySelector('.unit_lvl .level_required').innerHTML,
        logo_home  = this.querySelector('.logo_upgrade img').getAttribute('src');

        if (Number(localStorage.level) >= lvl_home && Number(localStorage.clickcount) >= cost_home){
            home_change.setAttribute('src', logo_home);
            localStorage.clickcount = Number(localStorage.clickcount) - cost_home;
            clicker.el.container.score.innerHTML = localStorage.clickcount;
            this.style.display = 'none';
            localStorage.incrementation = Number(localStorage.incrementation) + 2;
        }

        else if (Number(localStorage.level) >= lvl_home && Number(localStorage.clickcount) < cost_home){
            var temp_color = this.querySelector('.price_upgrade').style.color = "red";
            window.setTimeout(function(){

              var color_temp = document.querySelectorAll('.price_upgrade');
              for (s = 0; s < color_temp.length; s++){
                color_temp[s].style.color = "#f1c40f";
              }

             }, 1000);  
        }
  });
  
}

var improvement_content = document.querySelector('.boosts_content'),
    improvement_buy     = improvement_content.querySelectorAll('ul li');

for (d = 0; d < improvement_buy.length; d++){
  improvement_buy[d].addEventListener('click', function(){
    var cost_improvement  = this.querySelector('.price_upgrade').innerHTML,
        lvl_improvement   = this.querySelector('.unit_lvl .level_required').innerHTML;

        if (Number(localStorage.level) >= lvl_improvement && Number(localStorage.clickcount) < cost_improvement){
            var temp_color = this.querySelector('.price_upgrade').style.color = "red";
            window.setTimeout(function(){

              var color_temp = document.querySelectorAll('.price_upgrade');
              for (s = 0; s < color_temp.length; s++){
                color_temp[s].style.color = "#f1c40f";
              }

             }, 1000);  
        }
  });
  
}

var food_content = document.querySelector('.improvements_content'),
    food_buy     = food_content.querySelectorAll('ul li');

for (d = 0; d < food_buy.length; d++){
  food_buy[d].addEventListener('click', function(){
    var cost_food  = this.querySelector('.price_upgrade').innerHTML,
        lvl_food   = this.querySelector('.unit_lvl .level_required').innerHTML;

        if (Number(localStorage.level) >= lvl_food && Number(localStorage.clickcount) < cost_food){
            var temp_color = this.querySelector('.price_upgrade').style.color = "red";
            window.setTimeout(function(){

              var color_temp = document.querySelectorAll('.price_upgrade');
              for (s = 0; s < color_temp.length; s++){
                color_temp[s].style.color = "#f1c40f";
              }

             }, 1000);  
        }
  });
  
}

console.log(Number(localStorage.actual_hunger));
console.log(Number(localStorage.max_hunger));

if (Number(localStorage.max_hunger) == Number(localStorage.actual_hunger))
{
  console.log('rare as fck');
}
else
{
  console.log('eh ouais mon gars');
}

// if (Number(localStorage.actual_hunger) = Number(localStorage.max_hunger))
// {
//   console.log('succccccc');
// }





lock_upgrades_level();
