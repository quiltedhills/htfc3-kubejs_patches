onEvent('player.inventory.changed', event => {
    if (event.item.nbt == '{}') {
        for (let i = 0; i < event.player.inventory.size; i++) {
            let item = event.player.inventory.get(i)
            if (item?.nbt == '{}') {
                let newItem = item.copy().setNbt(null)
                newItem.setNbt(null) // setNbt() is a void function, very important to not chain it directly into .set()
                event.player.inventory.set(i, newItem)
            }
        }
    }
})