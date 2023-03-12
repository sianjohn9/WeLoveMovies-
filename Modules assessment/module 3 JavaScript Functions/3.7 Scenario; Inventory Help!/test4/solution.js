function shouldWeOrderThisCandy(inventory, candy){
  for(let i = 0; i < inventory.length; i++){
    if(inventory[i].candy == candy){
      if(inventory[i].inStock < inventory[i].weeklyAverage){
        return true
      }
    }
   }
  return false
}