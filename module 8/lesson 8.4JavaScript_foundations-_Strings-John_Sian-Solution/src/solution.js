/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/
function listAllItems(products) {
  
  if(products.length === 0){
      return `There are no items for sale.`;
  }
  if(products.length === 1){
      return `There is 1 item for sale: ${products[0].name}.`;
  }
  if(products.length === 2){
     return `There are ${products.length} items for sale: ${products[0].name} and ${products[1].name}.`;
  }
  let str = [];
  for(let i = 0; i < products.length; i++){
    str.push(products[i].name);
  } 
  return `There are ${products.length} items for sale: ${str.join(', ')}.`;
} // 

module.exports = {
  listAllItems,
};