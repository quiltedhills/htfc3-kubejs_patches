onEvent('item.modification', event => {
	event.modify('minecraft:golden_carrot', item => {
		item.foodProperties = food => {
			food.alwaysEdible()
		}
	})


	// experimental nourishment fix
	event.modify([
		'farmersdelight:bacon_and_eggs',
		'farmersdelight:ratatouille',
		'farmersrespite:blazing_chili'
	], item => {
		item.foodProperties = food => {
			food.removeEffect('farmersdelight:nourishment')
			food.effect('farmersdelight:nourishment', 100, 0, 1)
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
			food.effect('farmersdelight:nourishment', 200, 0, 1)
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
			food.effect('farmersdelight:nourishment', 300, 0, 1)
		}
	})
})