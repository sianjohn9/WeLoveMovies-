/**
 * Write a function named `findMyCampsites`
 */
   function findMyCampsites(campgrounds, view, inputPartySize){
    let campsites = [];
      for (let i=0;i<campgrounds.length;i++){
        if (campgrounds[i].isReserved === false && campgrounds[i].view === view && campgrounds[i].partySize >= inputPartySize){
          campsites.push(campgrounds[i].number)
          }
        }
          if (campsites.length === 0){
return 'Sorry, no campsites with that view are available to host your party'
          }
    return campsites;
  }

// Do not make changes below this line
module.exports = findMyCampsites;
