// priority: 0

console.info('Registering KJS Items...')

onEvent('item.registry', event => {
	event.create('metal/double_sheet/electrum')   // display names are in kubejs/assets/kubejs/en_us.json
	event.create('metal/double_sheet/constantan')
	event.create('metal/double_sheet/aluminum')
	event.create('metal/double_sheet/lead')
	event.create('metal/double_sheet/uranium')

	event.create('misc_mats/andesite_alloy/rod')
	event.create('misc_mats/andesite_alloy/sheet')
	event.create('misc_mats/netherite/rod')

	event.create('misc_mats/healing_salve')
	event.create('misc_mats/mineral_mix')
	event.create('misc_mats/ceramic_shards')
	event.create('misc_mats/refined_vanilla')
	event.create('misc_mats/hand_sanitizer')  .displayName('Hand Sanitizer')
	
	//Oil Items: no longer needed
	/*
	event.create('misc_mats/soaked_coconut')
	event.create('misc_mats/washed_coconut')
	event.create('misc_mats/ground_coconut')
	event.create('misc_mats/coconut_mash')
	event.create('misc_mats/washed_maize')
	
	event.create('misc_mats/coconut_paste')
	event.create('misc_mats/soy_paste')
	event.create('misc_mats/corn_paste')
	*/
	//End oil items.
	
	event.create('prop_foods/cookie').texture('minecraft:item/cookie')

	event.create('magnet/copper')			.unstackable() 
	event.create('magnet/colored_steel')	.unstackable().rarity('uncommon')
	event.create('magnet/hdpe_offline')		.unstackable().rarity('common')
	event.create('magnet/hdpe')				.unstackable().rarity('rare')
	event.create('magnet/polonium')			.unstackable().rarity('epic')
	
	event.create('gravedigger', 'shovel').displayName('Gravedigger Shovel').rarity('uncommon')
		.tier('castIron').attackDamageBaseline(0.5 - 1).speedBaseline(0.9 - 4)
	event.create('sanitizer_bottle').unstackable().rarity('uncommon')
		.barWidth(itemstack => Math.floor((itemstack?.nbt?.CustomModelData || 0) / (1000 / 13))) // full bar is 13
		.barColor(itemstack => Color.AQUA)
		.use((level, player, hand) => true)
	event.create('raw_cookie')		.food(food => {food.hunger(1).saturation(0) })//.eaten(ctx => {ctx.player.tell(Text.gold('Yummy Yummy!'))})})
	event.create('silver_carrot')	.food(food => {food.hunger(1).saturation(0).alwaysEdible() })//.eaten(ctx => {ctx.player.tell(Text.gold('Silver works - Zombie - not today!'))})})
	event.create('silver_apple')	.food(food => {food.hunger(1).saturation(0).alwaysEdible() })//.eaten(ctx => {ctx.player.tell(Text.gold('Silver works - Zombie - not today!'))})})
	event.create('raw_pancake')		.food(food => {food.hunger(1).saturation(0) })//.eaten(ctx => {ctx.player.tell(Text.gold('Mniaam Miaammm!'))})})
	event.create('pancake')			.food(food => {food.hunger(3).saturation(0.6) })//.eaten(ctx => {ctx.player.tell(Text.gold('Mniaam Miaammm!'))})})
	event.create('boiled_grass')	.food(food => {food.hunger(1).saturation(0.25) })//.eaten(ctx => {ctx.player.tell(Text.gold('hmmm boiled grass? Not Bad!'))})})
	event.create('shark_meat')					.displayName('Raw Shark Meat')		.food(food => {food.hunger(3).saturation(0.5) })//.eaten(ctx => {ctx.player.tell(Text.gold('Bleee Raw Shark!'))})})
	event.create('shark_cooked_meat')			.displayName('Cooked Shark Meat')	.food(food => {food.hunger(7).saturation(1.0) })//.eaten(ctx => {ctx.player.tell(Text.gold('Mniaam Cooked Shark!'))})})
	event.create('crumbled_rock')
	event.create('andesite_rock_powder')
	event.create('clean_amethyst_powder')		.displayName('Amethyst Dust')
	event.create('cut_tea_leaves')
	event.create('dry_tea_leaves')
	event.create('cut_cattail')
	event.create('tree_seed_paste')
	event.create('seed_paste')
	event.create('primitive_glass_pane')
	event.create('raw_platinum')
	event.create('seed_biomass')
	event.create('vulcanized_rubber')
	event.create('pile_carbon_waste')			.displayName('Pile of Carbon Waste')
	event.create('pile_sulfur_waste')			.displayName('Pile of Sulfur Waste')
	event.create('sulfur_waste')				.displayName('Dirty Sulfur Waste Dust')
	event.create('nutrimix')					.displayName('Nutritional Mix')
	event.create('feed_hay')					.displayName('Hay Feed')
	event.create('feed_meat')					.displayName('Meat Feed')
	event.create('feed_seed')					.displayName('Seed Feed')
	event.create('feed_vege')					.displayName('Vegetable Feed')
	event.create('feed_fruit')					.displayName('Fruit Feed')
	event.create('slot_pocket')					.displayName('Additional Slot Pocket')
	event.create('medical_white_powder')		.displayName('Medicinal White Powder')
	event.create('medical_red_powder')			.displayName('Medicinal Red Powder')
	event.create('medical_green_powder')		.displayName('Medicinal Green Powder')
	//event.create('chisel_stone_head')			.displayName('Stone Bit Chisel Head')
	event.create('chisel_iron_head')			.displayName('Wrought Iron Bit Chisel Head')
	event.create('chisel_rose_gold_head')		.displayName('Rose Gold Bit Chisel Head')
	event.create('chisel_blue_steel_head')		.displayName('Blue Steel Bit Chisel Head')
	event.create('chisel_compressed_iron_head')	.displayName('Compressed Iron Bit Chisel Head')
	event.create('spool_wire')					.displayName('Spool')
	event.create('sq_tieless')					.displayName('Incomplete Tieless Train Track')
	event.create('sq_ins_copp')					.displayName('Incomplete Insulated LV Wire Coil')
	event.create('sq_ins_elec')					.displayName('Incomplete Insulated MV Wire Coil')
	event.create('sq_spool_copper')				.displayName('Incomplete Copper Spool')
	event.create('sq_spool_gold')				.displayName('Incomplete Gold Spool')
	event.create('sq_wire_copp')				.displayName('Incomplete LV Wire Coil')
	event.create('sq_wire_elec')				.displayName('Incomplete MV Wire Coil')
	event.create('sq_wire_reds')				.displayName('Incomplete Redstone Wire Coil')
	event.create('sq_wire_steel')				.displayName('Incomplete Steel Cable Coil')
	event.create('sq_fluidpipecr')				.displayName('Incomplete Fluid Pipe')
	event.create('sq_fluidpipeie')				.displayName('Incomplete Fluid Pipe')
	event.create('sq_presstube')				.displayName('Incomplete Pressure Tube')
	event.create('sq_embpipe')					.displayName('Incomplete Embedded Pipe')
	event.create('stack_treated_wood')			.displayName('Stack of Treated Wood')
	event.create('big_stack_treated_wood')		.displayName('Large Stack of Treated Wood')
	event.create('press_head')					.displayName('Mechanical Press Head')
	event.create('hardened_press_head')			.displayName('Hardened Steel Press Head')
	event.create('canoe')						.displayName('Canoe - First Boat')
	event.create('un_casing')					.displayName('Incomplete Technic Block')
	event.create('un_sheet')					.displayName('Incomplete Technic Item')
	event.create('sugar_mass')					.displayName('Raw Sugar Mass')
	event.create('hemp_stack')					.displayName('Stack of Hemp Fibers')
	event.create('compressed_double_ingot')		.displayName('Compressed Iron Double Ingot')
	event.create('compressed_sheet')			.displayName('Compressed Iron Sheet')
	event.create('compressed_double_sheet')		.displayName('Compressed Iron Double Sheet')
	event.create('compressed_rod')				.displayName('Compressed Iron Rod')
	event.create('compressed_mesh')				.displayName('Compressed Iron Mesh')
	event.create('compressed_wire')				.displayName('Compressed Iron Wire')
	event.create('hide_tanned_s')				.displayName('Small Tanned Hide')
	event.create('hide_tanned_m')				.displayName('Medium Tanned Hide')
	event.create('hide_tanned_l')				.displayName('Large Tanned Hide')
	event.create('hide_oiled_s')				.displayName('Small Oiled Hide')
	event.create('hide_oiled_m')				.displayName('Medium Oiled Hide')
	event.create('hide_oiled_l')				.displayName('Large Oiled Hide')
	event.create('hide_finish_s')				.displayName('Small Leather')
	event.create('hide_finish_m')				.displayName('Medium Leather')
	event.create('hide_finish_l')				.displayName('Large Leather')
	event.create('medical_paste')				.displayName('Medicinal Herb Paste')
	event.create('magic_crystal')				.displayName('Magic Twilight Crystal')
	event.create('fuel_component')				.displayName('Rocket Fuel Catalyst')
	event.create('img_arcfurnace')				.displayName('img_arcfurnace')
	event.create('img_cokker')					.displayName('img_cokker')
	event.create('img_crusher')					.displayName('img_crusher')
	event.create('img_derrik')					.displayName('img_derrik')
	event.create('img_destillation')			.displayName('img_destillation')
	event.create('img_diesel')					.displayName('img_diesel')
	event.create('img_excavator')				.displayName('img_excavator')
	event.create('img_metalpress')				.displayName('img_metalpress')
	event.create('img_oiltank')					.displayName('img_oiltank')
	event.create('img_pumpjack')				.displayName('img_pumpjack')
	event.create('img_refinery')				.displayName('img_refinery')
	event.create('img_sawmill')					.displayName('img_sawmill')
	event.create('img_squezzer')				.displayName('img_squezzer')
	event.create('img_ores')					.displayName('img_ores')
	event.create('img_wiki')					.displayName('img_wiki')
	event.create('img_book')					.displayName('img_book')

	//event.create('food/dried_soybeans')			
	event.create('food/soaked_soybeans')		
	event.create('food/peeled_soybeans')		
	event.create('food/washed_soybeans')		
	event.create('food/ground_soy')				
	event.create('food/soy_mash')				
	event.create('food/okara')					.food(food=>{food.hunger(4).saturation(1)})
	event.create('food/soy_curds')				.food(food=>{food.hunger(4).saturation(0)})
	event.create('food/firm_tofu')				.food(food=>{food.hunger(8).saturation(2)})
	event.create('food/firm_tofu_chunk')		.food(food=>{food.hunger(4).saturation(1)})
	event.create('food/silken_tofu')			.food(food=>{food.hunger(8).saturation(1)})
	event.create('food/silken_tofu_chunk')		.food(food=>{food.hunger(4).saturation(1)})
	event.create('food/butter_pat')             .food(food=>{food.hunger(1).saturation(0)})
	event.create('food/cooked_roe')             .food(food=>{food.hunger(2).saturation(5)})
	event.create('food/builders_tea')
		.displayName("Builder's Tea")
		.useAnimation("drink")
		.useDuration((itemstack) => 40)
		.use((level, player, hand) => true)
		.finishUsing((itemstack, level, entity) => {
			let effects = entity.potionEffects;
			effects.add("haste", 180 * 20, 2)
			itemstack.itemStack.shrink(1)
			if(entity.player) {
				entity.minecraftPlayer.addItem(Item.of("minecraft:glass_bottle").itemStack)
			}
			return itemstack;
		})
	
	// long stick
	//event.create('long_stick').displayName('Long Stick').tool('sword').tier('stone').attackDamageBaseline(6.0)
})

