// priority: 0
onEvent('item.tooltip', tooltip => {
	['dust','carbon','sulfur'].forEach(pollution_type => {
		['low','medium','high'].forEach(filter_tier =>  {
			tooltip.addAdvanced(`#adpother:filters/${pollution_type}/${filter_tier}`, (item, advanced, text) => {
				if (!tooltip.shift) {
				  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
				} else {
					text.add(1, [Text.of("This item is a ").gold(), Text.of(`${filter_tier}-tier ${pollution_type} filter`).yellow()])
					text.add(2, Text.gold("Place inside of a filter frame and route pollution"))
					text.add(3, Text.gold("using pumps, vents and chimneys"))
				}
	})})})
	tooltip.addAdvanced('minecraft:charcoal', (item, advanced, text) => {
// the "hold shift" tooltip here is commented out as it's added by pollution filter descriptions
		//if (!tooltip.shift) {
		//	text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		//} else {
		if (tooltip.shift) {
			text.add(4, Text.of(''))
			text.add(5, Text.of('Need charcoal?'))
			text.add(6, [Text.of('Place logs into a hole in a stack with ').gold(), Text.of('Shift + Right Click').yellow()])
			text.add(7, Text.gold('Use a Fire Starter to burn it and quickly cover with a solid block'))
			text.add(8, Text.gold('Wait patiently - until there is NO smoke'))
			text.add(9, Text.gold('Mine with a shovel'))
		}
	})
	tooltip.addAdvanced('firmalife:drying_mat', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('No longer craftable due to causing lag.'))
		  text.add(2, Text.gold('Make solar driers instead!'))
		}
	})
	tooltip.addAdvanced('#forge:soap/weak', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, [Text.gold('Restores '),Text.yellow('5 points'),Text.gold(' (out of 10) of the dirtiness meter.')])
		  text.add(2, Text.gold('Two is enough to fully clean yourself.'))
		  text.add(3, Text.yellow(''))
		  text.add(4, Text.yellow('Right click to use!'))
		}
	})
	tooltip.addAdvanced('#forge:soap/strong', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, [Text.yellow('Completely resets'),Text.gold(' the dirtiness meter.')])
		  text.add(2, Text.gold('A newly crafted bar has four uses.'))
		  text.add(3, Text.yellow(''))
		  text.add(4, Text.yellow('Right click to use!'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:mesh_splashing', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Makes the air blower shoot water particles'))
		  text.add(2, Text.gold('as if there is a block of water in front of it.'))
		  text.add(3, Text.gold(''))
		  text.add(4, Text.red('Only usable on Industrial Air Blowers.'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:mesh_dense', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Drastically lowers the minimal temperature for'))
		  text.add(2, Text.gold('smoking and blasting, but makes heat drain faster.'))
		  text.add(3, [Text.gold('The exact values are '),Text.yellow('55°C+ for smoking ')])
		  text.add(4, [Text.gold('and '),Text.yellow('110°C+ for blasting'),Text.gold('.')])
		  text.add(5, Text.gold(''))
		  text.add(6, Text.red('Only usable on Industrial Air Blowers.'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:mesh_haunted', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Turns passing hot air into soul flame,'))
		  text.add(2, Text.gold('which allows for haunting recipes.'))
		  text.add(3, Text.yellow('Keep in mind that the fan still has to be hot!'))
		  text.add(4, [Text.gold('The exact minimal temperature is '),Text.yellow('110°C'),Text.gold('.')])
		  text.add(5, Text.gold(''))
		  text.add(6, Text.red('Only usable on Industrial Air Blowers.'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:air_blower', (item, advanced, text) => {
		if (tooltip.shift) {
		  text.add(2, Text.aqua('Works like a powerful Encased Fan!'))
		  text.add(3, Text.aqua('Powered by PNC air pressure instead of SU.'))
		  text.add(4, Text.aqua('At 4.0+ bar, processing speed reaches double.'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:industrial_air_blower', (item, advanced, text) => {
		if (tooltip.shift) {
		  text.add(2, Text.aqua('Works like a VERY powerful Encased Fan!'))
		  text.add(3, Text.aqua('At 9.1+ bar, processing speed reaches quadruple.'))
		  text.add(4, Text.aqua('Accepts meshes: type $blower_mesh in JEI for more info'))
		  text.add(5, Text.gold('Can also be heated by any PNC heat source!'))
		  text.add(6, [Text.gold('Exact minimal temps are '),Text.yellow('110°C+ for smoking ')])
		  text.add(7, [Text.gold('and '),Text.yellow('330°C+ for blasting'),Text.gold('.')])
		}
	})
	tooltip.addAdvanced('compressedcreativity:rotational_compressor', (item, advanced, text) => {
		if (tooltip.shift) {
		  text.add(2, Text.aqua('A very primitive air compressor.'))
		  text.add(3, Text.aqua('Generates up to 20ml/t.'))
		  text.add(4, Text.aqua('Doesn\'t support safety or speed upgrades.'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:compressed_air_engine', (item, advanced, text) => {
		if (tooltip.shift) {
		  text.add(2, Text.aqua('A cheap motor based on PNC pressure.'))
		  text.add(3, Text.aqua('Produces up to 1024su for 40ml/t.'))
		}
	})
	tooltip.addAdvanced('compressedcreativity:mechanical_visor_upgrade', (item, advanced, text) => {
		if (tooltip.shift) {
			text.add(1, Text.aqua('Adds the functionality of Engineer\'s Goggles.'))
			text.add(2, Text.aqua('Alternatively, a similar effect can be accomplished by'))
			text.add(3, Text.aqua('placing a pair of goggles into the curio head slot.'))
		}
	})
	tooltip.addAdvanced('supplementaries:slingshot', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Shoots blocks! Any placeables, in fact.'))
		  text.add(2, Text.gold('Deals no damage and is completely harmless'))
		}
	})
	tooltip.addAdvanced(['immersiveengineering:blastbrick',
						 'immersiveengineering:blastbrick_reinforced',
						 'immersiveengineering:blastfurnace_preheater',
						 'immersiveengineering:blast_furnace',
						 'immersiveengineering:advanced_blast_furnace'], (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.red('Decorative use only!'))
		  text.add(2, Text.gold('IE blast furnaces are non-functional'))
		}
	})
	tooltip.addAdvanced('immersiveengineering:cokebrick', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.red('Decorative use only!'))
		  text.add(2, Text.gold('Coke ovens are made from fire bricks'))
		}
	})
	tooltip.addAdvanced('create:vertical_gearbox', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('Use brass wrench on a normal gearbox'))
		  text.add(2, [Text.gold('Rotate it with '), Text.of('Right click ').yellow(), Text.gold('on a side')])
		}
	})
	tooltip.addAdvanced('kubejs:feed_vege', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will allow you to tame and'))
		  text.add(2, Text.gold('breed some of the wild Boar and Tortoise'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_seed', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will allow you to tame and breed'))
		  text.add(2, Text.gold('some of the wild animals - Aardvark, Terror Bird'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_hay', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will allow you to tame and'))
		  text.add(2, Text.gold('breed some of the cattle - Big Bisons'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_fruit', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will help you tame and breed some'))
		  text.add(2, Text.gold('of the lizards - Newts, Giant Salamanders, Monitor'))
		}
	})
	tooltip.addAdvanced('kubejs:feed_meat', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will help you tame and breed'))
		  text.add(2, Text.gold('some of the wilds animals - Opossum'))
		}
	})
	tooltip.addAdvanced('untamedwilds:chum', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
		  text.add(1, Text.gold('fodder that will help you tame and breed some of the'))
		  text.add(2, Text.gold('wild fishes - sunfish, triggerfish, sawfish, arowana '))
		}
	})
	tooltip.addAdvanced('kubejs:canoe', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('First boat had to be chiselled and burned from the wood' ))
			text.add(2, Text.red('IMPORTANT - only a few types of wood can be chiseled' ))
			text.add(3, Text.red('Aspen / Chestnut / Douglas fir / Kapok'))
			text.add(4, Text.red('Pine / Rosewood / Spruce / White cedar / Willow' ))
			text.add(5, [Text.gold('- Place 3 logs of '), Text.of('stripped ').red(), Text.of('wood horizontally on one line' ).gold()])
			text.add(6, Text.gold('- Use a saw with a chisel on all the logs'))
			text.add(7, Text.gold('- Use an axe with a chisel on all logs '))
			text.add(8, Text.gold('- Use a Fire Starter or Flint & Steel and burn the center '))
			text.add(9, Text.gold('- Wait patiently '))
			text.add(10, Text.red('WARNING - you CANNOT break the boat - because you will destroy it '))
		}
	})
	tooltip.addAdvanced('minecraft:campfire', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Creating a firepit' ))
			text.add(2, Text.gold('- Put 1 log and 3 sticks together on top of a block' ))
			text.add(3, Text.gold('- Use a Fire Starter or Flint & Steel - burn the top of the block '))
			text.add(4, Text.gold('- Greater chance when you put paper, straw and/or pinecones - optional'))
		}
	})
	tooltip.addAdvanced('minecraft:glass_bottle', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('It is not only bottle' ))
			text.add(2, Text.gold('Has a small amount of air inside' ))
			text.add(3, Text.gold('Very useful when diving'))
		}
	})
	tooltip.addAdvanced('#hordes:infection_cures', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold(' when you get infection Zombies' ))
			text.add(2, Text.gold(' it can save your life this item ' ))
			text.add(2, Text.gold(' use it to heal from infection '))
		}
	})
	tooltip.addAdvanced('#forge:space_ores', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Mineral ores from other planets' ))
			text.add(2, [Text.gold('You will only find them on the '), Text.red('Moon and other planets' )])
		}
	})
	tooltip.addAdvanced('#tfc:small_fishing_bait', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('You can use it as bait while fishing' ))
		}
	})
	tooltip.addAdvanced('#forge:dead_animal', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.gold('Hang a dead animal on a hook from '), Text.red('ButchersDelight')])
			text.add(2, Text.gold('Small animals (chicken, rabbit) place on ground' ))
			text.add(3, Text.gold('Use any knife and dissect the meat' ))
			//text.add(3, Text.gold('Optionally you can roast them over a campfire but you get less meat ' ))
			//this cannot be done since the vanilla campfire is removed
			//TODO: update if there is another way to bake the whole animal
		}
	})
	tooltip.addAdvanced('#tfc:drink_items', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Use this item to store drinking water' ))
			text.add(2, Text.gold('But be careful, fresh water can sometimes give you poisoning' ))
			text.add(3, Text.gold('Drink only boiled, purified or mineral water' ))
		}
	})
	tooltip.addAdvanced('#tfc:lamp_fuel', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('You can use as fuel in a lamp' ))
			text.add(2, Text.gold('It is enough for a long burn time' ))
		}
	})
	tooltip.addAdvanced('myrtrees:latex', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.gold('Obtained from tapping into '),Text.yellow('Rubberwood Trees'),Text.gold('.')])
			text.add(2, Text.gold('A rubberwood sapling can be obtained from sieving dirt.'))
			text.add(3, Text.yellow('They can only be planted on dirt that has no grass!'))
			text.add(4, Text.gold(''))
			text.add(5, [Text.gold('Place a '),Text.yellow('"Tree Tap"'),Text.gold(' on a rubberwood tree,')])
			text.add(6, [Text.gold('as well as a '),Text.yellow('"Bucket for Latex"'),Text.gold(' right below.')])
			text.add(7, Text.gold('Latex liquid should then start collecting.'))
			text.add(8, Text.gold('Right click the bucket to see how much is stored.'))
			text.add(9, [Text.yellow('1000mb'),Text.gold(' is equal to '),Text.yellow('one latex.')])
			text.add(10, [Text.gold('Each tree can produce up to '),Text.yellow('10 latex'),Text.gold(' in total.')])
			text.add(11, Text.gold(''))
		}
	})
	tooltip.addAdvanced('farmersrespite:coffee_berries', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Coffee fruits can be found exclusively on coffee bushes' ))
			text.add(2, Text.gold('They grow in the Nether in basalt biomes' ))
			text.add(3, Text.gold('The journey can be difficult but rewarding' ))
		}
	})
	tooltip.addAdvanced('tfc:food/cattail_root', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Cattails you can find near water' ))
			text.add(2, Text.gold('Look for lakes and reservoirs of water' ))
			text.add(3, Text.gold('Use a knife - Does not always drop' ))
		}
	})
	tooltip.addAdvanced('adpother:dust', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Falling onto the ground, degrades it and makes it barren, turning it into gravel' ))
			text.add(2, Text.gold('Dust can be filtered with vacuum cleaners or in chimney filters with paper, cloths and/or fabric' ))
		}
	})
	tooltip.addAdvanced('adpother:sulfur', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Pollutes the air to a large extent, causing acid rain and dying plants' ))
			text.add(2, Text.gold('Sulfur can be filtered in chimney filters filled with wool ' ))
		}
	})
	tooltip.addAdvanced('adpother:carbon', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Pollutes the air to a large extent, causing excessive grass growth' ))
			text.add(2, Text.gold('Carbon can be filtered in chimney filters filled with leaves or thatch' ))
		}
	})
	tooltip.add('waystones:waystone', ["Hard item to craft, don't lose it", 'will provide you with a way to teleport'])
})