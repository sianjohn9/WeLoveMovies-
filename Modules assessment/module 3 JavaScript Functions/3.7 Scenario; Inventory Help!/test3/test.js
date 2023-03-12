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

let skittles = { candy: "Skittles",  inStock: 200,  weeklyAverage: 10 };
let worms =  { candy: "Gummy worms", inStock: 20, weeklyAverage: 10 };

describe("addCandyToInventory", () => {
  it("adds a new candy to the inventory", () => {
    let i = inventory.slice();
    let j = inventory.slice().concat(skittles)
    expect(addCandyToInventory(i, skittles)).eql(j);
  })
  
  it("adds a new candy to the empty array", () => {
      let i = [];
      let j = [].concat(skittles);
      expect(addCandyToInventory(i, skittles)).eql(j);
  })
  
  it("updates the array that was passed in", () => {
    let i = inventory.slice();
    let j = inventory.slice().concat(skittles)
    addCandyToInventory(i, skittles)
    expect(i).eql(j);
  })
  
  it("works when adding a differnt candy to a differnt inventory array", () => {
    let i = altInventory.slice();
    let j = altInventory.slice().concat(worms)
    expect(addCandyToInventory(i, worms)).eql(j);
  })
})

