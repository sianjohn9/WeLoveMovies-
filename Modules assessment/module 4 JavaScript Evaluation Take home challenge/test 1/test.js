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

describe("cartPrice", () => {
  it('should return the correct price for the sample cart', () => {
    expect(cartPrice(sampleCart)).to.equal(328.98)
  })
  
  it('should return the correct price for a test cart', () => {
    expect(cartPrice(testCart1)).to.equal(1388.96)
  })
  
  it('should return the correct price for a different test cart', () => {
    expect(cartPrice(testCart2)).to.equal(23.36)
  })
  
  it('should return the correct price (0) for an empty cart', () => {
    expect(cartPrice([])).to.equal(0)
  })
})