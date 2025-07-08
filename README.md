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
• Added Create Deco, a mod that brings extra create-adjacent building and decoration elements <br/>
• Added Create Railways Navigator, a mod that adds a few informational devices for use with train networks <br/>
• Introduced a few custom ponder scenes (see the hardrock category in Create's ponder index!) <br/>
• Recipe overhauls for permanent light sources (type 'permanent' into JEI to find them!) <br/>
• Fixed the nourishment effect preventing your character from getting hungry <br/>
&nbsp; &nbsp; ◦ Nourishment will still make you not get hungry for some time, but not to an extreme it did before <br/>
• Hopefully fixed the infamous snowstorm crash <br/>
• Made IE Blast Furnaces functional for making blooms and pig iron <br/>
• Added item repair recipes for things like jetpacks and clothing
• Added custom magnets to replace the Create SA copper magnet <br/>

### Balancing:
• Decreased outputs from sifting sand <br/>
• Made sandstone collapsible <br/>
• Substantially increased drops from palm trees (and added coconuts as a possible drop!) <br/>
&nbsp; &nbsp; ◦ Please let us know if the loot tables still feel off! <br/>
• Blacklisted villagers from cage traps <br/>
• Tweaked the durability of crude hammers (previously known as just Ex Nihilo hammers) <br/>
• Made Ender Chests, Wolf Spawn Eggs, Slime Boots and Rotational Compressors more expensive <br/>
• Tweaked nucleosynthesizer recipes, as most of them were unchanged from base mekanism <br/>
• Tweaked structural glass and reactor glass recipes <br/>
• Changed etching acid recipe <br/>
• Made Cassiterite obtainable from gravel sifting <br/>
• Buffed Blazing Blood when used as a Blaze Burner fluid (using it is still probably not worthwhile haha) <br/>

### Quality of Life:
• Various improvements to quests (wip) <br/>
• Added detailed tooltips and info tabs for many items <br/>
• Altered item names for some easy-to-confuse items <br/>
• Tweaked names for some confusing keybinds <br/>
• Items directly on top of a sluice will no longer despawn <br/>
• Hostile mob deaths should no longer produce pollution <br/>
• Added a safeguard to prevent accidentally placing block items that have sequenced recipe data <br/>
• Made it possible to obtain silkworms directly from trees without having to collect the leaves with shears first <br/>
• Made infested leaves landslide instead of collapsing (think dirt or gravel) <br/>
• DON'T FORGET TO REVERT Added TFC grass blocks to the '#minecraft:dirt' tag, which allows things like planting rubberwood trees on TFC grass blocks <br/>
• Improved soap-related interactions and added a higher tier Hand Sanitizer item <br/>
• Changed recipes for Feeds and Baits to reduce recipe conflicts <br/>
• Added an item that lets you remove player corpses <br/>
• Ported 1.20's unfired clay recycling recipes <br/>
• Added ceramic shards that can be used for compost <br/>
• Added recipes for smelting down greenhouse blocks <br/>
• Added extra recipes for power-drying some items <br/>
• Reworked ore-related tags <br/>
&nbsp; &nbsp; ◦ If you had ore processing contraptions that relied on specific item tags (not attributes like 'can be washed'), <br/>
&nbsp; &nbsp; &nbsp; you might want to double check that they still work! <br/>
• Added a way to break up geode quartz blocks prior to getting an IE crusher <br/>
• Added a third Brass Mechanisms recipe variant <br/>
• Increased how many redstone lamps you get per recipe <br/>
• Added a pressure chamber recipe for Create basins <br/>
• Reduced the required pressure for some conflicting pressure chamber recipes from 4.0 to 3.0 <br/>
• Added Mekanism recipes for synthesizing TFC dirt blocks <br/>
• Tweaked some sand-related recipes <br/>
• Cleaned up IE Mixer and IE Bottling Machine JEI entries <br/>
• Made heat frame and depot interaction more pleasant <br/>
• Made ice shavings less intrusive <br/>
• Tweaked recipes and information for vanilla gemstones <br/>
• Made the Shore biome valid for waterwheels <br/>
• Added sealed barrel recipes for making clay from mud <br/>
• Added recipes for turning wool yarn into string <br/>

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
• Aforementioned addition of Create Deco with many recipe changes <br/>
• Lots of tweaks to Supplementaries' deco blocks <br/>
• Added recipes for TFC ore blocks and gravel deposits for building purposes <br/>
• Added a few prop foods for decoration purposes <br/>
• Re-introduced recipes for vegetable crates from Farmer's Delight <br/>
• Made all statues from Paraglider craftable (they now also serve no functional purpose and are purely decorative) <br/>
• Added recipes for some previously unobtainable blocks <br/>

### Fixes:
• Added a KubeJS-based recipe for akashic tomes (this fixes the recipe not working on servers) <br/>
• Fixed some blocks not dropping their contents when broken (mold tables and sewing tables with drawers) <br/>
• Fixed incorrect finishing move order for some custom anvil recipes <br/>
&nbsp; &nbsp; ◦ Please report any recipes that still have an incorrect move order! <br/>
• Fixed many anvil recipes having incorrect anvil tier requirements <br/>
• Fixed a conflict with the tuyere sequenced recipe <br/>
• Fixed sealed trapdoors not letting pollution through <br/>
• Removed arc furnace recipes for (mostly unobtainable) raw ore <br/>
• Made the charcoal block recipe use whole charcoal pieces instead of powder <br/>
• Fixed grinding pyrite in a quern giving 4 powder instead of 1 <br/>
• Removed the recipe for unused flint mesh <br/>
• Fixed recipe conflicts for straw hats and straw carpets <br/>
• Removed misleading melting tooltips for IE ore <br/>
• Fixed missing shaft texture in andesite and brass chunk loader item models <br/>