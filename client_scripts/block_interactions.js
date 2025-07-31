// The main file for this is in 'kubejs/server_scripts/'!
// *Most* of this client file is not necessary but helps make things a little nicer.

onEvent('block.right_click', event => {
	// disable sound when right clicking tanner with shears
	if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) event.cancel()
	// sync block place cancelling for items with sequence data
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
})

onEvent('item.right_click', event => {
	// prevent shift-right-clicking a flask emptying it
	if ([
		'tfc:ceramic/jug',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
	].includes(event.item.id) && event.player.crouching) event.cancel()
})