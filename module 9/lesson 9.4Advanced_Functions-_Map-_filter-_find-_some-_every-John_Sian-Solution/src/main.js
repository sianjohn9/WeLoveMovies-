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

function findParkByName(parks, name) {
  return parks.find((park) => park.name === name)
}
function allParksAboveCertainSize(parks, minSize) {
  return parks.every((park) => park.areaInSquareKm > minSize)
}
function getBigParkNames(parks, minSize) {
  return parks.filter((park) => park.areaInSquareKm > minSize).map(park => park.name);
}
function doesStateHaveOneBigPark(parks, minSize, state) {
   return parks.filter(park => park.areaInSquareKm > minSize).some(park => park.location.state === state)
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};

