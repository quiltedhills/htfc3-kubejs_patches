onEvent('jei.remove.recipes', event => {
	// I saved a recipe type dump to 'hide_jei_recipes_types.txt'.
	// You can refer to that file to get category names for this script!

	event.remove('tfc:sealed_barrel', [
		'hardrock:tfc_barrel/ice_shavings_with_water',
		'hardrock:tfc_barrel/snowball_with_water'
	])



	// this feels so wrong
	event.remove('immersiveengineering:bottlingmachine', [
		'immersiveengineering:jei_bucket_acetaldehyde',
		'immersiveengineering:jei_bucket_active_redstone',
		'immersiveengineering:jei_bucket_amethyst_bronze',
		'immersiveengineering:jei_bucket_andesite_alloy',
		'immersiveengineering:jei_bucket_andesite_stone',
		'immersiveengineering:jei_bucket_beer',
		'immersiveengineering:jei_bucket_beetroot_soup',
		'immersiveengineering:jei_bucket_benzene',
		'immersiveengineering:jei_bucket_biodiesel',
		'immersiveengineering:jei_bucket_bioethanol',   // no effect
		'immersiveengineering:jei_bucket_black_dye',
		'immersiveengineering:jei_bucket_blazing_blood',
		'immersiveengineering:jei_bucket_blood',
		'immersiveengineering:jei_bucket_blue_dye',
		'immersiveengineering:jei_bucket_boiled_water',
		'immersiveengineering:jei_bucket_brine',   // no effect
		'immersiveengineering:jei_bucket_brown_dye',
		//'immersiveengineering:jei_bucket_builders_tea',
		'immersiveengineering:jei_bucket_chlorine',
		'immersiveengineering:jei_bucket_chocolate',   // no effect
		'immersiveengineering:jei_bucket_cider',
		'immersiveengineering:jei_bucket_coconut_milk',
		'immersiveengineering:jei_bucket_concrete',
		'immersiveengineering:jei_bucket_corn_whiskey',
		'immersiveengineering:jei_bucket_cream',
		'immersiveengineering:jei_bucket_creosote',
		'immersiveengineering:jei_bucket_crudeoil',
		'immersiveengineering:jei_bucket_curdled_goat_milk',
		'immersiveengineering:jei_bucket_curdled_milk',
		'immersiveengineering:jei_bucket_curdled_yak_milk',
		'immersiveengineering:jei_bucket_cyan_dye',
		'immersiveengineering:jei_bucket_dark_chocolate',
		'immersiveengineering:jei_bucket_deuterium',
		'immersiveengineering:jei_bucket_diesel',
		'immersiveengineering:jei_bucket_diesel_sulfur',
		'immersiveengineering:jei_bucket_earth_slime',
		'immersiveengineering:jei_bucket_ender_slime',
		'immersiveengineering:jei_bucket_etching_acid',
		'immersiveengineering:jei_bucket_ethanol',
		'immersiveengineering:jei_bucket_ethene',
		'immersiveengineering:jei_bucket_ethylene',
		'immersiveengineering:jei_bucket_fake_lava',
		'immersiveengineering:jei_bucket_fake_water',
		'immersiveengineering:jei_bucket_fiery_essence',
		'immersiveengineering:jei_bucket_fluid_xp',
		'immersiveengineering:jei_bucket_fruity_fluid',
		'immersiveengineering:jei_bucket_fuel',
		'immersiveengineering:jei_bucket_fusion_fuel',
		'immersiveengineering:jei_bucket_gasoline',
		'immersiveengineering:jei_bucket_gasoline_additives',
		'immersiveengineering:jei_bucket_goat_milk',
		'immersiveengineering:jei_bucket_gray_dye',
		'immersiveengineering:jei_bucket_green_dye',
		'immersiveengineering:jei_bucket_heavy_water',
		'immersiveengineering:jei_bucket_herbal_water',
		'immersiveengineering:jei_bucket_herbicide',
		'immersiveengineering:jei_bucket_honey',   // no effect
		'immersiveengineering:jei_bucket_hydrofluoric_acid',
		'immersiveengineering:jei_bucket_hydrogen',
		'immersiveengineering:jei_bucket_hydrogen_chloride',
		'immersiveengineering:jei_bucket_kerosene',
		'immersiveengineering:jei_bucket_lava',
		'immersiveengineering:jei_bucket_light_blue_dye',
		'immersiveengineering:jei_bucket_light_gray_dye',
		'immersiveengineering:jei_bucket_lime_dye',
		'immersiveengineering:jei_bucket_limewater',
		'immersiveengineering:jei_bucket_liquid_soul',
		'immersiveengineering:jei_bucket_lithium',
		'immersiveengineering:jei_bucket_lpg',
		'immersiveengineering:jei_bucket_lubricant',
		'immersiveengineering:jei_bucket_lubricant_cracked',
		'immersiveengineering:jei_bucket_lye',
		'immersiveengineering:jei_bucket_magenta_dye',
		'immersiveengineering:jei_bucket_magma',
		'immersiveengineering:jei_bucket_mead',
		'immersiveengineering:jei_bucket_memory_essence',
		'immersiveengineering:jei_bucket_milk',
		'immersiveengineering:jei_bucket_milk_chocolate',
		'immersiveengineering:jei_bucket_milk_vinegar',
		'immersiveengineering:jei_bucket_mineral_water',
		'immersiveengineering:jei_bucket_mushroom_stew',
		'immersiveengineering:jei_bucket_napalm',
		'immersiveengineering:jei_bucket_naphtha',
		'immersiveengineering:jei_bucket_naphtha_cracked',
		'immersiveengineering:jei_bucket_nutritional_paste',
		'immersiveengineering:jei_bucket_oat_milk',
		'immersiveengineering:jei_bucket_oil',   // no effect
		'immersiveengineering:jei_bucket_olive_oil',
		'immersiveengineering:jei_bucket_olive_oil_water',
		'immersiveengineering:jei_bucket_orange_dye',
		'immersiveengineering:jei_bucket_oxygen',
		'immersiveengineering:jei_bucket_phenolic_resin',
		'immersiveengineering:jei_bucket_pina_colada',
		'immersiveengineering:jei_bucket_pink_dye',
		'immersiveengineering:jei_bucket_plantoil',
		'immersiveengineering:jei_bucket_plastic',
		'immersiveengineering:jei_bucket_polluted_water_still',
		'immersiveengineering:jei_bucket_potion',   // no effect
		'immersiveengineering:jei_bucket_propylene',
		'immersiveengineering:jei_bucket_purified_water',
		'immersiveengineering:jei_bucket_purple_dye',
		'immersiveengineering:jei_bucket_rabbit_stew',
		'immersiveengineering:jei_bucket_red_dye',
		'immersiveengineering:jei_bucket_redstone_acid',
		'immersiveengineering:jei_bucket_river_water',
		'immersiveengineering:jei_bucket_rum',
		'immersiveengineering:jei_bucket_rye_whiskey',
		'immersiveengineering:jei_bucket_sake',
		'immersiveengineering:jei_bucket_salt_water',
		'immersiveengineering:jei_bucket_scorched_stone',
		'immersiveengineering:jei_bucket_sea_water',
		'immersiveengineering:jei_bucket_seared_stone',
		'immersiveengineering:jei_bucket_seed_oil',
		'immersiveengineering:jei_bucket_seed_oil_water',
		'immersiveengineering:jei_bucket_sky_slime',
		'immersiveengineering:jei_bucket_sodium',
		//'immersiveengineering:jei_bucket_soy_milk',
		'immersiveengineering:jei_bucket_spring_water',
		'immersiveengineering:jei_bucket_steam',
		'immersiveengineering:jei_bucket_sugar_water',
		'immersiveengineering:jei_bucket_sulfur_dioxide',
		'immersiveengineering:jei_bucket_sulfur_trioxide',
		'immersiveengineering:jei_bucket_sulfuric_acid',
		'immersiveengineering:jei_bucket_superheated_sodium',
		'immersiveengineering:jei_bucket_tallow',
		'immersiveengineering:jei_bucket_tannin',
		'immersiveengineering:jei_bucket_tritium',
		'immersiveengineering:jei_bucket_uranium_hexafluoride',
		'immersiveengineering:jei_bucket_uranium_oxide',
		'immersiveengineering:jei_bucket_venom',
		'immersiveengineering:jei_bucket_vinegar',
		'immersiveengineering:jei_bucket_vodka',
		'immersiveengineering:jei_bucket_water',
		'immersiveengineering:jei_bucket_whiskey',
		'immersiveengineering:jei_bucket_white_chocolate',
		'immersiveengineering:jei_bucket_white_dye',
		'immersiveengineering:jei_bucket_yak_milk',
		'immersiveengineering:jei_bucket_yeast_culture',
		'immersiveengineering:jei_bucket_yeast_starter',
		'immersiveengineering:jei_bucket_yellow_dye',
		'immersiveengineering:jei_bucket_metal/aluminum',
		'immersiveengineering:jei_bucket_metal/bismuth',
		'immersiveengineering:jei_bucket_metal/bismuth_bronze',
		'immersiveengineering:jei_bucket_metal/black_bronze',
		'immersiveengineering:jei_bucket_metal/black_steel',
		'immersiveengineering:jei_bucket_metal/blue_steel',
		'immersiveengineering:jei_bucket_metal/brass',
		'immersiveengineering:jei_bucket_metal/bronze',
		'immersiveengineering:jei_bucket_metal/cast_iron',
		'immersiveengineering:jei_bucket_metal/chromium',
		'immersiveengineering:jei_bucket_metal/constantan',
		'immersiveengineering:jei_bucket_metal/copper',
		'immersiveengineering:jei_bucket_metal/electrum',
		'immersiveengineering:jei_bucket_metal/gold',
		'immersiveengineering:jei_bucket_metal/high_carbon_black_steel',
		'immersiveengineering:jei_bucket_metal/high_carbon_blue_steel',
		'immersiveengineering:jei_bucket_metal/high_carbon_red_steel',
		'immersiveengineering:jei_bucket_metal/high_carbon_steel',
		'immersiveengineering:jei_bucket_metal/lead',
		'immersiveengineering:jei_bucket_metal/nickel',
		'immersiveengineering:jei_bucket_metal/pig_iron',
		'immersiveengineering:jei_bucket_metal/red_steel',
		'immersiveengineering:jei_bucket_metal/rose_gold',
		'immersiveengineering:jei_bucket_metal/silver',
		'immersiveengineering:jei_bucket_metal/stainless_steel',
		'immersiveengineering:jei_bucket_metal/steel',
		'immersiveengineering:jei_bucket_metal/sterling_silver',
		'immersiveengineering:jei_bucket_metal/tin',
		'immersiveengineering:jei_bucket_metal/unknown',
		'immersiveengineering:jei_bucket_metal/uranium',
		'immersiveengineering:jei_bucket_metal/weak_blue_steel',
		'immersiveengineering:jei_bucket_metal/weak_red_steel',
		'immersiveengineering:jei_bucket_metal/weak_steel',
		'immersiveengineering:jei_bucket_metal/wrought_iron',
		'immersiveengineering:jei_bucket_metal/zinc',
		'immersiveengineering:jei_bucket_molten_aluminum',
		'immersiveengineering:jei_bucket_molten_amethyst',
		'immersiveengineering:jei_bucket_molten_amethyst_bronze',
		'immersiveengineering:jei_bucket_molten_brass',
		'immersiveengineering:jei_bucket_molten_bronze',
		'immersiveengineering:jei_bucket_molten_calorite',
		'immersiveengineering:jei_bucket_molten_clay',
		'immersiveengineering:jei_bucket_molten_cobalt',
		'immersiveengineering:jei_bucket_molten_constantan',
		'immersiveengineering:jei_bucket_molten_copper',
		'immersiveengineering:jei_bucket_molten_debris',
		'immersiveengineering:jei_bucket_molten_desh',
		'immersiveengineering:jei_bucket_molten_diamond',
		'immersiveengineering:jei_bucket_molten_electrum',
		'immersiveengineering:jei_bucket_molten_emerald',
		'immersiveengineering:jei_bucket_molten_ender',
		'immersiveengineering:jei_bucket_molten_enderium',
		'immersiveengineering:jei_bucket_molten_fiery',
		'immersiveengineering:jei_bucket_molten_glass',
		'immersiveengineering:jei_bucket_molten_gold',
		'immersiveengineering:jei_bucket_molten_hepatizon',
		'immersiveengineering:jei_bucket_molten_invar',
		'immersiveengineering:jei_bucket_molten_iron',
		'immersiveengineering:jei_bucket_molten_iron_quartz',
		'immersiveengineering:jei_bucket_molten_knightmetal',
		'immersiveengineering:jei_bucket_molten_knightslime',
		'immersiveengineering:jei_bucket_molten_lead',
		'immersiveengineering:jei_bucket_molten_lumium',
		'immersiveengineering:jei_bucket_molten_manyullyn',
		'immersiveengineering:jei_bucket_molten_netherite',
		'immersiveengineering:jei_bucket_molten_nickel',
		'immersiveengineering:jei_bucket_molten_obsidian',
		'immersiveengineering:jei_bucket_molten_osmium',
		'immersiveengineering:jei_bucket_molten_ostrum',
		'immersiveengineering:jei_bucket_molten_pewter',
		'immersiveengineering:jei_bucket_molten_pig_iron',
		'immersiveengineering:jei_bucket_molten_platinum',
		'immersiveengineering:jei_bucket_molten_porcelain',
		'immersiveengineering:jei_bucket_molten_quartz',
		'immersiveengineering:jei_bucket_molten_queens_slime',
		'immersiveengineering:jei_bucket_molten_refined_glowstone',
		'immersiveengineering:jei_bucket_molten_refined_obsidian',
		'immersiveengineering:jei_bucket_molten_rose_gold',
		'immersiveengineering:jei_bucket_molten_signalum',
		'immersiveengineering:jei_bucket_molten_silver',
		'immersiveengineering:jei_bucket_molten_slimesteel',
		'immersiveengineering:jei_bucket_molten_soulsteel',
		'immersiveengineering:jei_bucket_molten_steel',
		'immersiveengineering:jei_bucket_molten_tin',
		'immersiveengineering:jei_bucket_molten_tungsten',
		'immersiveengineering:jei_bucket_molten_uranium',
		'immersiveengineering:jei_bucket_molten_zinc',
		'minecraft:water',

		'minecraft:awkward',
		'minecraft:fire_resistance',
		'minecraft:long_fire_resistance',
		'minecraft:harming',
		'minecraft:strong_harming',
		'minecraft:healing',
		'minecraft:strong_healing',
		'minecraft:invisibility',
		'minecraft:long_invisibility',
		'minecraft:leaping',
		'minecraft:long_leaping',
		'minecraft:strong_leaping',
		'minecraft:long_weakness',
		'minecraft:night_vision',
		'minecraft:long_night_vision',
		'minecraft:poison',
		'minecraft:long_poison',
		'minecraft:strong_poison',
		'minecraft:regeneration',
		'minecraft:long_regeneration',
		'minecraft:strong_regeneration',
		'minecraft:slow_falling',
		'minecraft:long_slow_falling',
		'minecraft:slowness',
		'minecraft:long_slowness',
		'minecraft:strong_slowness',
		'minecraft:strength',
		'minecraft:long_strength',
		'minecraft:strong_strength',
		'minecraft:swiftness',
		'minecraft:long_swiftness',
		'minecraft:strong_swiftness',
		'minecraft:turtle_master',
		'minecraft:long_turtle_master',
		'minecraft:strong_turtle_master',
		'minecraft:water_breathing',
		'minecraft:long_water_breathing',
		'minecraft:weakness',
	])

	event.remove('immersiveengineering:mixer', [
		'minecraft:awkward_0',
		'minecraft:fire_resistance_0',
		'minecraft:long_fire_resistance_0',
		'minecraft:harming_0',
		'minecraft:strong_harming_0',
		'minecraft:harming_1',
		'minecraft:strong_harming_1',
		'minecraft:harming_2',
		'minecraft:strong_harming_2',
		'minecraft:healing_0',
		'minecraft:strong_healing_0',
		'minecraft:invisibility_0',
		'minecraft:long_invisibility_0',
		'minecraft:long_invisibility_1',
		'minecraft:leaping_0',
		'minecraft:long_leaping_0',
		'minecraft:strong_leaping_0',
		'minecraft:long_weakness_0',
		'minecraft:night_vision_0',
		'minecraft:long_night_vision_0',
		'minecraft:poison_0',
		'minecraft:long_poison_0',
		'minecraft:strong_poison_0',
		'minecraft:regeneration_0',
		'minecraft:long_regeneration_0',
		'minecraft:strong_regeneration_0',
		'minecraft:slow_falling_0',
		'minecraft:long_regeneration_0',
		'minecraft:slowness_0',
		'minecraft:long_slowness_0',
		'minecraft:strong_slowness_0',
		'minecraft:slowness_1',
		'minecraft:long_slowness_1',
		'minecraft:long_slowness_2',
		'minecraft:strength_0',
		'minecraft:long_strength_0',
		'minecraft:strong_strength_0',
		'minecraft:swiftness_0',
		'minecraft:long_swiftness_0',
		'minecraft:strong_swiftness_0',
		'minecraft:turtle_master_0',
		'minecraft:long_turtle_master_0',
		'minecraft:strong_turtle_master_0',
		'minecraft:water_breathing_0',
		'minecraft:long_water_breathing_0',
		'minecraft:weakness_0',
	])
})