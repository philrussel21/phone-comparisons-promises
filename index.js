const { phones } = require(`./phones`)
const last2YearCheck = (arr) => {
    return new Promise((resolve, reject) => {
        const validYears = arr.filter(({ year }) => (year >= 2018 && year <= 2020));
        validYears.length !== 0 ? resolve(validYears) : reject('Nothing found from the last two years!')
    })
}

const notAppleOrGoogle = (arr) => {
    return new Promise((resolve, reject) => {
        const validManufacturers = arr.filter(({ manufacturer }) => (manufacturer !== 'Google' && manufacturer !== 'Apple'))
        validManufacturers.length !== 0 ? resolve(validManufacturers) : reject('No phones from other manufacturers found')
    })
}

const afford = (arr) => {
    return new Promise((resolve, reject) => {
        const canAfford = arr.filter(({ cost }) => cost <= 500)
        canAfford.length !== 0 ? resolve(canAfford) : reject('Not enough money to purchase something today')
    })
}
const options = (arr) => {
    return console.log(arr.map(({ name }) => { return { "name": name } }))
}


last2YearCheck(phones)
    .then(notAppleOrGoogle)
    .then(afford)
    .then(options)
    .catch((err) => console.log('Well that ain\'t right.', err))

module.exports = {
    last2YearCheck, notAppleOrGoogle, afford, options
}
