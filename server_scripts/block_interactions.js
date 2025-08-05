onEvent('block.right_click', event => {
	// Disable uncrafting tables completely
	if (event.block.id == 'twilightforest:uncrafting_table') event.cancel()
	// Prevent mechanical belt dupe involving this specific wrench
	if (event.item.id == 'refinedstorage:wrench' && event.block.id == 'create:belt') event.cancel()
	// Prevent tanner exploit that lets you turn raw hide directly into leather
	if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) event.cancel()
	// Heat frame + Depot QOL
	if (event.item.id == 'pneumaticcraft:heat_frame' && event.block.id == 'create:depot' && !event.player.crouching) {
		event.player.server.runCommandSilent(`title ${event.player} actionbar ["Drop the heat frame onto the depot for use in recipes"]`)
		event.cancel()
	}
	// Remove functionality from paraglider statues
	if (event.block.hasTag('paraglider:statues')) {
		if (event.item.id == 'minecraft:air' || event.block.id == 'paraglider:cursed_statue') event.cancel()
		else if (!(
			(event.block.id == 'paraglider:goddess_statue' && (
				event.item.id == 'sewingkit:leather_sheet'
				|| event.item.hasTag('forge:ingots/gold')
				|| event.item.hasTag('minecraft:flowers')
			))
			|| (event.player.mainHandItem.hasTag('tfc:chisels') && event.player.offHandItem.hasTag('tfc:hammers') && event.player.crouching)
		)) event.cancel()
	}
	// Fix straw interaction with blaze burners
	if (event.item.id == 'createaddition:straw' && event.block.id == 'create:blaze_burner') {
		if (event.player.creativeMode) {
			event.item.count++
		} else {
			event.item.count--
			if (event.item.count == 0) { // There is some. really weird stuff happening.
				event.block.set(Block.id('createaddition:liquid_blaze_burner'))
			}
		}
	}
})
onEvent('player.inventory.opened', event => {
	// Paraglider statues: Last resort in case the paraglider statue GUI opens up despite failsafes
	if (/StatueBargainContainer/.test(event.inventoryContainer.toString())) {
		event.player.closeInventory()
	}
})

onEvent('item.right_click', event => {
	// Prevent shift-right-clicking a flask from emptying it in favor of custom crafting grid recipes
	if ([
		'tfc:ceramic/jug',
		'waterflasks:leather_flask',
		'waterflasks:iron_flask'
	].includes(event.item.id) && event.player.crouching) event.cancel()
})

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
onEvent('block.place', event => {
	// Prevent items with sequenced recipe data from being placeable
	const isSequenceItem = (item) => item && item.nbt && item.nbt.SequencedAssembly
	let mainHand = event.entity.mainHandItem
	let offHand = event.entity.offHandItem

	if (isSequenceItem(mainHand) || isSequenceItem(offHand)) {
		// There is no way to get the hand the the block was placed with this event.
		// We try to infer the hand by comparing the block's ID to the item IDs of items held in both hands.
		if ((mainHand.getId() == event.block.id) && (offHand.getId() == event.block.id)) {
			// If both hands could be valid, we can't know for sure if the item being placed has sequence data,
			// so we send feedback to the player in case they are confused why they can't place a block they expect to.
			event.entity.server.runCommandSilent(`execute as ${event.entity} at @s run playsound minecraft:block.note_block.bass player @s ~ ~ ~ 1 0`)
			event.entity.server.runCommandSilent(`title ${event.entity} actionbar ["An item in one of your hands contains Sequenced Recipe data"]`)
			event.cancel()
		} else if (
			// Normal behavior is silent
			(mainHand.getId() == event.block.id) && (isSequenceItem(mainHand))
			|| (offHand.getId() == event.block.id) && (isSequenceItem(offHand))
		) event.cancel()
	}
	
	// Make it impossible to place small carcasses
	if (carcassesToNotPlace.includes(event.block.id)) event.cancel()
})


