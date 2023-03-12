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

describe("allCandyOrders", () => {
  it("returns an object with the right values for the inventory array", () => {
    expect(allCandyOrders(inventory)).eql(
      {
        "Twizzlers": 400,
        "Sour Patch Kids": 200,
        "Milk Duds": 0,
        "Now and Laters": 0
      }
    );
  });
  
  it("returns an empty object for an empty array", () => {
    expect(allCandyOrders([])).eql({});
  })
  
  it("returns an object with the right values for an alternative inventory", () => {
    let correct = {
      "Twizzlers": 400,
      "Sour Patch Kids": 200,
      "Milk Duds": 0,
       "Now and Laters": 0,
      "Skittles": 160,
      "Gummy worms": 0,
      "M&Ms": 0,
      "Starburst": 0,
      "Kit Kat": 180      
    }
    let results = allCandyOrders(altInventory);
    Object.keys(correct).forEach(candy => {
      expect(results[candy]).equal(correct[candy])
    })
    expect(results).eql(correct)
  })
})

