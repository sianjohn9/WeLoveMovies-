/*
  Diego wants to show three types of merchandise on the shopping page. 
  
  The first item is a Walnut Guitar Mount priced at 62.00. Use a variable named `mount` to represent this item.
  
  The second item is a Wooden Guitar Pick Box priced at 8.50. Use  a variable named `pick` to represent this item.
  
  The third item is a Mahogany Guitar Stand priced at 149.99. Use a variable named `stand` to represent this item.
  
  Each item should be an object with two properties. The first property should have the key `itemName`. The second property should have the key `price`. 
*/

let mount = { 
   itemName :"Walnut Guitar Mount",
   price: 62.00, 
      }

let pick = { 
       itemName : "Wooden Guitar Pick Box",
       price: 8.50,
     }

let stand = {
       itemName :"Mahogany Guitar Stand",
       price : 149.99,
}


//////////////////////////////////////////////////////
// Do not change anything below here.
//////////////////////////////////////////////////////
run(mount, pick, stand);
