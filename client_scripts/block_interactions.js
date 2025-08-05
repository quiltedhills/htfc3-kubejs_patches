// The main file for this is in 'kubejs/server_scripts/'!
// *Most* of this client file is not necessary but helps make things a little nicer.

const carcassesToNotPlace = [
	'animaltrap:chicken_carcass',
	'animaltrap:rabbit_carcass',
	'animaltrap:duck_carcass',
	'animaltrap:grouse_carcass',
	'animaltrap:pheasant_carcass',
	'animaltrap:quail_carcass',
	'animaltrap:turkey_carcass',
	'animaltrap:turtle_carcass'
]
onEvent('block.right_click', event => {
	// Disable sound when right clicking tanner with shears
	if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) event.cancel()

	// Sync block place cancelling:
	const isPlaceableSequenceItem = (item) => item && item.nbt && item.nbt.SequencedAssembly && item.isBlock()
	let mainHand = event.player.mainHandItem
	let offHand = event.player.offHandItem
	if (
		isPlaceableSequenceItem(event.item)
		|| (
			mainHand.getId() == offHand.getId()
			&& ((isPlaceableSequenceItem(mainHand)) || isPlaceableSequenceItem(offHand))
		)
	) event.cancel()
	if (carcassesToNotPlace.includes(event.item.id)) event.cancel()
})

onEvent('item.right_click', event => {
	// Sync emptying prevention
	if ([
		'tfc:ceramic/jug',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
	].includes(event.item.id) && event.player.crouching) event.cancel()
})