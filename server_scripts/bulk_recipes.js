const rock_types = [
	'granite','diorite','gabbro','shale','claystone','limestone','conglomerate',
	'dolomite','chert','chalk','rhyolite','basalt','andesite','dacite',
	'quartzite','slate','phyllite','schist','gneiss','marble'
]

const minerals = [
	'bituminous_coal', 'lignite', 'kaolinite', 'gypsum',
	'graphite', 'sulfur', 'cinnabar', 'cryolite',
	'saltpeter', 'sylvite', 'borax', 'halite',

	'amethyst', 'diamond', 'emerald', 'lapis_lazuli',
	'opal', 'pyrite', 'ruby', 'sapphire', 'topaz'
]
const metals = [
	'native_copper', 'native_gold', 'hematite', 'native_silver',
	'cassiterite', 'bismuthinite', 'garnierite', 'malachite',
	'magnetite', 'limonite', 'sphalerite', 'tetrahedrite'
]
const non_tfc_metals = [
	['chromite',    'firmalife'],
	['aluminum',    'tfc_ie_addon'],
	['lead',        'tfc_ie_addon'],
	['uranium',     'tfc_ie_addon']
]
const ore_grades = ['poor','normal','rich']
const gravel_ores = ['native_copper', 'native_gold', 'native_silver', 'cassiterite']

let artificial_ore = (event, rock_type, ore_item, output, recipe_id) => {
	event.recipes.create.compacting(output,
		[
			Item.of(ore_item),
			Item.of(ore_item),
			Item.of(`tfc:rock/raw/${rock_type}`),
			Item.of(`tfc:rock/raw/${rock_type}`),
			Item.of('tfc:mortar'), Item.of('tfc:mortar'), Item.of('tfc:mortar'), Item.of('tfc:mortar')
		]
	).superheated().id(`kubejs:artificial_ores/basin/${recipe_id}`)
	event.recipes.mekanismCombining(`2x ${output}`, `3x ${ore_item}`, `2x tfc:rock/raw/${rock_type}`)
	.id(`kubejs:artificial_ores/combiner/${recipe_id}`)
}

let gravel_deposit = (event, rock_type, ore_item, output, recipe_id) => {
  event.recipes.create.compacting(output,
    [
      Item.of(ore_item),
      Item.of(ore_item),
      Item.of(`tfc:rock/gravel/${rock_type}`),
      Item.of(`tfc:rock/gravel/${rock_type}`),
      Item.of('tfc:mortar'),
      Item.of('tfc:mortar'),
      Item.of('tfc:mortar'),
      Item.of('tfc:mortar')
    ]
  ).superheated().id(`kubejs:gravel_deposit/basin/${recipe_id}`)
  event.recipes.mekanismCombining(`2x ${output}`, `3x ${ore_item}`, `2x tfc:rock/gravel/${rock_type}`)
  .id(`kubejs:gravel_deposit/combiner/${recipe_id}`)
}

onEvent('recipes', event => {
	rock_types.forEach(rock => {
		minerals.forEach(mineral => {
			artificial_ore(event, rock,
				`tfc:ore/${mineral}`,
				`tfc:ore/${mineral}/${rock}`,
				`${mineral}/${rock}`
			)
		})
    gravel_ores.forEach(metal => {
      gravel_deposit(event, rock,
        `tfc:ore/small_${metal}`,
        `tfc:deposit/${metal}/${rock}`,
        `${metal}/${rock}`
      )
    })
		ore_grades.forEach(grade => {
			metals.forEach(metal => {
				artificial_ore(event, rock,
					`tfc:ore/${grade}_${metal}`,
					`tfc:ore/${grade}_${metal}/${rock}`,
					`${metal}_${grade}/${rock}`
				)
			})
			non_tfc_metals.forEach(([metal, mod]) => {
				artificial_ore(event, rock,
					`${mod}:ore/${grade}_${metal}`,
					`${mod}:ore/${grade}_${metal}/${rock}`,
					`${metal}_${grade}/${rock}`
				)
			})
		})
	})
})
