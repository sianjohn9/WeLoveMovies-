 function totalInStock(inventory){
  let counter = 0;
   for(let i = 0; i < inventory.length; i++){
    counter += inventory[i].inStock
   }
     return counter

 }