/**
 * Write a function named `additionalCapacity`
 */
 function additionalCapacity(campgrounds){
  let total = 0;
      for (let i=0 ; i < campgrounds.length ; i++){
        if (campgrounds[i].isReserved === false){
        total += campgrounds[i].partySize;
        }

      }
    return total;
}

// Do not make changes below this line
module.exports = additionalCapacity;
