//	ENTITY LOOT TABLES
onEvent('entity.loot_tables', event => {
	// modify: add additional pools without replacing existing loot tables
	event.modifyEntity('untamedwilds:sunfish', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_sunfish', 1, [1, 4]).randomChance(0.125)
		})
	})
	event.modifyEntity('untamedwilds:trevally', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_trevally', 1, [1, 4]).randomChance(0.125)
		})
	})
	event.modifyEntity('untamedwilds:arowana', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_arowana', 1, [1, 4]).randomChance(0.125)
		})
	})
	event.modifyEntity('untamedwilds:football_fish', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_football_fish', 1, [1, 4]).randomChance(0.125)
		})
	})
	event.modifyEntity('untamedwilds:triggerfish', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_triggerfish', 1, [1, 4]).randomChance(0.125)
		})
	})
	event.modifyEntity('untamedwilds:catfish', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_catfish', 1, [1, 4]).randomChance(0.125)
		})
	})
	event.modifyEntity('untamedwilds:spadefish', table => {
		table.addPool(pool => {
			pool.addItem('untamedwilds:egg_spadefish', 1, [1, 4]).randomChance(0.125)
		})
	})
	// add: make a new or override an existing loot table
	/* 
	//will make zombies drop between 1 and 5 carrots and nothing else
	event.addEntity('minecraft:zombie', table => {
		table.addPool(pool => {
			pool.addItem('minecraft:carrot', 1, [1,5])
		})
	}),
	*/
})
//	BLOCK LOOT TABLES
onEvent('block.loot_tables', event => {
	// modify: add additional pools to existing drops without replacing any
	/*
	// from kubejs legacy page: makes all dirt blocks have a 50% chance of dropping an enchanted diamond sword named "Test"
	event.modifyBlock(/^minecraft:.*dirt/, table => {
		table.addPool(pool => {
			pool.addItem('minecraft:diamond_sword').randomChance(0.5).enchantWithLevels(1, true).name(Text.of('Test').blue())
		})
	})
	*/
	// add: manually creates loot pool, overwrites any existing pools
	event.addBlock('tfc:fire_clay_block', table => {
		table.addPool(pool => {
			pool.survivesExplosion()
			pool.addItem('tfc:fire_clay', 1, 4)
		})
	})
})