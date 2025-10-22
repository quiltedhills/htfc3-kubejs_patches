# Installation guide
1. Hit the green 'Code' button in the top right corner of the menu with a bunch of folders
2. Select 'Download ZIP'
3. Delete the contents of your instance's/server's kubejs folder
4. Extract the zip file you just downloaded into the now empty kubejs folder
5. Yay!

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



# Changelogs / differences from 1.6.2
### Important changes
• Added gemstone washing! Gems may be worth processing for byproducts in mid- and late-game now. Feedback wanted! <br/>
• Removed old Create Sifter loot tables for Gravel (those were very strong), replaced them with the sluicing loot tables <br/>
• ^ Fluorite is no longer farmable with Quartzite Gravel. Please let us know if this wrecks late-game balancing too much! <br/>
• LPG was bugged to produce colossal amounts of petcoke which is now fixed (Cokers, in turn, received a massive buff) <br/>
• Significantly increased gem drop rate for sluicing or sifting colored sand (0.1% -> 0.5%; 1% for yellow and brown sand) <br/>
• Added Pyrite and Fluorite to the Rare Gems virtual vein for the Create Drilling Machine, removed Ruby due to being less useful <br/>
• Fixed IE and Firmalife ores being unusually soft (they now take the same time to break as raw stone, same as all TFC ores) <br/>
• Increased processing speed of IE Crushers (dropping items in without a chute may not be fast enough for input now!) <br/>
• Digital Miners can now survive blocks falling on top of it <br/>
• Changed the Rock Chunks recipes that use the Create Mechanical Press to only require one action instead of four <br/>
• Increased outputs from washing Andesite Rock Powder <br/>
• Made Rubberwood Logs have a chance to not drop when broken (feedback wanted!) <br/>
• Reduced the amount of Rubberwood Planks you get from each log <br/>
• Removed Cocoa Beans from the sand sieving loot tables, added some other things to take their place <br/>



### New things
• Added the Dust Mop <br/>
• Added recipes for TF cloud blocks <br/>
• Added a recipe for Barrel Cacti and Firmaciv Thatch Roofing <br/>
• Added gemstone washing recipes <br/>
• Added crushing recipes TFC ore blocks <br/>
• Added Create Mixer recipes for dye fluids <br/>

### Documentation / Meta
• Added an optional disabled-by-default resource pack that replaces the Body Hygiene dirtiness meter with precise numeric values <br/>
• Added tooltips to Nightshade and Stinky Soup mentioning their toxicity <br/>
• Added informational tooltips for End Portal Frames and End Cakes <br/>
• Added a bit of information regarding silkworm spread to Silkworm-related items and blocks <br/>
• Hidden the instant barrel cooling recipes to reduce clutter <br/>
• Hidden a bunch of unobtainable fluids <br/>
• Made it impossible to place a String Mesh onto Create Sifters to help lower confusion <br/>
• Changed map color of Terror Birds to orange (from white) <br/>
• Added JEI info for the Coker structure explaining how to collect its outputs <br/>

### Quality of Life
• Made some Clay recipes accept colored TFC sands, as opposed to being limited to vanilla sand <br/>
• Made oven appliances such as cooking pots and kettles count as oven insulation <br/>
• Added Mekanism recipes for making Andesite Alloy and for turning Loose Rocks into bricks <br/>
• Added more advanced recipes for making Gypsum/Alabaster <br/>
• Made smashing ores into Rocky Chunks with a Mechanical Press require only one action, down from four <br/>
• Made the Rod into Nugget sequenced recipes take four actions instead of five <br/>
• Added Crude Hammer recipes for breaking down coal blocks <br/>
• Added Mechanical Press recipes for some Crude Hammer recipes (like breaking down overworld Quartz crystal blocks!) <br/>

### Balancing
• Swapped petcoke output rates for LPG processing and Bitumen processing <br/>
• Made the Create Sifter gravel loot tables match the sluicing ones, essentially nerfing them really hard <br/>
• Sifting/sluicing colored sand is now much more likely to give gems <br/>
• Overhauled the sand sifting loot tables <br/>
• Made Osmium virtual veins for the Create Drilling Machine require a netherite drill <br/>
• Increased processing speed of IE Crushers <br/>
• Increased outputs from washing Andesite Rock Powder <br/>
• Dropped the output rate for the Unfired Brick deployer recipes from 100% to 70% (still more efficient than knapping by hand), added IE metal press (and Mekanism) recipes with 100% output rate to take their place <br/>
• Rubberwood Logs now have a 50% chance to not drop as an item when broken <br/>
• Decreased output of all Rubberwood Planks recipes <br/>
• Swapped out some of the gems that the Rare Gems ore vein has to more useful ones <br/>
• Micromissiles found in loot chests now only have 5 shots instead of 100 <br/>
• Micromissiles and Tool Boxes are now more expensive to make <br/>
• Tweaked recipes for Crude Hammers, Sentry Turrets, Andesite Exoskeletons, Powered Lanterns and Garlic Bread <br/>
• LPG can now be used as Blaze Burner fuel <br/>
• Making plastic from Ethylene and Propylene now gives slightly more bitumen <br/>
• Made the compass recipe accept primitive glass panes <br/>
• Sprinklers and TC Plate Armor can now be made from any colored steel, instead of specifically requiring red or blue <br/>

### Fixes
• Fixed block hardness for IE and Firmalife TFC ores <br/>
• Digital Miners can no longer be destroyed by falling blocks <br/>
• Fixed the crafting grid AdPother filter application recipes crashing the game <br/>
• Hopefully fixed KubeJS items sometimes having broken black-and-purple item models <br/>
• Fixed "Cup of Iced Tea" showing up instead of "Air" in empty tanks <br/>
• Tweaked coffee-related recipes and item names <br/>
• Fixed recipe conflicts for Propellers and Iron Sheets, Peculiar Bells and Brass Sheetmetal, as well as for Copycat Layers, Bytes and Slices <br/>
• Fixed the Iron Bloom sequenced recipe going straight into the Iron Hoe recipe <br/>
• Corrected weird TC smelting values for Quartz-Enriched Iron <br/>
• Removed overlapping recipes for Sulfur (for some reason you were able to get powder directly from ore with some machines) <br/>
• Removed some unobtainable meat types from JEI <br/>
• Fixed Reinforced Stone being a valid crafting ingredient for making itself, resulting in wasting meshes <br/>
• Fixed TC Mattocks not having the #tfc:axes tag <br/>
• Fixed broken message when attempting to knap rotten Pumpkins <br/>
• Fixed anvil move order for Wrought Iron and Cast Iron Grills <br/>
• Fixed Vinegar recipe not accepting aged alcohols <br/>
• Fixed backpacks being storable in Small Vessels <br/>
• Fixed TF Venison and Meef not being obtainable <br/>
• Made it impossible for zombie villagers to spawn <br/>
• Made End Portal Frames not drop when broken within the End dimension <br/>
• Fixed Sugar Cubes not having an uncrafting recipe <br/>
• Fixed Fluorite Blocks not being craftable <br/>
• Fixed TNT having two identical crafting recipes <br/>
• Fixed a Fluid Drawer exploit <br/>
• Fixed an exploit with Toolboxes <br/>
• Removed a weird mutton cutting recipe <br/>
• Removed odd Latex Bucket recipe involving supports <br/>