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

describe("candyOrderQuantity", () => {
  it("returns 400 for Twizzlers, since the number in stock is less than the weekly average and the weekly average is 200", () => {
    expect(candyOrderQuantity(inventory, "Twizzlers")).equal(400);
  })
  
  it("returns 200 for Sour Patch Kids, since the number in stock is less than the weekly average and the weekly average is 100", () => {
    expect(candyOrderQuantity(inventory, "Sour Patch Kids")).equal(200);
  })
  
  it("returns 0 for Now and Laters, since the number in stock is greater than the weekly average", () => {
    expect(candyOrderQuantity(inventory, "Now And Laters")).equal(0);
  })

  it("returns 0 for Milk Duds, since the number in stock is greater than the weekly average", () => {
    expect(candyOrderQuantity(inventory, "Milk Duds")).equal(0)
  })

  it("returns 0 for Broccoli Bites, since those aren't in the inventory", () => {
    expect(candyOrderQuantity(inventory, "Broccoli Bites")).equal(0)
  })
  
  it("returns 180 for Kit Kat, when given an alternate inventory", () => {
    expect(candyOrderQuantity(altInventory, "Kit Kat")).equal(180);
  })
  
  it("returns 0 for Twizzlers when given an empty array", () => {
    expect(candyOrderQuantity([], "Twizzlers")).equal(0);
  })
})