onEvent('jei.information', event => {
    event.add('choppingblock:chopping_block', [
        ['Made by right clicking a stripped log with an ', Text.of('axe in your main hand').underlined(), ' and a ', Text.of('hammer in your offhand').underlined(), '!'],
        'Stone tools can be used for this.'
    ])
    event.add([/^tfc:drying_bricks\//, /^tfc:mud_brick\//], [
        'Mud bricks can be dried by placing them on the ground and waiting for a full day.',
        'See the TFC Guidebook for more info!'
    ])
    event.add(/^adpother:.+_respirator$/, [
        'A filter item can be applied on a vanilla anvil.',
        'Multiple different filters can be active at once.',
        'Type \'$filter\' into JEI for a list of filter items!'
    ])
    event.add(/^adpother:.+_vacuum_bag$/, [
        'A filter item can be applied on a vanilla anvil.',
        ['Unlike with respirators, you need to put ', Text.of('two filter items').underlined(), ' into the anvil slot instead of one.'],
        'Type \'$filter\' into JEI for a list of filter items!'
    ])
    event.add([
        'beyond_earth:oxygen_mask',
        'beyond_earth:netherite_oxygen_mask',
        'create:netherite_diving_helmet',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask',
        'mekanism:mekasuit_helmet',
        'pneumaticcraft:pneumatic_helmet'
    ], [
        'A filter item can be applied in the crafting grid or on a vanilla anvil.',
        'Multiple different filters can be active at once.',
        'Type \'$filter\' into JEI for a list of filter items!'
    ])
    event.add([
        'toolbelt:belt',
        'toolbelt:pouch'
    ], [
        'A toolbelt starts with just two slots, but you can increase that to up to 9!',
        ['The more slots you add, however, ', Text.of('the stronger the needle must be').underlined(), '.'],
        ['The first upgrade only needs a bone needle, the second (bringing the total up to 4 slots) requires an ', Text.of('iron needle').underlined(), ', and the last five (up to 9 total slots) require a ', Text.of('netherite needle').underlined(), '.']
    ])
    event.add('create:belt_connector', [
        'Mechanical belts are unfortunately not very well optimized, which becomes a significant issue on very large servers, such as our official public servers!',
        ['Please avoid using them unless you ', Text.of('absolutely').italic(), ' have to.'],
        'Belts are fine in singleplayer or on smaller servers.'
    ])
    event.add(['minecraft:ice', 'tfc:ice_pile', 'minecraft:packed_ice', 'minecraft:blue_ice'], [
        'Ice blocks can be obtained as an item by breaking them with a saw'
    ])
    event.add(['minecraft:diamond', 'minecraft:emerald'], [
        'There are two main ways of obtaining diamonds and emeralds:',
        'First, you have the option of crushing and then washing their uncut variants, and then melting the grit in a TConstruct smeltery. For diamonds, this requires blazing blood.',
        'A simpler option, albeit one that relies on some luck, is to find a villager willing to trade away cut diamonds or emeralds, which you can then polish and use.',
        'Amethyst can be similarly obtained from trading or from ore, but it can also be sourced from quartz ores with a foundry.'
    ])
    event.add('minecraft:amethyst_shard', [
        'Amethyst can be obtained from villager trading or from processing ore, similar to how diamonds and emeralds are obtained.',
        'But, unlike those, it can also be sourced from nether quartz ore using a foundry.'
    ])
})