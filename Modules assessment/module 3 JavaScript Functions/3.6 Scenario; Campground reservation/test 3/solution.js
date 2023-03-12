/**
 * Write a function named `availableCampsites`
 */
function availableCampsites(campgrounds){
    let total = [];
     for (let i = 0; i < campgrounds.length; i++){
         if(campgrounds[i].isReserved === false){
            total.push(campgrounds[i]);
         }
     }
return total;
}
// Do not make changes below this line
module.exports = availableCampsites;
