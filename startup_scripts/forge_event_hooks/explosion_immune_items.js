onForgeEvent('net.minecraftforge.event.world.ExplosionEvent$Detonate', (event) => {
	let entityList = event.getAffectedEntities()

	for (let i = 0; i < entityList.length; i++) {
		let entity = entityList[i]

		if (entity.getType() == 'entity.minecraft.item') {
			if (Ingredient.of('#hardrock:explosion_immune').test(entity.getItem().getItem().getId())) {
				entityList.remove(entity)
				i--
			}
		}
	}
})