/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter(park => park.location.state === state);
}

function getWishlistParksForUser(parks, users, username) {
  return parks.filter(park => users[username].wishlist.includes(park.id));
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  return getParksByState(parks, state).every((park) =>
    users[username].visited.includes(park.id)
  );
}

function userHasVisitedParkOnWishlist(users, usernameOne, usernameTwo) {
  const user1 = users[usernameOne].visited;
  const user2 = users[usernameTwo].wishlist;
  return user1.some((id) => user2.includes(id));
}

function getUsersForUserWishlist(users, username) {
  const result = [];
  const wishlist = users[username].wishlist.sort();
  for (let key in users) {
    if (wishlist.some((id) => users[key].visited.includes(id))) {
      result.push(key);
      }
  }
  return result;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};