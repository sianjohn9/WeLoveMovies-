function sortWords(words) {
  const result = words.sort();
  return result
}
function sortNumbers(numbers) {
  const result = numbers.sort((a, b) => a - b);
  return result;
}
function largestFirst(numbers) {
  const result = numbers.sort((a, b) => b - a);
  return result;
}
function sortFlowersByZone(flowers) {
  const result = flowers.sort((flowerA, flowerB) => flowerA.zone - flowerB.zone);
  return result;
}
function sortByLength(strings) {
  const result = strings.sort((stringA, stringB) => stringA.length - stringB.length);
  return result;
}
module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
}