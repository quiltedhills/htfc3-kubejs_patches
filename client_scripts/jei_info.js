onEvent('jei.information', event => {
    event.add('choppingblock:chopping_block', [
        'Made by right clicking a stripped log with an axe in your main hand and a hammer in your offhand!',
        'Stone tools can be used for this.'
    ])
    event.add([/^tfc:drying_bricks\//, /^tfc:mud_brick\//], [
        'Mud bricks can be dried by placing them on the ground and waiting for a full day.',
        'See the TFC Guidebook for more info!'
    ])
})