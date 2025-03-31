// Tiny helper script for 'kubejs/server_scripts/soap.js'
// Helps manage bodyhygiene's hardcoded soap interactions

onEvent('item.right_click', event => {
    if (/^bodyhygiene:.+_soap$/.test(event.item.id)) event.cancel()
})