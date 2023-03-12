/*
  Diego needs you to get the cart totals working. Complete the following:
  
  1. Loop through all the items in the cart and add up the `price` for each item, storing the result in `subtotal`.
  2. Set the `total` variable equal to the `subtotal` plus the `shipping` cost.
*/

let cart = [
  {
    itemName: "Walnut Guitar Mount",
    price: 62.0,
  },
  {
    itemName: "Wooden Guitar Pick Box",
    price: 8.5,
  },
  {
    itemName: "Mahogany Guitar Stand",
    price: 149.99,
  },
];

let subtotal = 0;
let shipping = 12.99;
let total = 0;
for (let i = 0; i < cart.length; i++) {
  subtotal += cart[i].price;
}

total = subtotal + shipping;
//////////////////////////////////////////////////////
// Do not change anything above here.
//////////////////////////////////////////////////////
// Write your solution here!








//////////////////////////////////////////////////////
// Do not change anything below here.
//////////////////////////////////////////////////////
run(subtotal, shipping, total);
