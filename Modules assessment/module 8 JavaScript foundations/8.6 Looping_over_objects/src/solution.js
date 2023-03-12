/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

let cart = {
  "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
  "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 },
};

// The calculateCartTotal function will take in the cart and return a total price, in cents, of everything inside of it.
function calculateCartTotal(cart) {

  let grandTotal = 0;
      for (const prop in cart) {
         let quantity = Object.values(cart[prop])[0];
         let price = Object.values(cart[prop])[1];
         grandTotal += quantity * price;
      }
  return grandTotal;
}

// The printCartInventory will take in the cart and return a string, joined by \n, of the quantity and name of each item.
function printCartInventory(cart) {
  let inventory = "";
      for (const prop in cart) {
         inventory += `${Object.values(cart[prop])[0]}x${prop}\n`
      }
  return inventory;
  
}

console.log(calculateCartTotal(cart));
console.log(printCartInventory(cart));

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
