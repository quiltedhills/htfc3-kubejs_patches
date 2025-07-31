onForgeEvent('net.minecraftforge.event.world.ExplosionEvent$Detonate', (event) => { global.filterOutExplosionImmuneItems(event) })
global.filterOutExplosionImmuneItems = event => {
	// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/world/ExplosionEvent.Detonate.html
	let entityList = event.getAffectedEntities()

	for (let i = entityList.size() - 1; i >= 0; i--) {
		let entity = entityList[i]

		if (entity.getType().toString() === 'entity.minecraft.item') {
			try {
				if (Ingredient.of('#hardrock:explosion_immune').test(entity.getItem().getItem().getId())) {
					entityList.remove(i)
				}
			} catch (e) {
				console.log(`Something went wrong with an explosion: ${entity} (${e})`)
				console.log('Please report this at the Hardrock discord!')
			}
		}
	}
}