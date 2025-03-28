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
})