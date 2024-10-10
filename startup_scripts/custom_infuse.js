// priority: 0

console.info('Registering KJS Infusions...')

onEvent('mekanism.infuse_type.registry', event => {
	event.create("dimensional_essence").color(0x24fff0).displayName("Dimensional Essence").texture("kubejs:textures/infuse_types/dimensional_texture.png")
})