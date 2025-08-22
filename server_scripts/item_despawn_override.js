// Override for despawning items on top of a sluice.
// Zero means never despawn item.
let hoursUntilDespawn = 0

const Sluiceable = java('net.dries007.tfc.util.Sluiceable')
const TICKS_UNTIL_DESPAWN = 6000 // Standard item despawn time for minecraft. Measured in ticks!

onEvent('entity.spawned', event => {
	let entity = event.entity
	if (entity.type != 'minecraft:item') return

	let cycles = 0
	// Schedule despawn check
	event.server.scheduleInTicks(TICKS_UNTIL_DESPAWN - 10, despawnTimerLoop)


	function despawnTimerLoop() {
		if (!entity || !entity.isAlive()) return
		let stack = entity.getItem()
		if (!stack || stack.isEmpty()) return

		// Test if item has the no-despawn item tag
		if (Ingredient.of('#hardrock:dont_despawn').test(stack)) resetTimer()

		// Test if the item is sluiceable and is currently on top of a sluice
		if (Sluiceable.get(stack) != null) {
			let x = Math.floor(entity.getX())
			let y = Math.floor(entity.getY())
			let z = Math.floor(entity.getZ())

			let block1 = entity.level.getBlock(x, y, z)
			let block2 = entity.level.getBlock(x, y - 1, z)

			if (block1.hasTag('tfc:sluices') || block2.hasTag('tfc:sluices')) resetTimer()
		}
	}
	function resetTimer() {
		// Drop Age tag back to 0, effectively giving the item an extra 5 minutes before despawn
		let nbt = entity.fullNBT
		nbt.Age = 0
		entity.fullNBT = nbt

		// Advance the config thing
		cycles++ // Each cycle equals to TICKS_UNTIL_DESPAWN, or five minutes
		if (cycles >= 60/5 * hoursUntilDespawn && hoursUntilDespawn != 0) {
			event.entity.kill()
			return
		}

		// Reschedule loop
		event.server.scheduleInTicks(TICKS_UNTIL_DESPAWN - 10, despawnTimerLoop)
	}
})