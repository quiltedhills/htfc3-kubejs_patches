onEvent('block.right_click', event => {
	// mechanical belt dupe involving this specific wrench
	if (event.item.id == 'refinedstorage:wrench' && event.block.id == 'create:belt') event.cancel()
	// tanner exploit that lets you turn raw hide directly into leather
	if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) event.cancel()
	// heat frame + depot qol
	if (event.item.id == 'pneumaticcraft:heat_frame' && event.block.id == 'create:depot' && !event.player.crouching) {
		event.player.server.runCommandSilent(`title ${event.player} actionbar ["Drop the heat frame onto the depot for use in recipes"]`)
		event.cancel()
	}
	// make paraglider statues deco-only
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
})
onEvent('player.inventory.opened', event => {
	// Last resort in case the paraglider statue GUI opens up despite failsafes
	if (/StatueBargainContainer/.test(event.inventoryContainer.toString())) {
		event.player.closeInventory()
	}
})

onEvent('block.place', event => {
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
})