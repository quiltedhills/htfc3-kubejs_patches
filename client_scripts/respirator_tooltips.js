onEvent('item.tooltip', tooltip => {
    tooltip.addAdvanced('adpother:diamond_respirator', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Prevents eating and some right-click interactions' ))			
		}
    })
	tooltip.addAdvanced('adpother:gold_respirator', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Prevents eating and some right-click interactions' ))			
		}
    })
    tooltip.addAdvanced('adpother:iron_respirator', (item, advanced, text) => {
		if (!tooltip.shift) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
		} else {
			text.add(1, Text.gold('Prevents eating and some right-click interactions' ))			
		}
    })
})
