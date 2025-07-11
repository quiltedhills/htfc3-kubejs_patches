const colors = ['White','Orange','Magenta','Light Blue','Yellow','Lime','Pink','Gray',
				'Light Gray','Cyan','Purple','Blue','Brown','Green','Red','Black']

onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)

	rename('immersiveengineering:alu_post', "Aluminium Post (Aluminum Support)")
	rename('create:metal_girder', "Metal Girder (Steel Support)")

	// These two below don't seem to work, using "kubejs/assets/firmalife/lang/en_us.json" instead
	//rename('firmalife:treated_lumber', "Wax-Treated Lumber")
	//rename('firmalife:treated_wood', "Wax-Treated Wood")

	Ingredient.of(/^immersiveengineering:treated_wood_(horizontal|vertical|packaged)/).stacks.forEach(item => rename(item, "Creosote-Treated Wood Planks"))
	Ingredient.of(/^immersiveengineering:stairs_treated_wood_(horizontal|vertical|packaged)/).stacks.forEach(item => rename(item, "Creosote-Treated Wood Stairs"))
	Ingredient.of(/^immersiveengineering:slab_treated_wood_(horizontal|vertical|packaged)/).stacks.forEach(item => rename(item, "Creosote-Treated Wood Slab"))
	rename('tfc_ie_addon:treated_wood_lumber', "Creosote-Treated Lumber")
	rename('immersiveengineering:stick_treated', "Creosote-Treated Stick")
	rename('immersiveengineering:treated_fence', "Creosote-Treated Fence")
	rename('immersiveengineering:treated_scaffold', "Creosote-Treated Scaffolding")

	rename('minecraft:bowl', "Wooden Bowl")
	rename('tfc:ceramic/bowl', "Ceramic Bowl")

	rename('exnihilosequentia:stone_hammer', "Stone Crude Hammer")
	rename('exnihilosequentia:iron_hammer', "Wrought Iron Crude Hammer")
	rename('exnihilosequentia:netherite_hammer', "Black Steel Crude Hammer")

	rename('createdeco:netherite_sheet', "Netherite Slab")

	rename('supplementaries:pancake', "Prop Pancake")
	rename('minecraft:chain', "Cast Iron Chain")
	rename('minecraft:torch', "Permanent Torch")
	rename('minecraft:lantern', "Permanent Lantern")
	rename('minecraft:candle', "Permanent Candle")
	colors.forEach(color => rename(`minecraft:${color.toLowerCase().replace(' ','_')}_candle`, `Permanent ${color} Candle`))

	rename('create_jetpack:jetpack', "Pressurized Jetpack")
	rename('create_jetpack:netherite_jetpack', "Netherite Pressurized Jetpack")
	rename('mekanism:jetpack', "Hydrogen Jetpack")
	rename('mekanism:jetpack_armored', "Armored Hydrogen Jetpack")

	rename('coffee_delight:coffee_beans_cooked', "Dried Coffee Beans")
	rename('coffee_delight:coffee_flour', "Ground Coffee")
	rename('coffee_delight:coffee_cap', "Coffee Cup")
	rename('coffee_delight:cap_black_coffee', "Cup of Black Coffee")
	rename('coffee_delight:cap_double_espresso_coffee', "Cup of Double Espresso")
	rename('coffee_delight:cap_arabic_coffee', "Cup of Arabic Coffee")
	rename('coffee_delight:cap_turkey_coffee', "Cup of Turkish Coffee")
	rename('coffee_delight:cap_latte_coffee', "Cup of Latte")
	rename('coffee_delight:cap_moka_coffee', "Cup of Mocha")
	rename('coffee_delight:cap_cappuccino_coffee', "Cup of Cappuccino")
	rename('coffee_delight:cap_usa_coffee', "Cup of Americano")
	rename('coffee_delight:cap_macchiato_coffee', "Cup of Macchiato")
	rename('coffee_delight:cap_milk_coffee', "Cup of Milk Coffee")
	rename('coffee_delight:cap_iced_black_coffee', "Cup of Iced Black Coffee")
	rename('coffee_delight:cap_iced_double_espresso_coffee', "Cup of Iced Double Espresso")
	rename('coffee_delight:cap_iced_arabic_coffee', "Cup of Iced Arabic Coffee")
	rename('coffee_delight:cap_iced_turkey_coffee', "Cup of Iced Turkish Coffee")
	rename('coffee_delight:cap_iced_latte_coffee', "Cup of Iced Latte")
	rename('coffee_delight:cap_iced_moka_coffee', "Cup of Iced Mocha")
	rename('coffee_delight:cap_iced_cappuccino_coffee', "Cup of Iced Cappuccino")
	rename('coffee_delight:cap_iced_usa_coffee', "Cup of Iced Americano")
	rename('coffee_delight:cap_iced_macchiato_coffee', "Cup of Iced Macchiato")
	rename('coffee_delight:cap_iced_milk_coffee', "Cup of Iced Milk Coffee")
})