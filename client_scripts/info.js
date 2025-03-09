// priority: 0

function getKeybind(langKey) {
	let key = Text.keybind(langKey).string.trim() ? Text.keybind(langKey).aqua() : Text.of('Unbound').aqua()
	let keyName = [
		Text.of(` (`).gold(),
		Text.of(`'`).yellow(),
		(Text.translate(langKey)).yellow(),
		Text.of(`'`).yellow(),
		Text.of(`)`).gold()
	]
	return [key, Array.from(keyName)]
}

const pollution_filter_map = {
	'dust': {
		'low': ['htm:plant_fabric'],
		'medium': ['minecraft:paper', 'tfc:burlap_cloth'],
		'high': ['tfc:silk_cloth', 'tfc:wool_cloth']
	},
	'carbon': {
		'low': ['minecraft:jungle_leaves', 'minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:dark_oak_leaves', 'minecraft:acacia_leaves', 'minecraft:birch_leaves', 'minecraft:azalea_leaves', 'minecraft:flowering_azalea_leaves', 'tfc:wood/leaves/acacia', 'tfc:wood/leaves/ash', 'tfc:wood/leaves/aspen', 'tfc:wood/leaves/birch', 'tfc:wood/leaves/blackwood', 'tfc:wood/leaves/chestnut', 'tfc:wood/leaves/douglas_fir', 'tfc:wood/leaves/hickory', 'tfc:wood/leaves/kapok', 'tfc:wood/leaves/maple', 'tfc:wood/leaves/oak', 'tfc:wood/leaves/palm', 'tfc:wood/leaves/pine', 'tfc:wood/leaves/rosewood', 'tfc:wood/leaves/sequoia', 'tfc:wood/leaves/spruce', 'tfc:wood/leaves/sycamore', 'tfc:wood/leaves/white_cedar', 'tfc:wood/leaves/willow', 'twilightforest:rainbow_oak_leaves', 'twilightforest:twilight_oak_leaves', 'twilightforest:canopy_leaves', 'twilightforest:mangrove_leaves', 'twilightforest:dark_leaves', 'twilightforest:time_leaves', 'twilightforest:transformation_leaves', 'twilightforest:mining_leaves', 'twilightforest:sorting_leaves', 'twilightforest:thorn_leaves', 'twilightforest:beanstalk_leaves', 'myrtrees:rubberwood_leaves', 'tconstruct:earth_slime_leaves', 'tconstruct:sky_slime_leaves', 'tconstruct:ender_slime_leaves', 'tfc:plant/cherry_leaves', 'tfc:plant/green_apple_leaves', 'tfc:plant/lemon_leaves', 'tfc:plant/olive_leaves', 'tfc:plant/orange_leaves', 'tfc:plant/peach_leaves', 'tfc:plant/plum_leaves', 'tfc:plant/red_apple_leaves'],
		'medium': ['tfc:plant/leafy_kelp', 'tfc:plant/winged_kelp'],
		'high': ['coralstfc:coral_powder']
	},
	'sulfur': {
		'medium': ['minecraft:charcoal'],
		'high': ['minecraft:white_wool', 'minecraft:orange_wool', 'minecraft:magenta_wool', 'minecraft:light_blue_wool', 'minecraft:yellow_wool', 'minecraft:lime_wool', 'minecraft:pink_wool', 'minecraft:gray_wool', 'minecraft:light_gray_wool', 'minecraft:cyan_wool', 'minecraft:purple_wool', 'minecraft:blue_wool', 'minecraft:brown_wool', 'minecraft:green_wool', 'minecraft:red_wool', 'minecraft:black_wool']
	}
}
//#minecraft:wool = ['minecraft:white_wool','minecraft:orange_wool','minecraft:magenta_wool','minecraft:light_blue_wool','minecraft:yellow_wool','minecraft:lime_wool','minecraft:pink_wool','minecraft:gray_wool','minecraft:light_gray_wool','minecraft:cyan_wool','minecraft:purple_wool','minecraft:blue_wool','minecraft:brown_wool','minecraft:green_wool','minecraft:red_wool','minecraft:black_wool']
//#forge:kelp = ['tfc:plant/leafy_kelp','tfc:plant/winged_kelp']
//#minecraft:leaves = ['minecraft:jungle_leaves','minecraft:oak_leaves','minecraft:spruce_leaves','minecraft:dark_oak_leaves','minecraft:acacia_leaves','minecraft:birch_leaves','minecraft:azalea_leaves','minecraft:flowering_azalea_leaves','tfc:wood/leaves/acacia','tfc:wood/leaves/ash','tfc:wood/leaves/aspen','tfc:wood/leaves/birch','tfc:wood/leaves/blackwood','tfc:wood/leaves/chestnut','tfc:wood/leaves/douglas_fir','tfc:wood/leaves/hickory','tfc:wood/leaves/kapok','tfc:wood/leaves/maple','tfc:wood/leaves/oak','tfc:wood/leaves/palm','tfc:wood/leaves/pine','tfc:wood/leaves/rosewood','tfc:wood/leaves/sequoia','tfc:wood/leaves/spruce','tfc:wood/leaves/sycamore','tfc:wood/leaves/white_cedar','tfc:wood/leaves/willow','twilightforest:rainbow_oak_leaves','twilightforest:twilight_oak_leaves','twilightforest:canopy_leaves','twilightforest:mangrove_leaves','twilightforest:dark_leaves','twilightforest:time_leaves','twilightforest:transformation_leaves','twilightforest:mining_leaves','twilightforest:sorting_leaves','twilightforest:thorn_leaves','twilightforest:beanstalk_leaves','myrtrees:rubberwood_leaves','tconstruct:earth_slime_leaves','tconstruct:sky_slime_leaves','tconstruct:ender_slime_leaves']

