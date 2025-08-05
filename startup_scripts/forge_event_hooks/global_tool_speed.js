const miningSpeedMultiplier = 0.5

onForgeEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => { global.applyGlobalToolSpeedMultiplier(event) })
global.applyGlobalToolSpeedMultiplier = event => {
	// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/entity/player/PlayerEvent.BreakSpeed.html
	event.setNewSpeed(event.getNewSpeed() * miningSpeedMultiplier)
}