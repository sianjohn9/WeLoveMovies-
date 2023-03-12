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

describe("totalInStock", () => {
  it("returns the total of the inStock property for all of the candies in the inventory array", () => {
    expect(totalInStock(inventory)).equal(720);
  })
  
  it("returns zero for the empty array", () => {
    expect(totalInStock([])).equal(0);
  })
  
  it("returns the total of the inStock values for a longer inventory array", () => {
    expect(totalInStock(altInventory)).equal(1230);
  })
})

