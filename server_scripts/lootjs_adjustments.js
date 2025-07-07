onEvent("lootjs", (event) => {
  event.addLootTypeModifier(LootType.ENTITY, LootType.BLOCK, LootType.CHEST, LootType.FISHING, LootType.GIFT)
  .replaceLoot("minecraft:wheat_seeds", "tfc:seeds/wheat", true)
  .replaceLoot("minecraft:potato", "tfc:seeds/potato", true)
  .replaceLoot("minecraft:carrot", "tfc:seeds/carrot", true)
  .replaceLoot("minecraft:beetroot_seeds", "tfc:seeds/beet", true)
  .replaceLoot("minecraft:melon_seeds", "tfc:seeds/melon", true)
  .replaceLoot("minecraft:pumpkin_seeds", "tfc:seeds/pumpkin", true)
});