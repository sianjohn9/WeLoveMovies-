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

describe("priceFilter", () => {
  it('should return an array of all items with price less than 50 in the sample array', () => {
    expect(priceFilter(sampleCart, 50)).to.eql([{itemName: "Effective Programming Habits", type: "book", price: 13.99},{itemName: "Finding Your Center", type: "book", price: 15.00}])
  })
  
  it('return an array of the items with price less than 300 from a test cart', () => {
    expect(priceFilter(testCart1, 300)).to.have.deep.members([ { itemName: 'Effective Programming Habits',
    type: 'book',
    price: 18.99 },
  { itemName: 'Finding Your Center', type: 'book', price: 15 },
  { itemName: 'Fabulous Algorithms', type: 'book', price: 29.99 },
  { itemName: 'Another Item', type: 'clothes', price: 25 } ])
  })
  
  it('should return an array of all items with price less than 3 from another test cart', () => {
    expect(priceFilter(testCart2, 3)).to.eql([  {itemName: "Pencil Case", type: "supplies", price: 2.99 },
  { itemName: "Ballpoint Pen", type: "supplies", price: 2.20 },
  { itemName: "Eraser", type: "supplies", price: .99 }])
  })
})