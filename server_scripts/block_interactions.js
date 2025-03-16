onEvent('block.right_click', event => {
    // mechanical belt dupe involving this specific wrench
    if (event.item.id == 'refinedstorage:wrench' && event.block.id == 'create:belt') {
        event.cancel()
    }
})