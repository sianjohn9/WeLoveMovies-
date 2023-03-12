/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  return parks.reduce((total, Km) => {
     return total + Km.areaInSquareKm;
  }, 0);

}

function parkNameAndState(parks) {
 return parks.reduce((correct, park) => {
    return {...correct, [park.name]: park.location.state};
  },{});
}

function parkByState(parks) {
  return parks.reduce((match, park) => {
      let state = park.location.state;
      if (match[state] == null) {
         match[state] = [];
      } 
      match[state].push(park);
      return match;
   }, {});
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
