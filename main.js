const log = console.log
// variable list comes from user prompt (default list provided)
//split the list string into orders
//declare an empty object for our order quantities
//for of loop iterating over each drink in the order array
//if there is an entry for the current flavor:
//increase it by one
//if there is no entry for the current flavor:
//create it, and set it to one.
// create arrays for the keys(flavors) and quantities(quantity)
//(this is for demonstration, normally we would just use for..in to access key and value)
//loop over flavors, logging each one with it's quantity
//use an if block with a condition for plural: orders
//and singular: order
//return the table as well

const list = prompt("Please order several drinks at once in a list with no spaces. Each drink should be separated by a comma",
  "vanilla,strawberry,strawberry,mint,mint,mint,chocolate,chocolate,pistachio,chocolate,chocolate,mango,mango,chocolate")

const orderMaker = (drinkList) => {
  let orders = drinkList.split(",");
  const orderMap = {};
  for (drink of orders) {
    orderMap[drink] ? orderMap[drink]++ : orderMap[drink] = 1
  }
  let flavors = Object.keys(orderMap);
  let quantity = Object.values(orderMap)
  for (i = 0; i < flavors.length; i++) {
    if (quantity[i] > 1) {
      log(`You have ${quantity[i]} orders of ${flavors[i]}`)
    } else {
      log(`You have ${quantity[i]} order of ${flavors[i]}`)
    }
  }
  return orderMap
}

log(orderMaker(list))