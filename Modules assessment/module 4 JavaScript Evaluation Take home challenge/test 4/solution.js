function priceFilter(items, amount){
  let item = [];
  for(let i = 0; i < items.length; i++){ 
    if(items[i].price < amount){ 
      item.push(items[i]); 
    } 
  } 
  return item 

}