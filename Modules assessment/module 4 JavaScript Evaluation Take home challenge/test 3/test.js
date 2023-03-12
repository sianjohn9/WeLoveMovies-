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

describe("priceLookup", () => {
  it('should return the price of the item with the name "Effective Programming Habits" in the sample array', () => {
    expect(priceLookup(sampleCart, "Effective Programming Habits")).to.equal(13.99)
  })
  
  it('should return the price of the item with the name "Creation 3005" in the sample array', () => {
    expect(priceLookup(sampleCart, "Creation 3005")).to.equal(299.99)
  })
  
  it('should return the price of "Fabulous Algorithms" in a test cart', () => {
    expect(
      priceLookup(testCart1, "Fabulous Algorithms")
    ).to.equal(29.99)
  })
  
    it('should return the price of "Stapler" in another test cart', () => {
    expect(
      priceLookup(testCart2, "Stapler")
    ).to.equal(3.99)
  })

  it('should return undefined for items that cannot be found', () => {
    expect(priceLookup(sampleCart, "Not an item")).to.equal(undefined)
  })
  
  it('should return undefined when looking in an empty cart', () => {
    expect(priceLookup([], "Effective Programming Habits")).to.equal(undefined)
  })
    
  it("should return the price of the first item if two items match the name", () => {
    let duplicates = [
      {
        itemName: "Finding Your Center",
        type: "book",
        price: 15.00
      },
      {
        itemName: "Finding Your Center",
        type: "book",
        price: 1500.00
      }];
    expect(priceLookup(duplicates, "Finding Your Center")).to.equal(duplicates[0].price);
  })
})
