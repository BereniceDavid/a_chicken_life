var fill_location_list = upgrades.querySelectorAll('.list_upgrades div ul');
//fill_location_list[0] --> improvements_content : food / drink (consumable_upgrades)
//fill_location_list[1] --> consumables_content :  habitat (habitat)
//fill_location_list[2] --> boosts_content : decoration (habitat_upgrades)

console.log(fill_location_list);
var upgrade = '';

//fill var upgrade with the upgrade element we want to display
function upgrade_html(src, name, cost, level, nbr_upgrade) {
	upgrade = document.createElement("li");
	
	upgrade.innerHTML = '<span class="logo_upgrade"><img src="'+ src +'" class="icon"></span><span class="name_upgrade">'+ name +'</span><img src="src/img/interface/gold.svg" class="gold_icon"><span class="price_upgrade">'+ cost +'</span><span class="unit_lvl">Lv <span class="level_required">'+ level +'</span></span><span class="number_upgrade">'+ nbr_upgrade +'</span>';
}

for(var k = 0; k < game.length; k++) {
	
	//display food upgrades
	if (!game[k].consumable_upgrades == "") {
		
		for(var l = 0; l < game[k].consumable_upgrades.length; l++) {
			upgrade_html(game[k].consumable_upgrades[l].source, game[k].consumable_upgrades[l].name, game[k].consumable_upgrades[l].cost, game[k].level, '');
			fill_location_list[0].appendChild(upgrade);
		}
	}
	
	//display habitat upgrades
	if (!game[k].habitat_upgrades == "") {
		for(var m = 0; m < game[k].habitat_upgrades.length; m++) {
			upgrade_html(game[k].habitat_upgrades[m].source, game[k].habitat_upgrades[m].name, game[k].habitat_upgrades[m].cost, game[k].level, '0');
			fill_location_list[2].appendChild(upgrade);
		}
	}
	
	//display habitats 
	if (!game[k].habitat == "") {
		for(var n = 0; n < game[k].habitat.length; n++) {
			if (game[k].habitat[n].name != "Cardboard") {
				upgrade_html(game[k].habitat[n].source, game[k].habitat[n].name, game[k].habitat[n].cost, game[k].level, '');
				fill_location_list[1].appendChild(upgrade);
			}
		}
	}
}

var hover_description = document.querySelector('.hover_description'),
		all_li_upgrade = document.querySelectorAll('.list_upgrades ul li'),
		this_li_name = "";

//Detect mouse position
var mouse = { x: 0, y: 0 };

document.addEventListener('mousemove', function(event) {
  mouse.y = event.clientY;
	hover_description.style.top = mouse.y - 15 +'px';
});
	
for(var p = 0; p < all_li_upgrade.length; p++) {
	
	all_li_upgrade[p].addEventListener('mouseover', function() {
		
//		console.log(mouse.y);
		
		this_li_name = this.querySelector('.name_upgrade').innerHTML;
		
		for(var browse_json = 0; browse_json < game.length; browse_json++) {
				
			//check food drink upgrades
			for(var browse_in_consumable = 0; browse_in_consumable < game[browse_json].consumable_upgrades.length; browse_in_consumable++) {
				if( game[browse_json].consumable_upgrades[browse_in_consumable].name == this_li_name ) {
					hover_description.innerHTML = game[browse_json].consumable_upgrades[browse_in_consumable].description
					hover_description.style.display = 'block';
				}
			}
			
			//check habitat upgrades
			for(var browse_in_habitat_upgrades = 0; browse_in_habitat_upgrades < game[browse_json].habitat_upgrades.length;browse_in_habitat_upgrades++) {
				if( game[browse_json].habitat_upgrades[browse_in_habitat_upgrades].name == this_li_name ) {
					hover_description.innerHTML = game[browse_json].habitat_upgrades[browse_in_habitat_upgrades].description
					hover_description.style.display = 'block';
				}
			}
			
			//check habitats
			for(var browse_habitat = 0; browse_habitat < game[browse_json].habitat.length; browse_habitat++) {
				if( game[browse_json].habitat[browse_habitat].name == this_li_name ) {
					hover_description.innerHTML = game[browse_json].habitat[browse_habitat].description
					hover_description.style.display = 'block';
				}
			}
		}

	});
	
	all_li_upgrade[p].addEventListener('mouseout', function() {
		hover_description.style.display = 'none';
	});
}