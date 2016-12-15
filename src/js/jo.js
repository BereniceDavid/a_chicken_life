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

  test = document.querySelector('.spawn');

  test.style.left = mouse_money.x - 15 + 'px';
  test.style.top = mouse_money.y - 20 + 'px';

  console.log('oko' + test.style.top, test.style.left );


  window.setTimeout(function(){
    
    spawn.remove();
    
     }, 100);

}