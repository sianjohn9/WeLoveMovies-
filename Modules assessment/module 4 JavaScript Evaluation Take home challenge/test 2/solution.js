function mostExpensiveItemName(items) {
  let highestprice = 0;
  let name;
  console.log ( "items name", items);
  for(let i = 0; i < items.length; i++) {
  console.log ("array length", items.length)
    if(items[i].price > highestprice) {
    console.log("highest price", highestprice)
      highestprice = items[i].price;
      name = items[i].itemName;
    }
  }
  console.log("name of the items", name)
    return name;
}


  