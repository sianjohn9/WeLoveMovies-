const expect = require("chai").expect;

let inventory = [
  {
    "candy": "Twizzlers",
    "inStock": 180,
    "weeklyAverage": 200
  },
  {
    "candy": "Sour Patch Kids",
    "inStock": 90,
    "weeklyAverage": 100
  },
  {
    "candy": "Milk Duds",
    "inStock": 300,
    "weeklyAverage": 170
  },
  {
    "candy": "Now and Laters",
    "inStock": 150,
    "weeklyAverage": 40
  }
]

let altInventory = [
  { candy: "Twizzlers", inStock: 180, weeklyAverage: 200 },
  { candy: "Sour Patch Kids", inStock: 90, weeklyAverage: 100 },
  { candy: "Milk Duds", inStock: 300, weeklyAverage: 170 },
  { candy: "Now and Laters", inStock: 150, weeklyAverage: 40 },
  { candy: "Skittles", inStock: 70, weeklyAverage: 80 },
  { candy: "Gummy worms", inStock: 20, weeklyAverage: 10 },
  { candy: "M&Ms", inStock: 300, weeklyAverage: 280 },
  { candy: "Starburst", inStock: 100, weeklyAverage: 40 },
  { candy: "Kit Kat", inStock: 20, weeklyAverage: 90 }
]

describe("shouldWeOrderThisCandy", () => {
  it("returns true for Twizzlers, since inStock is less than weeklyAverage", () => {
    expect(shouldWeOrderThisCandy(inventory, "Twizzlers")).equal(true)
  })
  
  it("returns true for Sour Patch Kids, since inStock is less than weeklyAverage", () => {
    expect(shouldWeOrderThisCandy(inventory, "Sour Patch Kids")).equal(true)
  })

  it("returns false for Milk Duds, since inStock is more than weeklyAverage", () => {
    expect(shouldWeOrderThisCandy(inventory, "Milk Duds")).equal(false)
  })

  it("returns false for Now and Laters, since inStock is more than weeklyAverage", () => {
    expect(shouldWeOrderThisCandy(inventory, "Now and Laters")).equal(false)
  })

  it("when inventory is an empty array, returns false for Twizzlers, since there's no candy in the array", () => {
    expect(shouldWeOrderThisCandy([], "Twizzlers")).equal(false)
  })
  
  it("returns false for Broccoli Bites, since no candy with that name is in the inventory", () => {
    expect(shouldWeOrderThisCandy(inventory, "Broccoli Bites")).equal(false)
  })
  
  it("returns true for Kit Kat when a different inventory is passed in, since inStock is less than weeklyAverage", () => {
    expect(shouldWeOrderThisCandy(altInventory, "Kit Kat")).equal(true)    
  })
})

