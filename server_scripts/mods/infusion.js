onEvent('recipes', event => {

    let mekInfuseItem = (input, infuseType, amount) => {
          if (amount == undefined) { amount = 10 }
          event.custom({
              "type": "mekanism:infusion_conversion",
              "input": { "ingredient": { "item": input }},
              "output": { "infuse_type": infuseType, "amount": amount }
              })
          }
  mekInfuseItem('rftoolsbase:dimensionalshard', 'kubejs:dimensional_essence') 
  //if you want one ITEM_THAT_TURNS_INTO_THE_INFUSE turn into more than 10 of EXAMPLE_INFUSE, do this instead  mekInfuseItem('ITEM_THAT_TURNS_INTO_THE_INFUSE', 'EXAMPLE_INFUSE', AMOUNT)

  event.recipes.mekanismMetallurgicInfusing('rftoolsbase:infused_diamond', 'minecraft:diamond', 'kubejs:dimensional_essence', 80)
  event.recipes.mekanismMetallurgicInfusing('rftoolsbase:infused_enderpearl', 'minecraft:ender_pearl', 'kubejs:dimensional_essence', 80)
  //80 is the amount of dimensional_essence required to complete the recipe
  }) 