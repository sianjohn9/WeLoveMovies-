/**
 * Write a function named `campgroundCapacity`
 */
 function campgroundCapacity(campgrounds) {
     let counter = 0;
     for (let i = 0 ; i < campgrounds.length ; i++) {
         counter += campgrounds[i].partySize;
     }          
     return counter;
 }

// Do not make changes below this line

module.exports = campgroundCapacity;
