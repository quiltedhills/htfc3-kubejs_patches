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
• Increased processing speed of IE crushers by four times (dropping items in without a chute may not be fast enough for input now!) <br/>
• Dropped the output rate for the unfired brick deployer recipes from 100% to 70% (hand knapping has a 60% conversion rate, for comparison), added IE metal press (and Mekanism) recipes with 100% output rate to take their place <br/>
• Made the Create Mechanical Press rocky chunk recipe require only one action per ore instead of four <br/>
• Added a Mekanism recipe for turning loose rocks into bricks <br/>
• Added a Mekanism recipe for making andesite alloy <br/>
• Added crushing recipes for turning TFC ore blocks into ore pieces (those are normally not naturally obtainable aside from a specific IE excavator vein) <br/>
• Made the more advanced stone brick recipes also include gypsum/alabaster <br/>

• Added tooltips to Nightshade and Stinky Soup mentioning their toxicity <br/>
• Hidden the instant barrel cooling recipes to reduce clutter <br/>

• Fixed recipe conflict for Copycat Layers <br/>
• Fixed the bloom processing sequenced recipe going straight into the iron hoe recipe <br/>
• Fixed IE crushers having two overlapping recipes for crushing sulfur ore <br/>
• Fixed TC mattocks not having #tfc:axes tag <br/>
• Fixed broken message when attempting to knap rotten pumpkins <br/>