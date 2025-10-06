// List of all repairable items.
// Formatting is as follows:
// { 'repairable_item': [durabilityToRestore, [materialsUsed], [toolsUsed]] }
// `materialsUsed` and `toolsUsed` must be arrays, even if they are empty.
const repairables = {
    'create_sa:copper_jetpack_chestplate': [80, ['#forge:sheets/copper', 'create:cogwheel'], ['#forge:tools/hammers']],
    'create_sa:andesite_jetpack_chestplate': [120, ['3x create:andesite_alloy', '#forge:rods/zinc', 'create:encased_fan'], ['#forge:tools/hammers', '#forge:tools/screwdrivers']],
    'create_sa:brass_jetpack_chestplate': [160, ['#forge:sheets/brass', 'create:andesite_alloy', 'create:propeller'], ['#forge:tools/hammers', '#forge:tools/screwdrivers']],
    'create_jetpack:jetpack': [60, ['#forge:double_sheets/brass', 'create:precision_mechanism', 'create:chute'], ['#forge:tools/hammers', '#forge:tools/screwdrivers']],
    'create_jetpack:netherite_jetpack': [420, ['create_sa:brass_cube', '2x create:precision_mechanism', '2x create:smart_chute'], ['#forge:tools/hammers', '#forge:tools/screwdrivers']],
    'create_sa:copper_exoskeleton_chestplate': [160, ['#forge:storage_blocks/copper', 'create:fluid_tank', '#forge:ingots/andesite_alloy'], ['#forge:tools/hammers']],
    'create_sa:andesite_exoskeleton_chestplate': [240, ['#forge:storage_blocks/andesite_alloy', 'create:belt_connector', '#forge:ingots/zinc', '#forge:ingots/zinc'], ['#forge:tools/hammers']],
    'create_sa:brass_exoskeleton_chestplate': [320, ['#forge:storage_blocks/brass', '#forge:double_sheets/brass', '2x #forge:ingots/andesite_alloy'], ['#forge:tools/hammers']],

    'tfcambiental:wool_hat': [1750, ['tfc:wool_cloth', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:wool_sweater': [1000, ['tfc:wool_cloth', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:wool_pants': [1250, ['tfc:wool_cloth', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:wool_boots': [1750, ['tfc:wool_cloth', 'sewingkit:leather_strip', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:silk_cowl': [1000, ['tfc:silk_cloth', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:silk_shirt': [1250, ['2x tfc:silk_cloth', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:silk_pants': [1500, ['2x tfc:silk_cloth', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:silk_shoes': [1000, ['tfc:silk_cloth', 'sewingkit:leather_strip', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:burlap_cowl': [1000, ['tfc:burlap_cloth', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:burlap_shirt': [1250, ['2x tfc:burlap_cloth', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:burlap_pants': [1500, ['2x tfc:burlap_cloth', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:burlap_shoes': [1000, ['tfc:burlap_cloth', 'sewingkit:leather_strip', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:insulated_leather_hat': [1500, ['sewingkit:leather_sheet', 'htm:plant_fabric', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:insulated_leather_tunic': [1000, ['2x sewingkit:leather_sheet', 'sewingkit:leather_strip', 'htm:plant_fabric', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:insulated_leather_pants': [1250, ['2x sewingkit:leather_sheet', 'sewingkit:leather_strip', 'htm:plant_fabric', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:insulated_leather_boots': [1500, ['sewingkit:leather_sheet', 'sewingkit:leather_strip', 'htm:plant_fabric', '#forge:string'], ['#sewingkit:needles', '#forge:shears']],
    'tfcambiental:leather_apron': [600, ['2x sewingkit:leather_sheet', 'sewingkit:leather_strip', '2x #forge:string'], ['#sewingkit:needles', '#forge:shears']],
}
// A list of items to add crafting grid filter application recipes to.
// These recipes server as alternatives to using an anvil.
// Data must be first defined in 'config/adpother/Respirators/'.
const respirators = [
    // These three use hardcoded interactions and unfortunately do not work.
    //'adpother:iron_respirator',
    //'adpother:gold_respirator',
    //'adpother:diamond_respirator',
    'beyond_earth:oxygen_mask',
    'beyond_earth:netherite_oxygen_mask',
    'create:netherite_diving_helmet',
    'mekanism:hazmat_mask',
    'mekanism:scuba_mask',
    'mekanism:mekasuit_helmet',
    'pneumaticcraft:pneumatic_helmet'
]

onEvent('recipes', event => {
    // Generate item repair recipes
    Object.entries(repairables).forEach(([repairableItem, [repairAmount, repairMaterials, repairTools]]) => {
        const recipe = event.shapeless(
            Item.of(repairableItem, `{Damage:${repairAmount},display:{Lore:['{"text":"Restores ${repairAmount} durability","color":"green","italic":false}']}}`),
            [Item.of(repairableItem).ignoreNBT()].concat(repairMaterials, repairTools)
        ).id(`kubejs:repairing/${repairableItem.replace(':', '/').replace('#', 'tag/')}`)
            .modifyResult((grid, result) => {
                let item = grid.find(Item.of(repairableItem).ignoreNBT())
                if (!item?.nbt?.Damage) return
                item.nbt.Damage = Math.max(0, item.nbt.Damage - repairAmount)
                return item
            })

        // Make tools lose durability instead of getting consumed
        repairTools.forEach(tool => {
            recipe.damageIngredient(tool)
        })
    })

    // Generate respirator filter application recipes
    respirators.forEach(respirator => {
        ['dust', 'carbon', 'sulfur'].forEach(pollutant => {
            event.shapeless(
                Item.of(respirator, `{Fullness: {${pollutant}: 0}}`),
                [
                    Item.of(respirator).ignoreNBT(),
                    `#adpother:filters/${pollutant}`,
                    '#forge:string',
                    '#sewingkit:needles'
                ]
            ).id(`kubejs:add_filter/${respirator.replace(':', '/')}/${pollutant}`)
                .modifyResult((grid, result) => {
                    let item = grid.find(Item.of(respirator).ignoreNBT())
                    if (item.nbt && item.nbt.Fullness && item.nbt.Fullness[pollutant] == 0) return
                    item.nbt.merge(`{Fullness: {${pollutant}: 0}}`)
                    return item
                })
                .damageIngredient('#sewingkit:needles')
        })
    })
})