// priority: 1000

// A bunch of shortcut functions for use in ponder scenes.
// // To use this, you have to add these two lines in your scene:

//  /** @type {PonderHelpers} */
//  const helpers = global.createPonderHelpers(scene)

// Afterwards, you will be able to call any functions with `helpers.<function>()`.



// For adding extra functions to this:
// Each function has a public variant with no code that stores input parameters and JSDocs,
// and a private variant that has no jsdocs and does the code.
// Each function has to be explicitly defined in this typedef block right below this.
// Nested functions (like pressureChamber) need their own typedef,
// one such can be found below where the related functions are defined.

/**
 * @typedef {Object} PonderHelpers
 * @property {function} show Un-hides an existing block or selection
 * @property {function} hide Hides an existing block or selection
 * @property {function} setId Applies a block to a coordinate or selection
 * @property {function} setIdWithState Applies a block with blockstate properties to a coordinate or selection
 * @property {function} setState Applies blockstates properties to existing blocks at a coordinate or selection
 * @property {PressureChamberHelpers} pressureChamber A collection of functions for mock-operating a 3x3x3 pressure chamber
 * 
 */


/**
 * Creates helper functions for ponder scenes
 * @param {Scene} scene - The scene object for the current context
 * @returns {PonderHelpers} The helper functions for the scene
 */
global.createPonderHelpers = function(scene) {
    return {
        show: _show.bind(null, scene),
        hide: _hide.bind(null, scene),
        setId: _setId.bind(null, scene),
        setIdWithState: _setIdWithState.bind(null, scene),
        setState: _setState.bind(null, scene),
        pressureChamber: {
            form: _form.bind(null, scene),
            unform: _unform.bind(null, scene)
        }
    }
}

////////////////////////////////
// Function definitions:

/**
 * Un-hides an existing block or selection
 * @param {Vec3 | Internal.Selection_} coords - Single block or area to make appear
 * @param {number} [restTime=0] - Resting time until the next scene action
 * @param {Internal.Direction_} [direction=Facing.down] - Direction for the block fading animation. Must be a `Facing.<direction>` struct
 * @example show([2, 1, 2], 10, Facing.east)
 * @author Air
 */
function show(coords, restTime, direction) { }
function _show(scene, coords, restTime, direction) {
    let dir = (direction == null) ? Facing.down : direction
    scene.world.showSection(coords, dir)
    if (restTime != null) scene.idle(restTime)
}
/**
 * Hides an existing block or selection
 * @param {Vec3 | Internal.Selection_} coords - Single block or area to make disappear
 * @param {number} [restTime=0] - Resting time until the next scene action
 * @param {Internal.Direction_} [direction=Facing.down] - Direction for the block fading animation. Must be a `Facing.<direction>` struct
 * @example hide([0, 0, 0, 2, 2, 2], 10, Facing.up)
 * @author Air
 */
function hide(coords, restTime, direction) { }
function _hide(scene, coords, restTime, direction) {
    let dir = (direction == null) ? Facing.down : direction

    scene.world.hideSection(coords, dir)
    if (restTime != null) scene.idle(restTime)
}
/**
 * Applies a block to a coordinate or selection
 * @param {Vec3 | Internal.Selection_} coords - Single block or area to apply the block to
 * @param {Internal.ResourceLocation_ | Internal.BlockState_} blockIdOrState - An ID string (or a `Block.id().with()` struct)
 * @param {Internal.Direction_ | false} [showDirection=false] - A direction to immediately start a show animation. Must be a `Facing.<direction>` struct
 * @param {number} [restTime=0] - Resting time until the next scene action
 * @param {boolean} [blockBreakParticles=false] - Whether to simulate breaking the blocks that are being replaced
 * @example setId([4, 1, 2], 'tfc:rock/cobble/schist', Facing.north, 12, true)
 * @author Air
 */
