function printNames (names) {
names.forEach(name => console.log(name));
}

function logTreeType (trees) {
  trees.forEach(type => console.log(type.type));
}

function totalPoints(points) {
  // your solution here
  let total = 0 
  points.forEach(score => {
    total += score;
  });
return total;
}

function buildSentence(words) {
   let sentence = "";
    words.forEach((word) => {
      sentence += `${word} `;
    });
    return sentence;
}


function logPercentages(decimals) {
    decimals.forEach((decimal) => {
      console.log(`${decimal * 100}%`);
    });
}


module.exports = {
  printNames,
  logTreeType,
  totalPoints,
  buildSentence,
  logPercentages,
};
