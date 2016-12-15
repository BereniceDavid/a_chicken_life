var fill_location_list = upgrades.querySelectorAll('.list_upgrades div ul');
//fill_location_list[0] --> improvements_content : food / drink (consumable_upgrades)
//fill_location_list[1] --> consumables_content :  habitat (habitat)
//fill_location_list[2] --> boosts_content : decoration (habitat_upgrades)

console.log(fill_location_list);
var upgrade = '';

//fill var upgrade with the upgrade element we want to display
function upgrade_html(src, name, cost, level) {
	upgrade = document.createElement("li");
	upgrade.innerHTML = '<span class="logo_upgrade"><img src="'+ src +'" class="seeds_icon"></span><span class="name_upgrade">'+ name +'</span><img src="src/img/interface/gold.svg" class="gold_icon"><span class="price_upgrade">'+ cost +'</span><span class="unit_lvl">Lv'+ level +'</span><span class="number_upgrade">0</span>';
}


for(var k = 0; k < game.length; k++) {
	
	//display food upgrades
	if (!game[k].consumable_upgrades == "") {
		
		for(var l = 0; l < game[k].consumable_upgrades.length; l++) {
			upgrade_html(game[k].consumable_upgrades[l].source, game[k].consumable_upgrades[l].name, game[k].consumable_upgrades[l].cost, game[k].level);
			fill_location_list[0].appendChild(upgrade);
		}
	}
	
	//display habitat upgrades
	if (!game[k].habitat_upgrades == "") {
		for(var m = 0; m < game[k].habitat_upgrades.length; m++) {
			upgrade_html(game[k].habitat_upgrades[m].source, game[k].habitat_upgrades[m].name, game[k].habitat_upgrades[m].cost, game[k].level);
			fill_location_list[2].appendChild(upgrade);
		}
	}
	
	//display habitats 
	if (!game[k].habitat == "") {
		for(var n = 0; n < game[k].habitat.length; n++) {
			upgrade_html(game[k].habitat[n].source, game[k].habitat[n].name, game[k].habitat[n].cost, game[k].level);
			fill_location_list[1].appendChild(upgrade);
		}
	}
}