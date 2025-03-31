onEvent('player.inventory.changed', event => {
    if (event.item.nbt == '{}') {
        for (let i = 0; i < event.player.inventory.size; i++) {
            let item = event.player.inventory.get(i)
            if (item?.nbt == '{}') event.player.inventory.set(i, item.copy().setNbt(null))
        }
    }
})