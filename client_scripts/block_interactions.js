// The main file for this is in 'kubejs/server_scripts/'!
// This client file is not necessary but helps make things a little nicer.

onEvent('block.right_click', event => {
    // disable sound when right clicking tanner with shears
    if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) {
        event.cancel()
    }
})