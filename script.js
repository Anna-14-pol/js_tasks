let text = "HelloWorld!";
let result = text.toString();

document.getElementById("demo").innerHTML = result;

//reduce//

orderTotals = [5, 10, 20, 30, 40, 50];

function tallyNumb(accumulator, currentValue) {
  console.log(`${accumulator}`);
  console.log(`${currentValue}`);
  console.log("--------------");
  return accumulator + currentValue;
}

const addNumbers = orderTotals.reduce(tallyNumb, 0);

console.log(addNumbers);

//cwiczenia//

const inventory = [
  { type: "shirt", price: "376" },
  { type: "socks", price: "366" },
  { type: "shirt", price: "336" },
  { type: "shirt", price: "136" },
  { type: "pants", price: "366" },
  { type: "shirt", price: "266" },
  { type: "socks", price: "369" },
  { type: "pants", price: "566" },
  { type: "pants", price: "567" },
];

function inventoryReducer(total, item) {
  console.log(`${item.type}`);

  total[item.type] = total[item.type] + 1 || 1;
  //   total[item.type] ? total[item.type] = total[item.type] + 1 : (total[item.type] = 1);
  return total;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalInvPrice = inventory.reduce((acc, item) => acc + item.price * 1, 0);
console.log(totalInvPrice);

//cwiczenia kolejne :) //
