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
• Replaced loot tables for sifting Gravel in a Create Sifter to match sluices <br/>
• Removed Cocoa Beans from the sand sieving loot tables, added some other things to take their place <br/>
• Significantly increased gem drop rate for sluicing or sifting colored sand (0.1% -> 0.5%; yellow sand has a 1% chance) <br/>
• Swapped out Rubies for Pyrite in the Rare Gems virtual vein for the Create Drilling Machine <br/>
• Added crushing recipes for turning TFC ore blocks into ore pieces (those are normally not naturally obtainable aside from a specific IE excavator vein) <br/>
• Made the Create Mechanical Press recipes for Rocky Chunks require only one action per ore item instead of four <br/>
• Made the Rod into Nugget sequenced recipes take four actions instead of five <br/>

• Reduced the amount of Rubberwood Planks you get from each log <br/>
• Made Rubberwood Logs have a chance to not drop when broken (feedback wanted!) <br/>
• Fixed IE and Firmalife ores being unusually soft (they now take the same time to break as raw stone, same as all TFC ores) <br/>
• Increased processing speed of IE Crushers by four times (dropping items in without a chute may not be fast enough for input now!) <br/>

• Dropped the output rate for the Unfired Brick deployer recipes from 100% to 70%, added IE metal press (and Mekanism) recipes with 100% output rate to take their place. For comparison, knapping by hand has a 5:3 output ratio, which translates to a 60% rate <br/>
• Made some Clay recipes accept colored TFC sands, as opposed to being limited to vanilla sand <br/>
• Made oven appliances such as cooking pots and kettles count as oven insulation <br/>
• Added a Mekanism recipe for turning Loose Rocks into bricks <br/>
• Added a Mekanism recipe for making Andesite Alloy <br/>
• Made the more advanced Stone Brick recipes also include Gypsum/Alabaster <br/>

• Micromissiles found in loot chests now only have 5 shots instead of 100 <br/>
• Micromissiles are now more expensive to craft <br/>
• Tweaked recipes for Crude Hammers, Sentry Turrets and Andesite Exoskeletons <br/>
• Added a recipe for Barrel Cacti and Firmaciv Thatch Roofing <br/>
• Removed odd Latex Bucket recipe involving supports <br/>
• Added Create Mixer recipe for dye fluids <br/>
• Tweaked coffee-related recipes and item names <br/>

• Added tooltips to Nightshade and Stinky Soup mentioning their toxicity <br/>
• Added a bit of information regarding silkworm spread to Silkworm-related items and blocks <br/>
• Hidden the instant barrel cooling recipes to reduce clutter <br/>
• Made it impossible to place a String Mesh onto a Create Sifter to help lower confusion <br/>

• Fixed "Cup of Iced Tea" showing up instead of "Air" in some item/fluid names <br/>
• Fixed recipe conflict for Propellers, as well as Copycat Layers, Bytes and Slices <br/>
• Removed overlapping recipes for Sulfur (for some reason you were able to get powder directly from ore with some machines) <br/>
• Fixed the Iron Bloom sequenced recipe going straight into the Iron Hoe recipe <br/>
• Fixed TC Mattocks not having the #tfc:axes tag <br/>
• Fixed broken message when attempting to knap rotten Pumpkins <br/>
• Fixed anvil move order for Wrought Iron and Cast Iron Grills <br/>
• Fixed Vinegar recipe not accepting aged alcohols <br/>
• Fixed backpacks being storable in Small Vessels <br/>
• Fixed Twilight Forest Venison and Meef not being obtainable <br/>
• Removed some unobtainable meat types from JEI <br/>
• Fixed TNT having two identical crafting recipes <br/>
• Made it impossible for zombie villagers to spawn <br/>
• Made End Portal Frames not drop when broken within the End dimension <br/>