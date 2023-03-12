// suducode = writing in your own words about  the steps you will work on.
//console.log
// talk out loud to yourself


function cartPrice(items){
  console.log(" items =", items)
  let subtotal =0
  for (let  i = 0; i < items.length ; i++){
    console.log(i);
    console.log("array length",items.length)
   console.log("items inside for", items)
    subtotal += items[i].price
    console.log(subtotal)
  }
  console.log("subtotal = ", subtotal)
  return subtotal
}