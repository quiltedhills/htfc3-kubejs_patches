onEvent('item.modification', event => {
  event.modify('exnihilosequentia:stone_hammer', item => {
    item.maxDamage = 128

    event.modify('exnihilosequentia:iron_hammer', item => {
      item.maxDamage = 2048
    })
  })
})