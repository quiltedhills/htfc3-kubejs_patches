# Installation guide
1. Hit the green 'Code' button in the top right corner of the menu with a bunch of folders
2. Select 'Download ZIP'
3. Delete the contents of your instance's/server's kubejs folder
4. Extract the zip file you just downloaded into the now empty kubejs folder
5. Get the mod [Create Deco](https://www.curseforge.com/minecraft/mc-mods/create-deco/files/4554163). This is required on both the server and the clients!
6. Yay!

If something goes wrong, please feel free to reach out to me (air) and ask for help!

> [!note]
> **Just to make it clear, this is only for singleplayer or for your private server!**  
> Some of the changes are clientside, some are serverside and some are both. If you don't have this installed on both the client and the server you will not be able to join :(

# Contributing
1. Make a github account and fork this repository with the Fork button to create your personal copy that you can freely mess with
2. Download something that will let you handle the git-related things, [Github Desktop](https://desktop.github.com/download/) is pretty beginner-friendly! I also like VS Code's built-in source control feature. You can use whatever you're comfortable with though!
3. Delete everything inside of the kubejs folder of your hardrock v3 instance
4. Download and add the [Create Deco mod](https://www.curseforge.com/minecraft/mc-mods/create-deco/files/4554163) to your instance's mods folder
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
• Added Create Deco, a mod that brings extra create-adjacent building and decoration elements <br/>
• Added custom magnets to replace the Create SA copper magnet <br/>
• Recipe overhauls for permanent light sources (type 'permanent' into JEI!) <br/>
• Reworked ore-related tags <br/>
&nbsp; &nbsp; ◦ If you had ore processing contraptions that relied on specific item tags (not attributes like 'can be washed'), <br/>
&nbsp; &nbsp; &nbsp; you might want to double check that they still work! <br/>

### Balancing:
• Decreased outputs from sifting sand <br/>
• Made sandstone collapsible <br/>
• Made infested leaves landslide instead of collapsing (think dirt or gravel!) <br/>
• Reworked nucleosynthesizer recipes <br/>
• Blacklisted villagers from cage traps <br/>
• Reworked recipe for wolf spawn eggs <br/>
• Tweaked the durability of Ex Nihilo hammers (now called crude hammers!) <br/>
• Made Ender Chests significantly more expensive <br/>

### Quality of Life:
• Various improvements to quests <br/>
• Added detailed tooltips for various items <br/>
• Altered item names for some easy-to-confuse items <br/>
• Ported 1.20's unfired clay recycling recipes <br/>
• Added ceramic shards that can be used for compost <br/>
• Added recipes for smelting down greenhouse blocks <br/>
• Increased redstone lamp recipe yield <br/>
• Tweaked some sand-related recipes <br/>

### Food-related:
• Improvements for bowl-based foods, like soups and salads <br/>
• Various food-related tweaks, including removing unobtainable foods from the food book! <br/>
• Made gold and silver apples and carrots edible even when you're not hungry <br/>
• Added an alternative way of curdling milk using vinegar <br/>
• Added soy milk, a difficult-to-make plant-based milk <br/>
• Added more advanced alcohol production recipes <br/>
• Minor improvements for animal carcasses <br/>
• Fixed a few recipes accepting rotten food <br/>
• Nerfed vanilla apples <br/>

### Building-related:
• Aforementioned addition of Create Deco with many recipe changes <br/>
• Lots of tweaks to Supplementaries' deco blocks <br/>
• Added recipes for TFC ore blocks for building purposes <br/>
• Added a few prop foods for decoration purposes <br/>
• Re-introduced recipes for vegetable crates from Farmer's Delight <br/>

### Fixes:
• Added a KubeJS-based recipe for akashic tomes (this fixes the recipe not working on servers) <br/>
• Fixed incorrect finishing move order for some custom anvil recipes <br/>
• Fixed a conflict with the tuyere sequenced recipe <br/>
• Fixed sealed trapdoors not letting pollution through <br/>
• Removed arc furnace recipes for (mostly unobtainable) raw ore <br/>
• Made the charcoal block recipe use whole charcoal pieces instead of powder <br/>
• Fixed grinding pyrite in a quern giving 4 powder instead of 1 <br/>
• Removed the recipe for unused flint mesh <br/>
• Fixed recipe conflicts for straw hats and straw carpets <br/>