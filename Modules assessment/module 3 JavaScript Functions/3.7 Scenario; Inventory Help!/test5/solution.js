  function candyOrderQuantity(inventory, candy){
    let counter = 0;
      for(let i = 0; i < inventory.length; i++){
        if(inventory[i].candy == candy){
          if(inventory[i].inStock < inventory[i].weeklyAverage){
           counter += inventory[i].weeklyAverage *2
            return counter
            }
         }
        } 
          return 0
          
  }