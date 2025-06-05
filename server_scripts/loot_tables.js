// Entity Loot Tables
/*
onEvent('entity.loot_tables', event => {
  
// Modify: adds additional pools without replacing existing Loot

  event.modifyEntity('untamedwilds:sunfish', table => {
    table.addPool(pool => {
      pool.addItem('untamedwilds:egg_trevally', 1, [1, 4]).randomChance(0.125)
    })
  })
  
// Add: make a new loot table or override an existing one
// Example below from Kubejs Legacy Page, will make zombies drop between 1 and 5 carrots and nothing else
  
//  event.addEntity('minecraft:zombie', table => {
//    table.addPool(pool => {
//      pool.addItem('minecraft:carrot', 1, [1, 5])
//    })
//  })
})
*/
// Block Loot Tables

onEvent('block.loot_tables', event => {
  
// Modify: add additional pools to existing drops without replacing any
// From Kubejs Legacy Page: makes all dirt blocks have a 50% chance of dropping and enchanted diamond sword named "Test"

//  event.modifyBlock(/^minecraft:.*dirt/, table => {
//    table.addPool(pool => {
//      pool.addItem('minecraft:diamond_sword'.randomChance(0.5).enchantWithLevels(1, true).name(Text.of('Test').blue())
//    })
//  })

// Add: manually creates loot pool, overwrites any existing pools
  event.addBlock('tfc:fire_clay_block', table => {
    table.addPool(pool => {
      pool.survivesExplosion()
      pool.addItem('tfc:fire_clay", 1, 4)
    })
  })
})