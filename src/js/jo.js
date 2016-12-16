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

        if (Number(localStorage.level) >= lvl_home){
            home_change.setAttribute('src', logo_home);
            localStorage.clickcount = Number(localStorage.clickcount) - cost_home;
            clicker.el.container.score.innerHTML = localStorage.clickcount;
            this.style.display = 'none';
            localStorage.incrementation = Number(localStorage.incrementation) + 1;
        }
  });
  
}
lock_upgrades_level();
