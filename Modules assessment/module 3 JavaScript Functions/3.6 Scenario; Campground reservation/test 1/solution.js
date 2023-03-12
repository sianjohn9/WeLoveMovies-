/**
 * Write a function called `campsiteCount`
 * */

function campsiteCount(campgrounds){
let counter = 0;
for(let i = 0; i < campgrounds.length; i++){
counter += 1;
}
return counter
}

// Do not make changes below this line
module.exports = campsiteCount;