function setId(coords, blockIdOrState, showDirection, restTime, blockBreakParticles) { }
function _setId(scene, coords, blockIdOrState, showDirection, restTime, blockBreakParticles) {
    if (blockBreakParticles == null) blockBreakParticles = false
    scene.world.setBlock(coords, blockIdOrState, blockBreakParticles)
    if (showDirection) _show(scene, coords, restTime, showDirection)
    if (restTime != null) scene.idle(restTime)
}
/**
 * Applies a block with blockstate properties to a coordinate or selection
 * @param {Vec3 | Internal.Selection_} coords - Single block or area to apply the block to
 * @param {Internal.ResourceLocation_} blockId - An ID string to change the block to. If you want to keep the old block, use `setState()` instead
 * @param {Array<string> | Array<[string, string]> | Object<string, string>} blockstates - A collection of property-state strings
 * @param {Internal.Direction_ | false} [showDirection=false] - A direction to immediately start a show animation. Must be a `Facing.<direction>` struct
 * @param {number} [restTime=0] - Resting time until the next scene action
 * @param {boolean} [blockBreakParticles=false] - Whether to simulate breaking the blocks that are being replaced
 * @example setIdWithState([1, 0, 0], ['waterlogged', 'true', 'north', 'true'], 'tfc:wood/fence/maple', Facing.east, 4, true)
 * @example setIdWithState([1, 0, 0], [['waterlogged', 'true'], ['north', 'true']], 'tfc:wood/fence/maple', Facing.east, 4, true)
 * @example setIdWithState([1, 0, 0], { waterlogged: 'true', north: 'true' }, 'tfc:wood/fence/maple', Facing.east, 4, true)
 * @author Air
 */
function setIdWithState(coords, blockId, blockstates, showDirection, restTime, blockBreakParticles) { }
function _setIdWithState(scene, coords, blockId, blockstates, showDirection, restTime, blockBreakParticles) {
    if (blockBreakParticles == null) blockBreakParticles = false
    scene.world.setBlock(coords, applyBlockStates(Block.id(blockId), blockstates), blockBreakParticles)
    if (showDirection) _show(scene, coords, restTime, showDirection)
    if (restTime != null) scene.idle(restTime)
}
/**
 * Applies blockstates properties to existing blocks at a coordinate or selection
 * @param {Vec3 | Internal.Selection_} coords - Single block or area to apply the block to
 * @param {Array<string> | Array<[string, string]> | Object<string, string>} blockstates - A collection of property-state strings
 * @param {Internal.Direction_ | false} [showDirection=false] - A direction to immediately start a show animation. Must be a `Facing.<direction>` struct
 * @param {number} [restTime=0] - Resting time until the next scene action
 * @param {boolean} [blockBreakParticles=false] - Whether to simulate breaking the blocks that are being replaced
 * @example setState([1, 0, 0], ['waterlogged', 'true', 'facing', 'west'], Facing.west, 4, true)
 * @example setState([1, 0, 0], [['waterlogged', 'true'], ['facing', 'west']], Facing.west, 4, true)
 * @example setState([1, 0, 0], { waterlogged: 'true', facing: 'west' }, Facing.west, 4, true)
 * @author Air
 */
function setState(coords, blockstates, showDirection, restTime, blockBreakParticles) { }
function _setState(scene, coords, blockstates, showDirection, restTime, blockBreakParticles) {
    if (blockBreakParticles == null) blockBreakParticles = false
    scene.world.modifyBlock(coords, (oldBlock) => applyBlockStates(Block.id(oldBlock.id), blockstates), blockBreakParticles)
    if (showDirection) _show(scene, coords, restTime, showDirection)
    if (restTime != null) scene.idle(restTime)
}

////////////////////////////////
// Miscellaneous functions:

/**
 * @typedef {Object} PressureChamberHelpers
 * @property {function} form Applies proper blockstates to a 3x3x3 pressure chamber and spawns particles to simulate forming a pressure chamber
 * @property {function} unform Resets all blockstates of a 3x3x3 pressure chamber to simulate it becoming invalid
 */

/**
 * Applies proper blockstates to a 3x3x3 pressure chamber and spawns particles to simulate forming a pressure chamber
 * @param {Vec3} chamberCenter - Center block of the 3x3x3 chamber
 * @example form([2, 2, 2])
 * @author Air
 */
