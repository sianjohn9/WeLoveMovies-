const {expect} = require('chai')

const sampleCart = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
]

const testCart1 = [
  { itemName: "Effective Programming Habits", type: "book", price: 18.99},
  { itemName: "Creation 3005", type: "computer",price: 399.99},
  { itemName: "Orangebook Pro", type: "computer",price: 899.99},
  { itemName: "Finding Your Center", type: "book", price: 15.00},
  { itemName: "Fabulous Algorithms", type: "book",price: 29.99},
  { itemName: "Another Item", type: "clothes",price: 25.00}
]

const testCart2 = [
  {itemName: "Pencil Case", type: "supplies", price: 2.99 },
  { itemName: "Spiral Notebook", type: "supplies", price: 4.99 },
  { itemName: "Pack of 10 Pencils", type: "supplies", price: 8.20 },
  { itemName: "Ballpoint Pen", type: "supplies", price: 2.20 },
  { itemName: "Eraser", type: "supplies", price: .99 },
  { itemName: "Stapler", type: "supplies", price: 3.99 }
]

describe("mostExpensiveItemName", () => {
  it('should return the name of the most expensive item in the sample cart', () => {
    expect(mostExpensiveItemName(sampleCart)).to.equal("Creation 3005")
  })
  
  it('should return the name of the most expensive item in a test cart', () => {
    expect(mostExpensiveItemName(testCart1)).to.equal("Orangebook Pro")
  })

  it('should return the name of the most expensive item in another test cart', () => {
    expect(mostExpensiveItemName(testCart2)).to.equal("Pack of 10 Pencils")
  })
  
  it('should return "undefined" for an empty cart', () => {
    expect(mostExpensiveItemName([])).to.equal(undefined)
  })
})
