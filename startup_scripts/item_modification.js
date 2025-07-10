onEvent('item.modification', event => {
	// durability changes
	event.modify('exnihilosequentia:stone_hammer', item => { item.maxDamage = 128 })
	event.modify('exnihilosequentia:iron_hammer', item => { item.maxDamage = 2048 })
	event.modify('immersiveengineering:screwdriver', item => { item.maxDamage = 16 })

	// various food tweaks
	event.modify('minecraft:golden_carrot', item => {
		item.foodProperties = food => {
			food.alwaysEdible()
		}
	})
	event.modify('untamedwilds:food_turtle_soup', item => { item.maxStackSize = 32 })



	// nourishment fix
	event.modify([
		'pneumaticcraft:cod_n_chips',
		'pneumaticcraft:salmon_tempura',
		'firmalife:food/banana_split',

		'farmersdelight:bacon_and_eggs',
		'farmersdelight:ratatouille',
		'farmersrespite:blazing_chili'
	], item => {
		item.foodProperties = food => {
			food.removeEffect('farmersdelight:nourishment')
			food.effect('farmersdelight:nourishment', 150, 0, 1)
		}
	})
	event.modify([

		'farmersdelight:pasta_with_meatballs',
		'farmersdelight:pasta_with_mutton_chop',
		'farmersdelight:mushroom_rice',
		'farmersdelight:steak_and_potatoes',
		'farmersdelight:grilled_salmon',
		'farmersrespite:black_cod',
		'farmersrespite:tea_curry'
	], item => {
		item.foodProperties = food => {
			food.removeEffect('farmersdelight:nourishment')
			food.effect('farmersdelight:nourishment', 300, 0, 1)
		}
	})
	event.modify([
		'farmersdelight:roasted_mutton_chops',
		'farmersdelight:vegetable_noodles',
		'farmersdelight:squid_ink_pasta',
		'farmersdelight:roast_chicken',
		'farmersdelight:stuffed_pumpkin',
		'farmersdelight:honey_glazed_ham',
		'farmersdelight:shepherds_pie'
	], item => {
		item.foodProperties = food => {
			food.removeEffect('farmersdelight:nourishment')
			food.effect('farmersdelight:nourishment', 450, 0, 1)
		}
	})
})