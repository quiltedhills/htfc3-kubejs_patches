onEvent('jei.information', event => {
    event.add('choppingblock:chopping_block', [
        'Made by right clicking a stripped log with an axe in your main hand and a hammer in your offhand!',
        'Stone tools can be used for this.'
    ])
	event.add('#tfc:foods/meats/large', [
        'Preserving large cuts of meat is possible, but can be wasteful if done incorrectly!',
		'If chopping a preserved large meat in a crafting table, it costs more salt, brine, and vinegar than chopping first and preserving later. Additionally, the decay is carried over.',
		'However, if you use a cutting board to chop, you get double the meat but lose the preservation entirely.',
		'The key to this is that a cutting board removes preservation AND decay!',
		'This means if you have a near-rotten large meat, you can chop it on a cutting board and receive fresh meat!'
    ])
})