function form(chamberCenter) { }
function _form(scene, chamberCenter) {
    // Blockstate map
    const offsets = {
        corners: [
            [-1, -1, -1, 'xmin_ymin_zmin'], [1, -1, -1, 'xmin_ymax_zmax'],
            [-1, -1, 1, 'xmin_ymin_zmax'], [1, -1, 1, 'xmin_ymax_zmin'],
            [-1, 1, -1, 'xmin_ymax_zmin'], [1, 1, -1, 'xmin_ymin_zmax'],
            [-1, 1, 1, 'xmin_ymax_zmax'], [1, 1, 1, 'xmin_ymin_zmin']
        ],
        edges: [
            [-1, -1, 0, 'xedge'], [1, -1, 0, 'xedge'],
            [-1, 1, 0, 'xedge'], [1, 1, 0, 'xedge'],
            [0, -1, -1, 'zedge'], [0, -1, 1, 'zedge'],
            [0, 1, -1, 'zedge'], [0, 1, 1, 'zedge'],
            [-1, 0, -1, 'yedge'], [1, 0, -1, 'yedge'],
            [-1, 0, 1, 'yedge'], [1, 0, 1, 'yedge']
        ],
        centers: [
            [0, -1, 0, 'center'], [-1, 0, 0, 'center'], [1, 0, 0, 'center'],
            [0, 0, -1, 'center'], [0, 0, 1, 'center'], [0, 1, 0, 'center']
        ]
    }
    // Apply blockstates
    offsets.corners.concat(offsets.edges, offsets.centers).forEach(([dx, dy, dz, state]) => {
        scene.world.modifyBlock([
            chamberCenter[0] + dx,
            chamberCenter[1] + dy,
            chamberCenter[2] + dz
        ], (block) => block.with('wall_state', state), false)
    })
    // Air particles, centered roughly at [chamberCenter] + 0.5 (i.e. exact middle of the blocks instead of corners)
    for (let x = chamberCenter[0] + 1.625; x > chamberCenter[0] - 1; x -= 1.125) {
        for (let z = chamberCenter[2] + 1.625; z > chamberCenter[2] - 1; z -= 1.125) {
            scene.particles.simple(1, 'cloud', [
                x + Math.random() / 2,
                chamberCenter[1] + 1 + Math.random() / 2,
                z + Math.random() / 2
            ]).scale(1.5).motion([
                (x - (chamberCenter[0] + 0.5)) / 7.5 + (-0.05 + Math.random() / 5),
                0.5,
                (z - (chamberCenter[2] + 0.5)) / 7.5 + (-0.05 + Math.random() / 5)
            ]).gravity(0.25).lifetime(20)
        }
    }
}
/**
 * Resets all blockstates of a 3x3x3 pressure chamber to simulate it becoming invalid
 * @param {Vec3} chamberCenter - Center block of the 3x3x3 chamber
 * @example unform([2, 2, 2])
 * @author Air
 */
function unform(chamberCenter) { }
function _unform(scene, chamberCenter) {
    for (let x = chamberCenter[0] + 1; x > chamberCenter[0] - 2; x--) {
        for (let y = chamberCenter[1] + 1; y > chamberCenter[1] - 2; y--) {
            for (let z = chamberCenter[2] + 1; z > chamberCenter[2] - 2; z--) {
                scene.world.modifyBlock([x, y, z], (block) => block.with('wall_state', 'none'), false)
            }
        }
    }
}


////////////////////////////////
// Utility stuff that should not be passed into the generator:

/**
 * Parses a set of blockstates and applies them to a block 
 * @param {Block} block - The block to modify
 * @param {Array<string> | Array<[string, string]> | Object<string, string>} blockstates - A collection of property-state pairs
 * @returns {Block} - The modified block with applied states
 */
function applyBlockStates(block, blockstates) {
    if (Array.isArray(blockstates)) {
        if (Array.isArray(blockstates[0])) { // [['key1', 'value1'], ['key2', 'value2']]
            blockstates.forEach(([property, value]) => {
                block = block.with(property, value)
            })
        } else { // ['key1', 'value1', 'key2', 'value2']
            for (let i = 0; i < blockstates.length; i += 2) {
                block = block.with(blockstates[i], blockstates[i + 1])
            }
        }
    } else if (typeof blockstates == 'object') { // { key1: 'value1', key2: 'value2' }
        for (let property in blockstates) {
            block = block.with(property, blockstates[property])
        }
    }
    return block
}