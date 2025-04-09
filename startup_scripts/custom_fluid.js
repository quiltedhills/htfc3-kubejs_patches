// priority: 0

console.info('Registering KJS Fluids...')

onEvent('fluid.registry', event => {
	event.create("molten_iron_quartz")	.thickTexture(0xdedede)	.bucketColor(0xdedede)	.displayName("Molten Quartz Enriched Iron")		.noBlock()
	event.create("andesite_alloy")		.thickTexture(0x669999)	.bucketColor(0x669999)	.displayName("Molten Andesite Alloy")			.noBlock()
	event.create("andesite_stone")		.thickTexture(0x666666)	.bucketColor(0x666666)	.displayName("Molten Andesite Stone")			.noBlock()
	event.create("purified_water")		.thinTexture(0x003366)	.bucketColor(0x003366)	.displayName("Purified Water")					.noBlock()
	event.create("boiled_water")		.thinTexture(0x6699cc)	.bucketColor(0x6699cc)	.displayName("Boiled Water")					.noBlock()
	event.create("herbal_water")		.thinTexture(0x336666)	.bucketColor(0x336666)	.displayName("Herbal Water")					.noBlock()
	event.create("mineral_water")		.thinTexture(0x3399ff)	.bucketColor(0x3399ff)	.displayName("Mineral Water")					.noBlock()
	event.create("active_redstone")		.thinTexture(0xcc0000)	.bucketColor(0xcc0000)	.displayName("Active Molten Redstone")			.noBlock()
	event.create("seed_oil_water")		.thinTexture(0x936e52)	.bucketColor(0x936e52)	.displayName("Tree Seed Oil Water")				.noBlock()
	// Milk Fluids
	event.create("goat_milk_vinegar")	.thinTexture(0xcbd4d6)	.bucketColor(0xcbd4d6)	.displayName("Goat Milk Vinegar")				.noBlock()
	event.create("yak_milk_vinegar")	.thinTexture(0xf2efe1)	.bucketColor(0xf2efe1)	.displayName("Yak Milk Vinegar")				.noBlock()
	event.create("oat_slurry")			.thinTexture(0xe7e0c8)	.bucketColor(0xe7e0c8)	.displayName("Oat Slurry")						.noBlock()
	event.create("lumpy_oat_milk")		.thinTexture(0xeae0c5)	.bucketColor(0xeae0c5)	.displayName("Lumpy Oat Milk")					.noBlock()
	event.create("unsweetened_oat_milk").thinTexture(0xebe2c7)	.bucketColor(0xebe2c7)	.displayName("Unsweetened Oat Milk")			.noBlock()
	event.create("oat_milk")			.thinTexture(0xebe2ca)	.bucketColor(0xebe2ca)	.displayName("Oat Milk")						.noBlock()
	event.create("raw_soy_slurry")		.thinTexture(0xe8f2ac)	.bucketColor(0xe8f2ac)	.displayName("Raw Soy Slurry")					.noBlock()
	event.create("cooked_soy_slurry")	.thinTexture(0xd0d99a)	.bucketColor(0xd0d99a)	.displayName("Cooked Soy Slurry")				.noBlock()
	event.create("lumpy_soy_milk")		.thinTexture(0xd2d9ab)	.bucketColor(0xd2d9ab)	.displayName("Lumpy Soy Milk")					.noBlock()
	event.create("unsweetened_soy_milk").thinTexture(0xd6dbb6)	.bucketColor(0xd6dbb6)	.displayName("Unsweetened Soy Milk")			.noBlock()
	event.create("soy_milk")			.thinTexture(0xeaf0c9)	.bucketColor(0xeaf0c9)	.displayName("Soy Milk")						.noBlock()
	event.create("soy_milk_vinegar")	.thinTexture(0xcccfba)	.bucketColor(0xcccfba)	.displayName("Soy Milk Vinegar")				.noBlock()
	event.create("curdled_soy_milk")	.thinTexture(0xc3c9a1)	.bucketColor(0xc3c9a1)	.displayName("Curdled Soy Milk")				.noBlock()
	// End Milk Fluids
	event.create("builders_tea")		.thinTexture(0xcd7559)	.bucketColor(0xcd7559)	.displayName("Builder's Tea")					.noBlock()
	
	// Old Oil Fluids, keeping for entertainment purposes
	/*
	event.create("coconut_oil_water")   .thinTexture(0xb0a56d)  .bucketColor(0xb0a56d)  .displayName("Coconut Oil Water")               .noBlock()
	event.create("coconut_tincture")    .thinTexture(0xad9f58)  .bucketColor(0xad9f58)  .displayName("Coconut Tincture")                .noBlock()
	event.create("distilled_coconut")   .thinTexture(0xab9a44)  .bucketColor(0xab9a44)  .displayName("Distilled Coconut Oil")           .noBlock()
	event.create("purified_coconut")    .thinTexture(0xd4be53)  .bucketColor(0xd4be53)  .displayName("Purified Coconut Oil")            .noBlock()
	event.create("coconut_oil")         .thinTexture(0xd4ba3b)  .bucketColor(0xd4ba3b)  .displayName("Coconut Oil")                     .noBlock()
	event.create("tallow_tincture")     .thinTexture(0xe0e0e0)  .bucketColor(0xe0e0e0)  .displayName("Tallow Tincture")                 .noBlock()
	event.create("distilled_tallow")    .thinTexture(0xd9d9d9)  .bucketColor(0xd9d9d9)  .displayName("Distilled Tallow")                .noBlock()
	event.create("purified_tallow")     .thinTexture(0xbdbdbd)  .bucketColor(0xbdbdbd)  .displayName("Purified Tallow")                 .noBlock()
	event.create("clarified_tallow")    .thinTexture(0xe8e8e8)  .bucketColor(0xe8e8e8)  .displayName("Clarified Tallow")                .noBlock()
	event.create("olive_tincture")      .thinTexture(0x8aa374)  .bucketColor(0x8aa374)  .displayName("Olive Tincture")                  .noBlock()
	event.create("distilled_olive")     .thinTexture(0x82a663)  .bucketColor(0x82a663)  .displayName("Distilled Olive Oil")             .noBlock()
	event.create("purified_olive")      .thinTexture(0x5f7849)  .bucketColor(0x5f7849)  .displayName("Purified Olive Oil")              .noBlock()
	event.create("soy_oil_water")       .thinTexture(0xadb078)  .bucketColor(0xadb078)  .displayName("Soybean Oil Water")               .noBlock()
	event.create("soy_tincture")        .thinTexture(0xacb06b)  .bucketColor(0xacb06b)  .displayName("Soybean Tincture")                .noBlock()
	event.create("distilled_soy")       .thinTexture(0xaeb35d)  .bucketColor(0xaeb35d)  .displayName("Distilled Soybean Oil")           .noBlock()
	event.create("purified_soy")        .thinTexture(0xc9cf6b)  .bucketColor(0xc9cf6b)  .displayName("Purified Soybean Oil")            .noBlock()
	event.create("soy_oil")             .thinTexture(0xc5cc58)  .bucketColor(0xc5cc58)  .displayName("Soybean Oil")                     .noBlock()
	event.create("corn_oil_water")      .thinTexture(0xe0e09a)  .bucketColor(0xe0e09a)  .displayName("Corn Oil Water")                  .noBlock()
	event.create("corn_tincture")       .thinTexture(0xdede85)  .bucketColor(0xdede85)  .displayName("Corn Tincture")                   .noBlock()
	event.create("distilled_corn")      .thinTexture(0xdede69)  .bucketColor(0xdede69)  .displayName("Distilled Corn Oil")              .noBlock()
	event.create("purified_corn")       .thinTexture(0xfafa69)  .bucketColor(0xfafa69)  .displayName("Purified Corn Oil")               .noBlock()
	event.create("corn_oil")            .thinTexture(0xfafa42)  .bucketColor(0xfafa42)  .displayName("Corn Oil")                        .noBlock()
	event.create("seed_water")          .thinTexture(0xb8a97f)  .bucketColor(0xb8a97f)  .displayName("Seed Oil Water")                  .noBlock()
	event.create("seed_tincture")       .thinTexture(0xb8a46e)  .bucketColor(0xb8a46e)  .displayName("Seed Tincture")                   .noBlock()
	*/
	// End Old Oil Fluids
	
	// Oil Fluids Attempt 2
	//-------Tallow Oil (Lard)----------
	event.create("tallow_tincture").thinTexture(0xe0e0e0).bucketColor(0xe0e0e0).displayName("Tallow Tincture").noBlock()
	event.create("lard").thinTexture(0xe8e8e8).bucketColor(0xe8e8e8).displayName("Lard").noBlock()
	//-------Seed Oil Additions---------
	event.create("seed_water").thinTexture(0xb8a97f).bucketColor(0xb8a97f).displayName("Seed Oil Water").noBlock()
	event.create("seed_tincture").thinTexture(0xb8a46e).bucketColor(0xb8a46e).displayName("Seed Tincture").noBlock()
	//End Oil Attempt 2
})
