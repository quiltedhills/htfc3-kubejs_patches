// Helper script based on 'kubejs/server_scripts/custom_items/magnet.js', largely the same but smaller and with some tweaks.
// This script is needed to make items properly sync on the client in multiplayer.
// The sync is not perfect, but it's good as I could make it.

let magnetTiers = {
    tier1: {
        items: ['kubejs:magnet/copper'],
        range: 4.5,
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            if (!item.persistentData.metallic) return

            let directionX = dx / distance;   let directionY = dy / distance;   let directionZ = dz / distance

            if (item.persistentData.huge_very_heavy) range /= 2
            let speed = 0.125 * Math.min(1 - (distance / range), 0.5)
            if (item.persistentData.huge_very_heavy) speed /= 5

            if (distance > range) return
            if (distance <= 0.5 && !item.persistentData.huge_very_heavy) {
                item.setMotion(
                    item.motionX * (0.75 + distance / 2) + directionX * speed,
                    item.motionY * (0.75 + distance / 2) + directionY * speed * 1.25,
                    item.motionZ * (0.75 + distance / 2) + directionZ * speed
                )
            } else {
                item.setMotion(
                    item.motionX * 0.97 + directionX * speed,
                    item.motionY * 0.97 + directionY * speed * 2,
                    item.motionZ * 0.97 + directionZ * speed
                )
            }
        }
    },
    tier2: {
        items: ['kubejs:magnet/colored_steel'],
        range: 5,
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            let directionX = dx / distance;   let directionY = dy / distance;   let directionZ = dz / distance

            if (item.persistentData.huge_very_heavy) range /= 2
            if (!item.persistentData.metallic) range /= 1.125
            let speed = 0.125 * Math.min(1 - (distance / range), 0.5)
            if (item.persistentData.huge_very_heavy) speed /= 5
            if (item.persistentData.metallic) speed *= 1.125

            if (distance > range) return
            if (distance <= 0.5 && !item.persistentData.huge_very_heavy) {
                item.setMotion(
                    (Math.abs(item.motionX / 200)) > (Math.abs(dx * 0.05)) ? item.motionX + directionX * speed     : dx * 0.05,
                    (Math.abs(item.motionY / 200)) > (Math.abs(dy * 0.10)) ? item.motionY + directionY * speed * 2 : dy * 0.10,
                    (Math.abs(item.motionZ / 200)) > (Math.abs(dz * 0.05)) ? item.motionZ + directionZ * speed     : dz * 0.05
                )
            } else {
                item.setMotion(
                    item.motionX * 0.95 + directionX * speed,
                    item.motionY * 0.95 + directionY * speed * 2,
                    item.motionZ * 0.95 + directionZ * speed
                )
            }
        }
    },
    tier3: {
        items: ['kubejs:magnet/hdpe'],
        range: 6,
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            if (item.persistentData.huge_very_heavy) range /= 2
            if (distance > range) return

            if (item.persistentData.huge_very_heavy) {
                let factor = (1 - distance / range) * 0.05
                item.setMotion(
                    item.motionX * 0.75 + factor * dx,
                    item.motionY * 0.65 + factor * dy * 2,
                    item.motionZ * 0.75 + factor * dz
                )
            } else {
                let factor = (distance*0.25 / range + 1) * 0.05
                item.setMotion(
                    item.motionX * 0.75 + factor * dx,
                    item.motionY * 0.65 + factor * dy * 2,
                    item.motionZ * 0.75 + factor * dz
                )
            }
        }
    },
    tier4: {
        items: ['kubejs:magnet/polonium'],
        get range() { return magnetTiers.tier3.range},
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            return magnetTiers.tier3.applyMagnetPull(item, distance, range, dx, dy, dz)
        }
    }
}


function getNearbyItems(level, position, range) {
    let aabb = AABB.of(
        position[0] - range, position[1] - range, position[2] - range,
        position[0] + range, position[1] + range, position[2] + range
    )
    let items = level.getEntitiesWithin(aabb).filter(entity => entity.type == 'minecraft:item')
    return items
}

let isInProtectedArea = false
onEvent('player.data_from_server.protectedAreaStatus', event =>
    isInProtectedArea = event.data.protectedAreaStatus
)

onEvent('client.tick', event => {
    let player = event.player
    let activeTier = Object.values(magnetTiers).find(tier => tier.items.some(item => player.isHoldingInAnyHand(item)))
    if (!activeTier) return

    let { range, applyMagnetPull } = activeTier
    let items = getNearbyItems(event.level, [player.x, player.y, player.z], range)

    if (isInProtectedArea && items.length > 0) return

    items.forEach(item => {
        let dx = player.x - item.x
        let dy = player.y + player.getEyeHeight() / 2 - item.y
        let dz = player.z - item.z
        let squaredDistance = dx * dx + dy * dy + dz * dz

        if (squaredDistance > range * range) return

        let distance = squaredDistance ** 0.5

        if (!('metallic' in item.persistentData)) item.persistentData.metallic = Ingredient.of("#kjs:metallic").test(item.fullNBT.Item.id)
        if (!('very_heavy' in item.persistentData)) item.persistentData.huge_very_heavy = Ingredient.of("#tfc:huge_very_heavy").test(item.fullNBT.Item.id)

        applyMagnetPull(item, distance, range, dx, dy, dz)
    })
})
