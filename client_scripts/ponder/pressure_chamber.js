onEvent('ponder.registry', event => {
    event.create([
        'pneumaticcraft:pressure_chamber_wall',
        'pneumaticcraft:pressure_chamber_glass',
        'pneumaticcraft:pressure_chamber_valve',
        'pneumaticcraft:pressure_chamber_interface'
    ]).scene('pressure_chamber', "Making your first chamber", 'hardrock:pressure_chamber/simple_chamber', (scene, util) => {
        /** @type {PonderHelpers} */
        const helpers = global.createPonderHelpers(scene)
        const chamberCenter = [2, 2, 2]
        scene.showBasePlate()
        scene.idle(5)
        // fill out pressure chamber's bottom
        for (let x = 3; x > 0; x--) {
            for (let z = 3; z > 0; z--) helpers.show([x, 1, z], 2)
        }
        // fill middle
        helpers.show([3, 2, 3], 2)
        helpers.show([3, 2, 2], 2)
        helpers.show([3, 2, 1], 2)
        helpers.show([2, 2, 3], 2)
        helpers.show([1, 2, 3], 3)
        helpers.show([2, 2, 1], 2)
        helpers.show([1, 2, 1], 4)
        // fill top
        for (let x = 3; x > 0; x--) {
            for (let z = 3; z > 0; z--) helpers.show([x, 3, z], 2)
        }
        scene.idle(5)
        // insert a valve
        helpers.show([1, 2, 2], 14, Facing.east)


    // Keyframe 1 - Formed chamber
        helpers.pressureChamber.form(chamberCenter)
        scene.idle(20)
        scene.text(75, "Pressure chambers are formed by making a cube that is at least 3x3x3, with at least one pressure chamber valve",
            [2.0, 2.5, 2.5]).placeNearTarget().attachKeyFrame()
        scene.idle(100)


    // Keyframe 2 - Glass instead of a wall
        scene.addKeyframe()
        helpers.hide([2, 2, 1], 2, Facing.north)
        helpers.pressureChamber.unform(chamberCenter)
        scene.idle(20)
        scene.world.setBlock([2, 2, 1], 'pneumaticcraft:pressure_chamber_glass', false)
        helpers.show([2, 2, 1], 12, Facing.south)
        helpers.pressureChamber.form(chamberCenter)
        scene.idle(12)
        scene.text(50, "Chamber glass can optionally be used instead of chamber walls",
            [2.5, 2.5, 1.0]).placeNearTarget()
        scene.idle(70)


    // Keyframe 3 - Interface introduction
        scene.rotateCameraY(90)
        scene.idle(20)
        scene.addKeyframe()
        scene.text(65, "Finally, at least two interfaces are required to transfer items in and out",
            [4.0, 2.5, 2.5]).placeNearTarget()
        scene.idle(60)
        // take a piece out
        helpers.hide([3, 2, 2], 2, Facing.east)
        helpers.pressureChamber.unform(chamberCenter)
        scene.idle(30)
        scene.text(70, "Orientation of the interface determines whether it's an import (blue) or an export (orange)",
            [3.5, 2.5, 2.5]).placeNearTarget()
        scene.idle(90)

    // Keyframe 4 - Placing interfaces
        // insert an import
        scene.addKeyframe()
        helpers.setIdWithState([3, 2, 2], 'pneumaticcraft:pressure_chamber_interface', {facing: 'west'}, Facing.west, 5)
        scene.text(60, "Placing an interface from the outside will make an import",
            [4.0, 2.5, 2.5]).placeNearTarget()
        scene.idle(7)
        helpers.pressureChamber.form(chamberCenter)
        scene.idle(75)

        helpers.setId([3, 2, 2], 'minecraft:air', false, 0, true)
        helpers.hide([3, 2, 2], 0, Facing.east)
        helpers.pressureChamber.unform(chamberCenter)
        scene.idle(10)
        // insert an export
        helpers.hide([1, 1, 1, 2, 3, 3], 0, Facing.up)
        helpers.pressureChamber.unform(chamberCenter)
        scene.idle(20)

        helpers.setIdWithState([3, 2, 2], 'pneumaticcraft:pressure_chamber_interface', {facing: 'east'}, Facing.east, 10)
        scene.text(70, "Placing an interface from the inside will make an export",
            [4.0, 2.5, 2.5]).placeNearTarget()
        scene.idle(15)
        
        helpers.setIdWithState([2, 3, 2], 'pneumaticcraft:pressure_chamber_interface', {facing:'down'})
        helpers.show([1, 1, 1, 2, 3, 3], 12)
        helpers.pressureChamber.form(chamberCenter)


    // Keyframe 5 - Inserting items
        scene.idle(70)
        scene.addKeyframe()
        helpers.show([2, 4, 2], 4)
        helpers.show([2, 5, 2], 4)
        scene.text(65, "Items can be pushed into an import with a hopper, a funnel or a chute",
            [2.5, 4.0, 2.5]).placeNearTarget()
        scene.idle(75)

        helpers.setId([4, 2, 2], 'tfc:wood/chest/acacia', Facing.west, 4)
        scene.text(60, "Outputs can be taken to a storage directly",
            [4, 2.5, 2.5]).placeNearTarget()

        // show generator
        helpers.show([0, 2, 2], 80, Facing.up)
        scene.rotateCameraY(-90)
        scene.text(80, "Both actions require the chamber to be at a high pressure",
            [0.5, 2.5, 2]).placeNearTarget()
        scene.idle(80)

        scene.rotateCameraY(90)
        scene.idle(15)
        helpers.hide([0, 2, 2], 5, Facing.down)
        
    // Keyframe 5 - Mention IE crates as storage
        scene.addLazyKeyframe()
        helpers.hide([2, 5, 2], 0, Facing.up)
        helpers.hide([4, 2, 2], 20, Facing.east)
        scene.idle(20)
        helpers.setId([2, 5, 2], 'immersiveengineering:crate', Facing.down, 4)
        helpers.setId([4, 2, 2], 'immersiveengineering:crate', Facing.west, 14)
        scene.text(80, "Regular chests can't fit larger items, so it is best to use higher tier storage blocks like crates or reinforced chests",
            [4, 2.5, 2.5]).placeNearTarget()
        scene.idle(40)
    })
})