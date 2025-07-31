const flasks = [
    'tfc:ceramic/jug',
    'waterflasks:leather_flask',
    'waterflasks:iron_flask'
]

onEvent('recipes', event => {
    flasks.forEach(flaskItem => {
        event.shapeless(
            Item.of(flaskItem, `{display:{Lore:['{"text":"Clears fluid contents","color":"white","italic":false}']}}`),
            [Item.of(flaskItem).ignoreNBT()]
        ).id(`kubejs:flask_emptying/${flaskItem.replace(':', '/').replace('#', 'tag/')}`)
            .replaceIngredient(
                Item.of(flaskItem).ignoreNBT(),
                Item.of('minecraft:air')
            )
            .modifyResult((grid, result) => {
                let item = grid.find(Item.of(flaskItem).ignoreNBT())
                if (!item?.nbt?.fluid && !item?.nbt?.Fluid) return
                item.nbt.remove('fluid')
                item.nbt.remove('Fluid')
                return item
            })
    })
})