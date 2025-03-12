const colors = ['White','Orange','Magenta','Light Blue','Yellow','Lime','Pink','Gray',
				'Light Gray','Cyan','Purple','Blue','Brown','Green','Red','Black']

onEvent('client.generate_assets', event => {
	const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)

	//rename('firmalife:treated_lumber', "Wax-Treated Lumber")
	//rename('firmalife:treated_wood', "Wax-Treated Wood")
	// these two don't seem to work, using "kubejs/assets/firmalife/lang/en_us.json" instead

	Ingredient.of(/^immersiveengineering:treated_wood_(horizontal|vertical|packaged)/).stacks.forEach(item => rename(item, "Creosote-Treated Wood Planks"))
	Ingredient.of(/^immersiveengineering:stairs_treated_wood_(horizontal|vertical|packaged)/).stacks.forEach(item => rename(item, "Creosote-Treated Wood Stairs"))
	Ingredient.of(/^immersiveengineering:slab_treated_wood_(horizontal|vertical|packaged)/).stacks.forEach(item => rename(item, "Creosote-Treated Wood Slab"))
	rename('tfc_ie_addon:treated_wood_lumber', "Creosote-Treated Lumber")
	rename('immersiveengineering:stick_treated', "Creosote-Treated Stick")
	rename('immersiveengineering:treated_fence', "Creosote-Treated Fence")
	rename('immersiveengineering:treated_scaffold', "Creosote-Treated Scaffolding")

	rename('minecraft:bowl', "Wooden Bowl")
	rename('tfc:ceramic/bowl', "Ceramic Bowl")

	rename('exnihilosequentia:stone_hammer', "Stone Mash Hammer")
	rename('exnihilosequentia:iron_hammer', "Wrought Iron Mash Hammer")
	rename('exnihilosequentia:netherite_hammer', "Black Steel Mash Hammer")

	rename('createdeco:netherite_sheet', "Netherite Slab")

	rename('supplementaries:pancake', "Prop Pancake")
	rename('minecraft:chain', "Cast Iron Chain")
	rename('minecraft:torch', "Permanent Torch")
	rename('minecraft:lantern', "Permanent Lantern")
	rename('minecraft:candle', "Permanent Candle")
	colors.forEach(color => {
		rename(`minecraft:${color.toLowerCase().replace(' ','_')}_candle`, `Permanent ${color} Candle`)
	})

})