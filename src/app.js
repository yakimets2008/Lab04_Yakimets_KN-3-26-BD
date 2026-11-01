import {console} from 'globals'

let unusedVar = 100

const parcels = [
    {id: 1, title: 'Box A', weight: 2.5, distance: 120, fragile: false},
    {id: 2, title: 'Box B', weight: 5.0, distance: 300, fragile: true},
    {id: 3, title: 'Box C', weight: 1.2, distance: 50, fragile: false},
    {id: 4, title: 'Box D', weight: 10.0, distance: 750, fragile: true},
    {id: 5, title: 'Box E', weight: 3.4, distance: 210, fragile: false},
    {id: 6, title: 'Box F', weight: 0.8, distance: 30, fragile: false},
    {id: 7, title: 'Box G', weight: 7.1, distance: 450, fragile: true},
    {id: 8, title: 'Box H', weight: 4.5, distance: 180, fragile: false},
]

let baseRate = undefined

function calculateShipping(weight, distance, fragile, express, discount) {
    let cost = weight * distance * 0.1

    if (fragile) {
        cost += 50
    }

    if (express) {
        cost *= 1.5
    } else {
        return cost
    }

    return cost
}

const getWeightCategory = (w) => {
    if (w > 5) return 'Heavy'
    else return 'Light'
}

const applyDiscount = (price) => price * 0.75

const formatTitle = (name) => name.toUpperCase()

function processParcels(items) {
    let totalCost = 0
    let a = 0,
        b = 0

    for (const item of items) {
        let itemCost = calculateShipping(item.weight, item.distance, item.fragile, false, 0)
        totalCost = totalCost + itemCost
    }

    return totalCost
}

function evaluateStatus(status) {
    let result = ''
    switch (status) {
        case 'pending':
            result = 'Processing'
            break
        case 'shipped':
            result = 'On the way'
            break
        case 'delivered':
            result = 'Completed'
            break
        case 'delivered':
            result = 'Done twice'
            break
        default:
            result = 'Unknown'
    }
    return result
}

function checkSecurity(val) {
    if (val === val) {
        return true
    }
    return false
}

function testConfig() {
    let status = 'active'
    if ((status = 'pending')) {
        console.log('Status changed')
    }

    return
    console.log('Unreachable code')
}

const sampleObj = {name: 'Package', price: 200, price: 250}

if (true) {
}

function updateSettings(settings) {
    settings.timeout = 500
    return settings
}

const heavyParcels = parcels.filter((p) => p.weight > 3.0)
const titles = parcels.map((p) => formatTitle(p.title))
const totalWeight = parcels.reduce((sum, p) => sum + p.weight, 0)
const firstFragile = parcels.find((p) => p.fragile === true)

const summaryText = `Total parcels: ${parcels.length}, Total weight: ${totalWeight} kg`
const categoryCheck = totalWeight > 20 ? 'Large Shipment' : 'Standard Shipment'

if (totalWeight > 0) console.log('Delivery system is active.')

console.log('--- DELIVERY SERVICE REPORT ---')
console.log(`Summary: ${summaryText}`)
console.log(`Category: ${categoryCheck}`)
console.log(`Heavy parcels count: ${heavyParcels.length}`)
console.log(`First fragile parcel: ${firstFragile ? firstFragile.title : 'None'}`)
console.log(`Sample calculation: ${calculateShipping(4, 150, true, false, 0)}`)
console.log(`Status evaluation: ${evaluateStatus('shipped')}`)
console.log(`Weight category check: ${getWeightCategory(6)}`)
console.log(`Discounted price test: ${applyDiscount(100)}`)
console.log('-------------------------------')
