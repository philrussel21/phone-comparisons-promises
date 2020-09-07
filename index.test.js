const {options, last2YearCheck, notAppleOrGoogle, afford} = require('./index')

describe(`Type Checking`, () => {
    it(`should return an Array`, () => {
        expect(Array.isArray(last2YearCheck)).toBe(true)
        expect(Array.isArray(afford)).toBe(true)
        expect(Array.isArray(notAppleOrGoogle)).toBe(true)
        expect(Array.isArray(options)).toBe(true)
    })
})

describe(`Manufactured items check from the last 2 years`, () => {
    const years = [{year: 2020}, {year: 2020}, {year: 2019}, {year: 2018}, {year: 2022} , {year: 2010}]
    const years2 = [{year: 2022}, {year: 2015}, {year: 2015}, {year: 2010}, {year: 2021}]
    const expected = [{year: 2020}, {year: 2020}, {year: 2019}, {year: 2018}]
    const err = "nothing found from the last 2 years"
    
    it('should only return phones from 2018-20', () => {
        expect(last2YearCheck(years)).toEqual(expected)
    })
    it(`should throw when no valid items found: "nothing found from the last 2 years"`, () => {
        expect(last2YearCheck(years2)).toThrow(err)
    })
})

describe(`Check if phones manufactured by Apple or Google`, () => {
    const manufacturers = [{manufacturer: "Xiaomi"}, {manufacturer: "Samsung"}, {manufacturer: "OnePlus"}, {manufacturer: "Google"}, {manufacturer: "Apple"}, {manufacturer: "Motorola"} ]
    const manufacturers2 = [{manufacturer: "Google"}, {manufacturer: "Apple"}]
    const expected = [{manufacturer: "Xiaomi"}, {manufacturer: "Samsung"}, {manufacturer: "OnePlus"}, {manufacturer: "Motorola"} ]
    const err = "No phones from other manufacturers found"
    it(`Google and Apple should not be included in the returned value`, () => {
        expect(notAppleOrGoogle(manufacturers)).toEqual(expected)
    })
    it(`Should result in the function throwing if only Google or Apple: "No phones from other manufacturers found"`, () =>{
        expect(notAppleOrGoogle(manufacturers2)).toThrow(err)
    })
})

describe(`Available money check`, () => {
    const wallet = 500
    const costs = [{cost: 898.00}, {cost: 269.99}, {cost: 279.00}, {cost: 467.33}, {cost: 625.00}, {cost: 344.04}, {cost: 150.00}]
    const expected = [{cost: 269.99}, {cost: 279.00}, {cost: 467.33}, {cost: 344.04}, {cost: 150.00}]
    const err = "Not enough money to purchase something today"

    it(`items > 500.00 should be removed`, () => {
        expect(afford(wallet, costs)).toEqual(expected)
    })

    it(`The function should throw when everything too much: "Not enough money to purchase something today"`)
        expect(afford(50.00, costs)).toThrow(err)
})

describe(`The final array of available phones`, () => {
    const expected = [{"name": "Galaxy A50"}, {"name": "Galaxy M51"},{"name": "Pixel 3a"}]

    it(`should return an array of ojects with everything non valid filtered out`, () => {
        expect(options).toEqual(expected)
    })
})


