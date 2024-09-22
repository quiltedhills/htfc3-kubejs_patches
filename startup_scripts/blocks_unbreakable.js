// priority: 0
const samples = [
	'amethyst',
	'bismuthinite',
	'bituminous_coal',
	'borax',
	'cassiterite',
	'cinnabar',
	'copper',
	'cryolite',
	'diamond_sample',
	'emerald_sample',
	'garnierite',
	'golds',		// This is correct, it is defined as such in the mod unfortunately
	'graphite',
	'gypsum',
	'halite',
	'hematite',
	'kaolinite',
	'lapislazuli',
	'lignite',
	'limonite',
	'magnetite',
	'malachite',
	'saltpeter',
	'silver',
	'sphalerite',
	'sulfur',
	'sylvite',
	'tetrahedrite',
	'vulcanic_sulfur'
]
onEvent('block.modification', event => {
	samples.forEach((name) => {
		event.modify('hardrock_samples:' + name, block => {
			block.destroySpeed = 0.5
		})
	});
})
