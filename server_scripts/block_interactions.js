onEvent('block.right_click', event => {
    // mechanical belt dupe involving this specific wrench
    if (event.item.id == 'refinedstorage:wrench' && event.block.id == 'create:belt') {
        event.cancel()
    }
    // chopping block recipe
    if (event.block.hasTag('forge:stripped_logs') && event.player.mainHandItem.hasTag('forge:axes') && event.player.offHandItem.hasTag('tfc:hammers')) {
        event.block.set('choppingblock:chopping_block')

        let pos = event.block.pos
        event.server.runCommandSilent(`playsound minecraft:item.axe.strip block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)
        event.server.runCommandSilent(`particle minecraft:block ${event.block.id} ${pos.x + 0.5} ${pos.y + 1} ${pos.z + 0.5} 0.2 0.2 0.2 0 20`)
    }
})