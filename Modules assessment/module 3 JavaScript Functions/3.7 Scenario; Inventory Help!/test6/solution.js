function allCandyOrders  (inventory){
    let counter = {};  
  for (let i=0; i<inventory.length; i++) { 
if(inventory[i].inStock < inventory[i].weeklyAverage){
counter[inventory[i].candy] = inventory[i].weeklyAverage * 2;
}
else{
counter[inventory[i].candy] = 0;
}
}
return counter
}