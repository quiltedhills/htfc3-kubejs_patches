onEvent("item.right_click", (event) => {
    if (event.item.hasTag('forge:soap/weak') && !(event.player.potionEffects.isActive('bodyhygiene:soapy'))) {
        let cleanliness_level = event.player.fullNBT['ForgeCaps']['bodyhygiene:bodyhygiene_properties']['bodyhygiene']
        if (cleanliness_level == 10) {
            event.player.server.runCommandSilent(`title ${event.getPlayer()} actionbar {"text":"You are already very clean!"}`)
        } else {
            event.item.count--
            event.player.potionEffects.add('bodyhygiene:soapy', 100)
            event.player.server.runCommandSilent(`bodyhygiene set ${Math.min(10, cleanliness_level + 5)} ${event.getPlayer()}`)
        }
    }
    if (event.item.hasTag('forge:soap/strong') && !(event.player.potionEffects.isActive('bodyhygiene:soapy'))) {
        event.server.scheduleInTicks(1, (c) => {
            event.player.server.runCommandSilent(`effect clear ${event.getPlayer()} bodyhygiene:soapy`)
            event.player.potionEffects.add('bodyhygiene:soapy', 200, 0, true, false)
        })
        event.player.server.runCommandSilent(`bodyhygiene set 10 ${event.getPlayer()}`)
    }
})