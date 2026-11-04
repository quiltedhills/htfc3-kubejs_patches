const flasks = [
    'tfc:ceramic/jug',
    'waterflasks:leather_flask',
    'waterflasks:iron_flask'
]

const leather_flasks = [
    'waterflasks:broken_leather_flask',
    'waterflasks:leather_flask'
]
const iron_flasks = [
    'waterflasks:broken_iron_flask',
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
    leather_flasks.forEach(flask => {
        event.shapeless(
            Item.of('waterflasks:leather_flask', `{display:{Lore:['{"text":"Restores full durability","color":"green","italic":false}']}}`),
            [Item.of(flask)].concat('waterflasks:bladder')
        ).id(`kubejs:repairing/${flask.replace(':', '/')}`)
        .modifyResult((grid, result) => {
            let item = grid.find(Item.of(flask).ignoreNBT())
            if (!item?.nbt?.Damage) return
            item.nbt.Damage = 0
            return item
        })
        .replaceIngredient(Item.of(flask).ignoreNBT(), 'minecraft:air')
    })

    iron_flasks.forEach(flask => {
        event.shapeless(
            Item.of('waterflasks:iron_flask', `{display:{Lore:['{"text":"Restores full durability","color":"green","italic":false}']}}`),
            [Item.of(flask).ignoreNBT()].concat('waterflasks:bladder', 'tfc:burlap_cloth', '#tfc:knives')
        ).id(`kubejs:repairing/${flask.replace(':', '/')}`)
        .modifyResult((grid, result) => {
            let item = grid.find(Item.of(flask).ignoreNBT())
            if (!item?.nbt?.Damage) return
            item.nbt.Damage = 0
            return item
        })
        .replaceIngredient(Item.of(flask).ignoreNBT(), 'minecraft:air')
        .damageIngredient('#tfc:knives')
    })
})