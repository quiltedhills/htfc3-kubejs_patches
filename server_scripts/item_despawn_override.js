// Override for despawning items on top of a sluice.
// Zero means never despawn item.
let hoursUntilDespawn = 0

onEvent('entity.spawned', event => {
    let entity = event.entity
    if (entity.type != 'minecraft:item') return
    
    function resetDespawnTimerLoop() {
        if (!entity || !entity.isAlive()) return
    
        let x = Math.floor(entity.getX())
        let y = Math.floor(entity.getY())
        let z = Math.floor(entity.getZ())

        let block1 = entity.level.getBlock(x, y, z)
        let block2 = entity.level.getBlock(x, y-1, z)
    
        if (block1.hasTag('tfc:sluices') || block2.hasTag('tfc:sluices')) {
            let nbt = entity.fullNBT
            nbt.Age = 0
            entity.fullNBT = nbt

            cycles++
            if (cycles >= 12 * hoursUntilDespawn && hoursUntilDespawn != 0) {
                event.entity.kill()
                return
            }

            event.server.scheduleInTicks(5990, resetDespawnTimerLoop)
        }
    }
    let cycles = 0
    event.server.scheduleInTicks(5990, resetDespawnTimerLoop)
})