// These blocks will by default void all of their contents when broken, likely due to a coding oversight.
// This is obviously not supposed to happen :p
const dropInventoryWhenBroken = [
	'sewingkit:storing_sewing_station',
	'tfcchannelcasting:mold_table'
]

onEvent('block.break', event => {
	if (dropInventoryWhenBroken.includes(event.block.id)) {
		let storage = event.block.entityData?.Items?.Items
			|| event.block.entityData?.inventory?.Items

		storage.forEach(stack => {
			if (!stack.ForgeCaps) event.block.popItem(Item.of(stack.id, stack.Count, stack.Tag))
			else {   // Manual pop that lets us assign ForgeCaps data
				let itemEntity = event.level.createEntity('item')
				itemEntity.fullNBT = `{Item:${stack}}`
				itemEntity.x = event.block.x + 0.5
				itemEntity.y = event.block.y + 0.5
				itemEntity.z = event.block.z + 0.5
				itemEntity.motionX = (Math.random() * 0.1) - 0.05
				itemEntity.motionY = 0.2
				itemEntity.motionZ = (Math.random() * 0.1) - 0.05
				itemEntity.spawn()
			}
		})
	}

	// Prevent ice from spawning water when broken with a saw
	if (event.block.id == 'minecraft:ice' && !event.player.isCreativeMode()) {
		if (event.player.mainHandItem.hasTag('forge:tools/saws')) {
			event.block.set('minecraft:air')        // Usual loot table drops seem to stop working
			event.block.popItem('minecraft:ice')    // when replacing the block with air
		}
	}
	// TFC's Ice Piles seem to not drop any items even if their loot table is modified
	if (event.block.id == 'tfc:ice_pile' && !event.player.isCreativeMode()) {
		if (event.player.mainHandItem.hasTag('forge:tools/saws')) {
			event.block.set('minecraft:air')
			event.block.popItem('minecraft:ice')
			return
		} else if (
			event.player.mainHandItem.hasTag('forge:tools/hammers')
			|| event.player.mainHandItem.hasTag('exnihilosequentia:hammer')
		) {
			event.block.popItem('firmalife:ice_shavings')
			if (Math.random() > 0.5) event.block.popItem('firmalife:ice_shavings')
		}
	}

	// Destroy end portal blocks around broken frames
	if (event.block.id == 'minecraft:end_portal_frame') {
		if (!event.player.creativeMode) { // Couldn't get a proper loot table to work :p
			event.block.popItem('minecraft:end_portal_frame')
			if (event.block.properties.eye == 'true') event.block.popItem('minecraft:ender_eye')
		}

		let { x, y, z } = event.block.pos
		for (let direction in portalOffsets) { // Iterate over all four adjacent blocks for safety, as opposed to only the one the frame is facing
			let offsets = portalOffsets[direction]
			if (event.level.getBlock(x + offsets.check[0], y, z + offsets.check[1]).id == 'minecraft:end_portal') {
				removePortals(
					x + offsets.bounds[0][0], z + offsets.bounds[0][1],
					x + offsets.bounds[1][0], z + offsets.bounds[1][1]
				)
			}
		}
	}
	function removePortals(x1, z1, x2, z2) {
		const xMin = Math.min(x1, x2), xMax = Math.max(x1, x2)
		const zMin = Math.min(z1, z2), zMax = Math.max(z1, z2)
		for (let x = xMin; x <= xMax; x++) {
			for (let z = zMin; z <= zMax; z++) {
				let block = event.level.getBlock(x, event.block.pos.y, z)
				if (block.id == 'minecraft:end_portal') block.set(Block.id('minecraft:air'))
			}
		}
	}
})
const portalOffsets = {
	east: { check: [1, 0], bounds: [[1, -2], [3, 2]] },
	west: { check: [-1, 0], bounds: [[-3, -2], [-1, 2]] },
	south: { check: [0, 1], bounds: [[-2, 1], [2, 3]] },
	north: { check: [0, -1], bounds: [[-2, -3], [2, -1]] },
}