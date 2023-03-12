function priceLookup (items, name) {
  for (let i = 0; i < items.length; i++) {
    if (name === items[i].itemName) {
      return items[i].price;
    }
  }
console.log ( "the answer to the question is", items.price)
}