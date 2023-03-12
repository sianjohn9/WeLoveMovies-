/**
 * Write a function named `countByView`
 */
 function countByView(campgrounds, view){
  let counter = 0;
    for (let i=0 ; i<campgrounds.length ; i++){
      if (campgrounds[i].view === view){
        counter+=1;
      }
    }
      return counter;
  }

// Do not make changes below this line
module.exports = countByView;
