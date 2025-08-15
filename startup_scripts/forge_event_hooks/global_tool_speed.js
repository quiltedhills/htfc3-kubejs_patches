const miningSpeedMultiplier = 0.5

onForgeEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => { global.applyGlobalToolSpeedMultiplier(event) })
global.applyGlobalToolSpeedMultiplier = event => {
	// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/entity/player/PlayerEvent.BreakSpeed.html
	const player = event.getPlayer()

	// Apply global tool speed reduction
	let finalMiningSpeed = event.getNewSpeed() * miningSpeedMultiplier

	// Apply nutrition boost
	const foodData = player.getFoodData()
	if (foodData && typeof foodData.getNutrition === 'function') {
		const averageNutrition = foodData.getNutrition().getAverageNutrition()
		if (averageNutrition >= 0.4) {
			// Linearly remap [0.4, 0.9] to [1.0, 1.25]
			finalMiningSpeed *= 1.0 + ((Math.min(averageNutrition, 0.9) - 0.4) / 0.5) * 0.25
		}
	}
	event.setNewSpeed(finalMiningSpeed)
}