//modifying existing items!

onEvent('item.modification', event => {
	event.modify('minecraft:golden_carrot', item => {
		item.foodProperties = food => {
			food.alwaysEdible()
		}
	})
	/*	
	event.modify('create:builders_tea', item => {
		item.foodProperties = food => {
			food.removeEffect("haste")
			food.effect("haste",180*20,2,1)
		}
	})	
	*/
	/*
	// Seems builder's tea behavior is hardcoded, will have to make alternate item and modify that way
	event.modify('create:builders_tea')
		.finishUsing((itemstack, level, entity) => {
			let effects = entity.potionEffects;
			effects.remove("haste")
			effects.add("haste", 180*20, 2)
			itemstack.itemStack.shrink(1)
			if(entity.player) {
				entity.minecraftPlayer.addItem(Item.of("minecraft:glass_bottle").itemStack)
			}
			return itemstack;
		})
	*/
	// roe:
	// kept separate in case different kinds of roe should have different risks, ie catfish roe being riskier than piranha roe
	event.modify('untamedwilds:egg_sunfish', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
	event.modify('untamedwilds:egg_trevally', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
	event.modify('untamedwilds:egg_arowana', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
	event.modify('untamedwilds:egg_football_fish', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
	event.modify('untamedwilds:egg_triggerfish', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
	event.modify('untamedwilds:egg_catfish', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
	event.modify('untamedwilds:egg_spadefish', item => {
		item.foodProperties = food => {
			food.hunger(2).saturation(5).effect("hunger", 1200, 1, 0.1).effect("nausea", 600, 4, 0.3).effect("poison", 200, 1, 0.05).effect("weakness", 1200, 1, 0.1)
		}
	})
})

//onEvent('item.registry.long_stick', event => {
//	event.add('long_stick', tier => {
//	  tier.uses = 250
//	  tier.speed = 6.0
//	  tier.attackDamageBonus = 2.0
//	  tier.level = 2
//	  tier.enchantmentValue = 14
//	  tier.repairIngredient = '#forge:ingots/iron'
//	})
//  })


onEvent('item.registry.tool_tiers', event => {
	// BRONZE =         (2, 1300, 7.3, 4.0, 13)
	// BISMUTH_BRONZE = (2, 1200, 6.65, 4.0, 10)
	// BLACK_BRONZE =   (2, 1460, 6.0, 4.25, 10)
	// WROUGHT_IRON =   (3, 2200, 8.0, 4.75, 12)
	event.add('castIron', tier => {
		tier.level = 2
		tier.uses = 800
		tier.speed = 4.5
		tier.attackDamageBonus = 4.5
		tier.enchantmentValue = 8
		tier.repairIngredient = '#forge:ingots/cast_iron'
	})
})


