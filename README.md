# Installation guide
1. Hit the green 'Code' button in the top right corner of the menu with a bunch of folders
2. Select 'Download ZIP'
3. Delete the contents of your instance's/server's kubejs folder
4. Extract the zip file you just downloaded into the now empty kubejs folder
5. Get the following mods:
- [Create Deco](https://www.curseforge.com/minecraft/mc-mods/create-deco/files/4554163)
- [Create Railways Navigator](https://www.curseforge.com/minecraft/mc-mods/create-railways-navigator/files/5999611)
- [Create Copycats+](https://www.curseforge.com/minecraft/mc-mods/copycats/files/6284810)
- [LootJS](https://www.curseforge.com/minecraft/mc-mods/lootjs/files/4105690)
- [Inventorio Fixes](https://www.curseforge.com/minecraft/mc-mods/inventorio-fixes/files/6737026)
- [PonderJS](https://www.curseforge.com/minecraft/mc-mods/ponder/files/3881555) (not needed on server)
6. Yay!

If something goes wrong, please feel free to reach out to me (air) and ask for help!

> [!note]
> **Just to make it clear, this is only for singleplayer or for your private server!**  
> Some of the changes are clientside, some are serverside and some are both. If you don't have this installed on both the client and the server you will not be able to join :(

# Contributing
1. Make a github account and fork this repository with the Fork button to create your personal copy that you can freely mess with
2. Download something that will let you handle the git-related things, [Github Desktop](https://desktop.github.com/download/) is pretty beginner-friendly! I also like VS Code's built-in source control feature. You can use whatever you're comfortable with though!
3. Delete everything inside of the kubejs folder of your hardrock v3 instance
4. Download and add the the mods from the installation guide section above to your instance's mods folder
5. (will be using github desktop for this guide)
- Open Github Desktop and log into your github account
- Go to File > Clone Repository. Select your forked repository and **make sure to set the local path to be the kubejs folder of your instance!**
6. Your repository should now be all set up! You can make changes inside the kubejs folder, then come back to the Github Desktop app to review them.
- To commit changes to your local repository, select the files from the list of edited files that you wish to commit, then write a commit message and hit the Commit button!
- **Keep commits small and focused!** Having each commit cover a single thing or feature is a good idea. You can see the history of my commits if you want some sort of example!
7. Once you wish to submit all of the changes that you've made to me:
- Go to my repository, then to the Pull requests tab and create a pull request with your repository
- List the changes you've made, if you have things you're not unsure about you can mention them so I can take a closer look!
- After you submit the pull request, I will go over your changes to make sure that everything's okay and merge it into the main repository :D

Please feel free to reach out to me on discord for any questions!



# Changelogs / differences from 1.5.5
### Major things:
• Added Inventorio Fixes, a mod that fixes a bunch of bugs and adds a few QoL features. Please report bugs if you run into any! <br/>
• Added Create Copycats+, a mod that introduces 43 new copycat block types <br/>
• Added Create Deco, a mod that brings extra create-adjacent building and decoration elements <br/>
• Added Create Railways Navigator, a mod that adds a few informational devices for use with train networks <br/>
• Recipe overhauls for permanent light sources (type 'permanent' into JEI to find them!) <br/>
• Made Aluminium Posts and Metal Girders act as strong supports <br/>
• Fixed the nourishment effect preventing your character from getting hungry <br/>
&nbsp; &nbsp; ◦ Nourishment will still make you not get hungry for some time, but not to an extreme it did before <br/>
• Hopefully fixed the infamous snowstorm crash <br/>
• Made IE Blast Furnaces functional for making blooms and pig iron <br/>
• Added item repair recipes for things like jetpacks and clothing
• Added custom magnets to replace the Create SA copper magnet <br/>
• Added an item that lets you remove player corpses <br/>
• Made vanilla cat summons craftable ! <br/>
• Set ground for creating custom ponder scenes (see the hardrock category in Create's ponder index!) <br/>
• Added lots of tooltips and info tabs for many items <br/>

### Balancing:
• Greatly reduced the fluid capacity of Small Vessels (3000mb -> 1200mb) <br/>
• Drastically decreased sand pile output from processing ores. Increased loot from sifting sand blocks to compensate <br/>
• Made sandstone collapsible <br/>
• Substantially increased drops from palm trees (and added coconuts as a possible drop!) <br/>
&nbsp; &nbsp; ◦ Please let us know if the loot tables still feel off! <br/>
• Blacklisted villagers from cage traps <br/>
• Tweaked the durability of crude hammers (previously known as just Ex Nihilo hammers) <br/>
• Made some items more expensive (notably Resonance Generator components, Ender Chests, Wolf Spawn Eggs, Slime Boots and Rotational Compressors) <br/>
• Tweaked nucleosynthesizer recipes, as most of them were unchanged from base mekanism <br/>
• Tweaked structural glass and reactor glass recipes <br/>
• Changed etching acid recipe <br/>
• Made Cassiterite obtainable from gravel sifting <br/>
• Buffed Blazing Blood when used as a Blaze Burner fluid (using it is still probably not worthwhile haha) <br/>
• Made Fire Ingot Molds unbreakable (used to have a 1% chance to break) <br/>
• Tweaked the recipes for HV and MV capacitors <br/>
• Made Uncrafting Tables non-functional <br/>
• Made Creosote Oil usable in PNC Liquid Compressors <br/>
• Made it impossible to summon vanilla chickens <br/>
• Made some items require rubber or plastic for their recipe instead of just using dye <br/>
• Added additional Mekanism recipes for latex and pig iron <br/>
• Removed turning sticks into torches by right clicking a torch. Sorry ;-; <br/>

### Quality of Life:
• Various improvements to quests (wip) <br/>
• Altered item names for some easy-to-confuse items <br/>
• Tweaked names for some confusing keybinds <br/>
• Items directly on top of a sluice will try their best to not despawn <br/>
• Hostile mob deaths should no longer produce pollution <br/>
• Made it more difficult to accidentally place items that have Sequenced Recipe data <br/>
• Made it possible to obtain silkworms directly from trees without having to collect the leaves with shears first <br/>
• Made infested leaves landslide instead of collapsing (think dirt or gravel) <br/>
• Improved soap-related interactions and added a higher tier Hand Sanitizer item <br/>
• Changed recipes for Feeds and Baits to reduce recipe conflicts <br/>
• Made crouch-right-clicking a jug or a flask no longer empty it to prevent accidental spills <br/>
• Tweaked the dye recipes <br/>
• Made Compressed Iron Ingots immune to explosions <br/>
• Ported 1.20's unfired clay recycling recipes <br/>
• Added ceramic shards that can be used for compost <br/>
• Added recipes for smelting down greenhouse blocks <br/>
• Added extra recipes for power-drying some items <br/>
• Reorganized ore-related tags <br/>
&nbsp; &nbsp; ◦ If you had ore processing contraptions that relied on specific item tags (not attributes like 'can be washed'), <br/>
&nbsp; &nbsp; &nbsp; you might want to double check that they still work! <br/>
• Added a way to break up geode quartz blocks prior to getting an IE crusher <br/>
• Made Lootr and Apple Crates containers interactable in claimed areas <br/>
• Made vanilla crafting tables no longer interactable in claimed areas <br/>
• Added an additional Brass Mechanisms recipe <br/>
• Increased how many redstone lamps you get per recipe <br/>
• Added a pressure chamber recipe for Create basins <br/>
• Added a sequenced recipe for Iron Hoes <br/>
• Reduced the required pressure for some conflicting pressure chamber recipes from 4.0 to 3.0 <br/>
• Added Mekanism recipes for synthesizing TFC dirt blocks <br/>
• Tweaked some sand-related recipes <br/>
• Cleaned up IE Mixer and IE Bottling Machine JEI entries <br/>
• Made heat frame and depot interaction more pleasant <br/>
• Changed the tool needed to harvest ice shavings <br/>
• Made it possible to melt ice shavings and snow into water <br/>
• Tweaked recipes and information for vanilla gemstones <br/>
• Made the Shore biome valid for waterwheels <br/>
• Added sealed barrel recipes for making clay from mud <br/>
• Added recipes for turning wool yarn into string <br/>
• Things made from vanilla crafting tables now also accept TFC workbenches <br/>
• Made vats, stovetop pots and stovetop grills count as oven-insulating blocks <br/>
• Increased the output of the wool block crushing recipe <br/>

### Food-related:
• Improvements for bowl-based foods, like soups and salads <br/>
• Various food-related tweaks, including removing unobtainable foods from the food book! (wip) <br/>
• *Drastically* reduced how long cooking pot and kettle recipes take <br/>
• Made gold and silver apples and carrots edible even when you're not hungry <br/>
• Added an alternative way of curdling milk using vinegar <br/>
• Added soy and oat milk, which are difficult-to-make plant-based milk variants <br/>
• Added more advanced alcohol production recipes <br/>
• Frothy coconuts and cinnamon bark are now obtainable <br/>
• Minor improvements for animal carcasses <br/>
• Fixed a few recipes accepting rotten food <br/>
• Nerfed vanilla apples <br/>

### Building-related:
• Lots of tweaks to Supplementaries' deco blocks <br/>
• Added recipes for TFC ore blocks and gravel deposits for building purposes <br/>
• Added a few prop foods for decoration purposes <br/>
• Re-introduced recipes for vegetable crates from Farmer's Delight <br/>
• Made all statues from Paraglider craftable (they now also serve no functional purpose and are instead purely decorative) <br/>
• Added recipes for some previously unobtainable blocks <br/>

### Fixes:
• Added a KubeJS-based recipe for akashic tomes (this fixes the recipe not working on servers) <br/>
• Fixed Mold Tables and Sewing Tables with Drawers not dropping their contents when broken <br/>
• Fixed incorrect finishing move order for some custom anvil recipes <br/>
&nbsp; &nbsp; ◦ Please report any recipes that still have an incorrect move order! <br/>
• Fixed many anvil recipes having incorrect anvil tier requirements <br/>
• Fixed a conflict with the tuyere sequenced recipe <br/>
• Fixed making Zinc Sheets with a mechanical press immediately going into the conveyor belt recipe <br/>
• Fixed sealed trapdoors not letting pollution through <br/>
• Removed arc furnace recipes for (mostly unobtainable) raw ore to reduce JEI clutter <br/>
• Made the charcoal block recipe use whole charcoal pieces instead of powder <br/>
• Fixed grinding pyrite in a quern giving 4 powder instead of 1 <br/>
• Removed the recipe for unused flint mesh <br/>
• Fixed recipe conflicts for straw hats and straw carpets <br/>
• Fixed recipe conflicts for cogwheel recipes with the IE sawmill <br/>
• Removed misleading melting tooltips for IE ore <br/>
• Fixed missing shaft texture in andesite and brass chunk loader item models <br/>
• Changed the mixing bowl "no recipe" message to be less ambiguous <br/>
• Fixed Chromite, Aluminum, Lead and Uranium ores not being able to collapse consistently <br/>
• Fixed a recipe conflict for crushing quartz <br/>
• Made all Envelope Glider kinds obtainable <br/>