onEvent('item.tooltip', tooltip => {
	Object.keys(pollution_filter_map).forEach(pollution_type => {
		Object.keys(pollution_filter_map[pollution_type]).forEach(filter_tier => {
			pollution_filter_map[pollution_type][filter_tier].forEach(filter_item => {
				tooltip.addAdvanced(filter_item, (item, advanced, text) => {
					if (!tooltip.shift) {
						text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
					} else {
						text.add(1, [Text.of("This item is a ").gold(), Text.of(`${filter_tier}-tier ${pollution_type} filter`).yellow()])
						text.add(2, Text.gold("Place inside of a filter frame and route pollution"))
						text.add(3, Text.gold("using pumps, vents and chimneys"))
					}
				})
			})
		})
	})
	tooltip.addAdvanced('minecraft:charcoal', (item, advanced, text) => {
		// the "hold shift" tooltip here is commented out as it's added by pollution filter descriptions
		//if (!tooltip.shift) {
		//	text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		//} else {
		if (tooltip.shift) {
			text.add(Text.of(''))
			text.add(Text.of('Need charcoal?'))
			text.add([Text.of('Place logs into a hole in a stack with ').gold(), Text.of('Shift + Right Click').yellow()])
			text.add(Text.gold('Use a Fire Starter to burn it and quickly cover with a solid block'))
			text.add(Text.gold('Wait patiently - until there is NO smoke'))
			text.add(Text.gold('Mine with a shovel'))
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
	tooltip.addAdvanced([//#forge:soap/weak
		'supplementaries:soap'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.gold('Restores '), Text.yellow('5 points'), Text.gold(' (out of 10) of the dirtiness meter.')])
			text.add(2, Text.gold('Two is enough to fully clean yourself.'))
			text.add(3, Text.gold(''))
			text.add(4, Text.yellow('Right click to use!'))
		}
	})
	tooltip.addAdvanced(/^bodyhygiene:.+_soap$/, (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.yellow('Completely resets'), Text.gold(' the dirtiness meter.')])
			text.add(2, Text.gold('A newly crafted bar has four uses.'))
			text.add(3, Text.gold(''))
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
			text.add(3, [Text.gold('The exact values are '), Text.yellow('55°C+ for smoking ')])
			text.add(4, [Text.gold('and '), Text.yellow('110°C+ for blasting'), Text.gold('.')])
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
			text.add(4, [Text.gold('The exact minimal temperature is '), Text.yellow('110°C'), Text.gold('.')])
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
			text.add(6, [Text.gold('Exact minimal temps are '), Text.yellow('110°C+ for smoking ')])
			text.add(7, [Text.gold('and '), Text.yellow('330°C+ for blasting'), Text.gold('.')])
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
	tooltip.addAdvanced([
		'immersiveengineering:blastbrick',
		'immersiveengineering:blastbrick_reinforced',
		'immersiveengineering:blastfurnace_preheater',
		'immersiveengineering:blast_furnace',
		'immersiveengineering:advanced_blast_furnace'
	], (item, advanced, text) => {
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
			text.add(1, Text.gold('First boat had to be chiselled and burned from the wood'))
			text.add(2, Text.red('IMPORTANT - only a few types of wood can be chiseled'))
			text.add(3, Text.red('Aspen / Chestnut / Douglas fir / Kapok'))
			text.add(4, Text.red('Pine / Rosewood / Spruce / White cedar / Willow'))
			text.add(5, [Text.gold('- Place 3 logs of '), Text.of('stripped ').red(), Text.of('wood horizontally on one line').gold()])
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
			text.add(1, Text.gold('Creating a firepit'))
			text.add(2, Text.gold('- Put 1 log and 3 sticks together on top of a block'))
			text.add(3, Text.gold('- Use a Fire Starter or Flint & Steel - burn the top of the block '))
			text.add(4, Text.gold('- Greater chance when you put paper, straw and/or pinecones - optional'))
		}
	})
	tooltip.addAdvanced('minecraft:glass_bottle', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('It is not only bottle'))
			text.add(2, Text.gold('Has a small amount of air inside'))
			text.add(3, Text.gold('Very useful when diving'))
		}
	})
	tooltip.addAdvanced([//#hordes:infection_cures
		'minecraft:golden_apple',
		'kubejs:silver_carrot',
		'kubejs:silver_apple',
		'minecraft:golden_carrot',
		'farmersdelight:squid_ink_pasta',
		'minecraft:enchanted_golden_apple'
	], (item, advanced, text) => {
		text.add(1, Text.gold('Cures Zombie Infection'))
	})
	tooltip.addAdvanced([//#forge:space_ores
		'beyond_earth:raw_desh',
		'beyond_earth:raw_ostrum',
		'beyond_earth:raw_calorite'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Mineral ores from other planets'))
			text.add(2, [Text.gold('You will only find them on the '), Text.red('Moon and other planets')])
		}
	})
	tooltip.addAdvanced([//#forge:dead_animal
		'butchersdelight:dead_cow',
		'butchersdelight:deadsheep',
		'butchersdelight:deadpig',
		'butchersdelight:deadgoat',
		'butchersdelight:deadhoglin',
		'butchersdelight:deadchiken',
		'butchersdelight:deadrabbitbrown',
		'butchersdelight:deadllama',
		'butchersdelight:deadstrider'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.gold('Hang a dead animal on a hook from '), Text.red('ButchersDelight')])
			text.add(2, Text.gold('Small animals (chicken, rabbit) place on ground'))
			text.add(3, Text.gold('Use any knife and dissect the meat'))
			//text.add(3, Text.gold('Optionally you can roast them over a campfire but you get less meat ' ))
			//this cannot be done since the vanilla campfire is removed
			//TODO: update if there is another way to bake the whole animal
		}
	})
	tooltip.addAdvanced([//#tfc:drink_items
		'tfc:ceramic/jug',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Use this item to store drinking water'))
			text.add(2, Text.gold('But be careful, fresh water can sometimes give you poisoning'))
			text.add(3, Text.gold('Drink only boiled, purified or mineral water'))
		}
	})
	tooltip.addAdvanced([//#tfc:lamp_fuel
		'tfc:bucket/tallow',
		'tfc:bucket/olive_oil',
		'immersiveengineering:creosote_bucket'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('You can use as fuel in a lamp'))
			text.add(2, Text.gold('It is enough for a long burn time'))
		}
	})
	tooltip.addAdvanced('myrtrees:latex', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.gold('Obtained from tapping into '), Text.yellow('Rubberwood Trees'), Text.gold('.')])
			text.add(2, Text.gold('A rubberwood sapling can be obtained from sieving dirt.'))
			text.add(3, Text.yellow('They can only be planted on dirt that has no grass!'))
			text.add(4, Text.gold(''))
			text.add(5, [Text.gold('Place a '), Text.yellow('"Tree Tap"'), Text.gold(' on a rubberwood tree,')])
			text.add(6, [Text.gold('as well as a '), Text.yellow('"Bucket for Latex"'), Text.gold(' right below.')])
			text.add(7, Text.gold('Latex liquid should then start collecting.'))
			text.add(8, Text.gold('Right click the bucket to see how much is stored.'))
			text.add(9, [Text.yellow('1000mb'), Text.gold(' is equal to '), Text.yellow('one latex.')])
			text.add(10, [Text.gold('Each tree can produce up to '), Text.yellow('10 latex'), Text.gold(' in total.')])
			text.add(11, Text.gold(''))
		}
	})
	tooltip.addAdvanced('farmersrespite:coffee_berries', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Coffee fruits can be found exclusively on coffee bushes'))
			text.add(2, Text.gold('They grow in the Nether in basalt biomes'))
			text.add(3, Text.gold('The journey can be difficult but rewarding'))
		}
	})
	tooltip.addAdvanced('tfc:food/cattail_root', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Cattails you can find near water'))
			text.add(2, Text.gold('Look for lakes and reservoirs of water'))
			text.add(3, Text.gold('Use a knife - Does not always drop'))
		}
	})
	tooltip.addAdvanced('adpother:dust', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Released by millstones, saws, crushers and similar machines.'))
			text.add(2, Text.gold('Degrades the ground when absorbed by it.'))
			text.add(3, Text.gold('Explodes when in high concentration with a fire source nearby.'))
			text.add(4, [Text.of('Type ').gold(), Text.of('$filters/dust').yellow(), Text.of(' into the search bar for a full list of filters!').gold()])
		}
	})
	tooltip.addAdvanced('adpother:carbon', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Released from fire sources and heavy machinery along with sulfur.'))
			text.add(2, Text.gold('Large buildups cause severe debuffs to living beings.'))
			text.add(3, Text.gold('Explodes when in high concentration with a fire source nearby.'))
			text.add(4, [Text.of('Type ').gold(), Text.of('$filters/carbon').yellow(), Text.of(' into the search bar for a full list of filters!').gold()])
		}
	})
	tooltip.addAdvanced('adpother:sulfur', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Released from fire sources and heavy machinery along with carbon.'))
			text.add(2, Text.gold('Large buildups cause severe debuffs to living beings.'))
			text.add(3, Text.gold('Explodes when in high concentration with a fire source nearby.'))
			text.add(4, [Text.of('Type ').gold(), Text.of('$filters/sulfur').yellow(), Text.of(' into the search bar for a full list of filters!').gold()])
		}
	})

	tooltip.addAdvanced([
		/^adpother:.+_respirator$/,
		'beyond_earth:oxygen_mask',
		'beyond_earth:netherite_oxygen_mask',
		'create:diving_helmet',
		'create:netherite_diving_helmet',
		'mekanism:hazmat_mask',
		'mekanism:scuba_mask'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Protects from harmful pollution-borne debuffs!'))
			text.add(2, [Text.of('A filter item can be applied in a ').gold(), Text.of('vanilla anvil').yellow(), Text.of('.').gold()])
			text.add(3, Text.gold('Multiple different filters can be active at once.'))
			text.add(4, [Text.of('Prevents eating and some right-click interactions').yellow(), Text.of(',').gold()])
			text.add(5, Text.gold('no matter if it has filters installed or not.'))
		}
	})
	tooltip.addAdvanced([
		'mekanism:mekasuit_helmet',
		'pneumaticcraft:pneumatic_helmet'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Protects from harmful pollution-borne debuffs!'))
			text.add(2, [Text.of('A filter item can be applied in a ').gold(), Text.of('vanilla anvil').yellow(), Text.of('.').gold()])
			text.add(3, Text.gold('Multiple different filters can be active at once.'))
			text.add(4, Text.gold('Unlike other respirator helmets,'))
			text.add(5, [Text.of('this one ').gold(), Text.of('does not').yellow(), Text.of(' prevent eating!').gold()])
		}
	})
	tooltip.addAdvanced([
		/^adpother:.+_vacuum_bag$/
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.of('Equip this to collect pollution sucked in with a ').gold(), Text.of('Vacuum Tube').yellow(), Text.of('!').gold()])
			text.add(2, [Text.of('A filter item can be applied in a ').gold(), Text.of('vanilla anvil').yellow(), Text.of('.').gold()])
			text.add(3, [Text.of('Applying a filter to a bag requires ').gold(), Text.of('two filter items').yellow(), Text.of(' per use.').gold()])
			text.add(4, Text.gold('Multiple different filters can be active at once.'))
		}
	})
	tooltip.addAdvanced([
		/^adpother:.+_vacuum_tube$/
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.of('Lets you ').gold(), Text.of('collect pollution manually').yellow(), Text.of('!').gold()])
			text.add(2, [Text.of('You will need a ').gold(), Text.of('vacuum bag').yellow(), Text.of(' to use it.').gold()])
			text.add(3, Text.gold('If your vacuum bag does not have a matching filter,'))
			text.add(4, Text.gold('or the filter runs out, or you don\'t have a bag equipped at all,'))
			text.add(5, Text.gold('it will simply move the pollution to your feet.'))
		}
	})
	tooltip.addAdvanced([
		/^adpother:.+_filter_frame$/
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.of('Absorbs pollution routed into it from below').gold()])
			text.add(2, [Text.of('with a ').gold(), Text.of('Chimney').yellow(), Text.of(' or with a ').gold(), Text.of('Pump').yellow(), Text.of(' directly.').gold()])
			text.add(3, Text.gold('Has a storage for filter items. Can only use one type at once.'))
			text.add(4, Text.gold('Filters degrade much faster than in respirators or vacuum bags.'))
			text.add(5, Text.gold(''))
		}
	})
	tooltip.addAdvanced([
		/^adchimneys:.+_chimney$/
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.of('Moves pollution ').gold(), Text.of('vertically').yellow(), Text.of('! Up, to be more specific.').gold()])
			text.add(2, [Text.of('Pollution has to first be captured via a ').gold(), Text.of('pump').yellow(), Text.of(' or ').gold(), Text.of('vent').yellow(), Text.of('.').gold()])
			text.add(3, Text.gold('A vent can transfer pollution into a chimney from its side or bottom.'))
			text.add(4, Text.gold('Has no range limit, since it lets gravity do the work.'))
		}
	})
	tooltip.addAdvanced([
		/^adchimneys:.+_vent$/
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.of('Moves pollution ').gold(), Text.of('horizontally').yellow(), Text.of('!').gold()])
			text.add(2, [Text.of('Pollution has to be first captured via a ').gold(), Text.of('pump').yellow(), Text.of(', or transferred from a ').gold(), Text.of('chimney').yellow(), Text.of('.').gold()])
			text.add(3, [Text.of('Captures nearby pollution when powered by a ').gold(), Text.of('Pump').yellow(), Text.of('.').gold()])
			text.add(4, Text.gold('Can pull pollution from up to three blocks away, and only in a straight line. No diagonals.'))
			text.add(5, [Text.of('Loses pump power when over ').gold(), Text.of('30 blocks').yellow(), Text.of(' away from a pump.').gold()])
		}
	})
	tooltip.addAdvanced([
		/^adchimneys:.+_pump$/
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, [Text.of('Powers ').gold(), Text.of('vents').yellow(), Text.of(' to let them capture and move pollution!').gold()])
			text.add(2, [Text.of('Needs ').gold(), Text.of('redstone signal ').yellow(), Text.of(' to operate. A lever is a good option!').gold()])
			text.add(3, Text.gold('Works by pulling pollution from horizontally adjacent vents.'))
			text.add(4, [Text.of('Will "power" (pull from) a chain of up to ').gold(), Text.of('30 vents').yellow(), Text.of('.').gold()])
			text.add(5, Text.gold(''))
			text.add(6, Text.gold('A simple pollution control setup is a line of vents on the ceiling,'))
			text.add(7, Text.gold('a pump somewhere in the middle, and a column of chimneys above it,'))
			text.add(8, Text.gold('capped with a few filter frames.'))
			text.add(9, Text.gold('The vents will pick up pollution, lead it to the pump,'))
			text.add(10, Text.gold('and the pump will release it directly upwards into the chimneys.'))
			text.add(11, Text.gold('The pollution will then be absorbed by the filter frames.'))
		}
	})
	tooltip.addAdvanced(['adpother:aerometer'], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.yellow('Shows pollution level when held!'))
			text.add(2, Text.gold('Gray, black and yellow gauges will appear on the model'))
			text.add(3, Text.gold('when the pollution level is above 0%.'))
			text.add(4, Text.gold('Exact percentage will also be shown in item tooltip.'))
		}
	})
	tooltip.add('waystones:waystone', ["Hard item to craft, don't lose it", 'will provide you with a way to teleport'])

	tooltip.addAdvanced(['toolbelt:belt'], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.yellow('Can hold any unstackable item!'))
			text.add(2, [Text.of('Access the slot with ').gold(), getKeybind('key.toolbelt.slot')])
			text.add(3, [Text.of('then hold any unstackable item and hold ').gold(), getKeybind('key.toolbelt.open')])
			text.add(4, Text.gold('to bring up a radial menu.'))
			text.add(5, Text.gold(''))
			text.add(6, Text.gold('Can be upgraded to hold more items.'))
			text.add(7, [Text.of('You can get up to ').gold(), Text.of('2 slots').yellow(), Text.of(' with a ').gold(), Text.of('bone needle').yellow(), Text.of(',').gold()])
			text.add(8, [Text.of('up to ').gold(), Text.of('4').yellow(), Text.of(' with an ').gold(), Text.of('iron').yellow(), Text.of(' and up to ').gold(), Text.of('9').yellow(), Text.of(' with a ').gold(), Text.of('netherite').yellow(), Text.of('!').gold()])
		}
	})
	tooltip.addAdvanced([
		'firmalife:oven_chimney',
		'firmalife:cured_stone_oven_chimney',
		'firmalife:cured_tile_oven_chimney',
		'firmalife:cured_rustic_oven_chimney',
		'firmalife:cured_oven_chimney'
	], (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Three must be placed behind main oven parts.'))
			text.add(2, Text.gold('See the guidebook entry for more info!'))
		}
	})

	const nutrients = ['Grain', 'Fruit', 'Vegetables', 'Protein', 'Dairy']
	nutrients.forEach(nutrient => {
		['soup', 'salad'].forEach(foodType => {
			tooltip.addAdvanced(`tfc:food/${nutrient.toLowerCase()}_${foodType}`, (item, advanced, text) => {
				if (tooltip.shift) {
					text.add([Text.of('Made when ').gray(), Text.of(nutrient).white(), Text.of(' is the highest nutrient').gray()])
				}
			})
		})
	})
	tooltip.addAdvanced('firmalife:food/stinky_soup', (item, advanced, text) => {
		if (tooltip.shift) {
			text.add([Text.of('Made by adding ').gray(), Text.of('Nightshade').white(), Text.of('. Be careful!').gray()])
		}
	})
	tooltip.addAdvanced('supplementaries:pancake', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Inedible. Will not rot. Can be placed.'))
			text.add(2, Text.darkGray('What have you done...'))
		}
	})
	tooltip.addAdvanced(/^kubejs:prop_foods\//, (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Inedible. Will not rot.'))
			text.add(2, Text.darkGray('What have you done...'))
		}
	})
})