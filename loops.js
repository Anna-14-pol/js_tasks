//for

for (let i = 10; i <= 30; i += 2) {
  console.log(i);
}

const numbers = [3, 6, 23, 4, 8, 34, 345, 76];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//for of - can handle emoji, also used for promises
const surname = "Anna Muszka";

for (const letter of surname) {
  console.log(letter);
}

//for in - looping over keys
for (const number in numbers) {
  console.log(number);
}

const person = {
  name: "Anna",
  age: "233",
  cool: true,
};

for (const prop in person) {
  console.log(prop);
}

//prototype

const baseHumanStats = {
  feet: 2,
  arms: 2,
  head: 1,
  cool: false,
};

function human(a) {
  this.a = a;
}

human.prototype = baseHumanStats;

const muszka = new human(person);

//all from muszka
console.log(Object.entries(muszka));

//all from prototype
for (const prop in muszka) {
  console.log(prop);
}

//while

let cool = true;
let i = 1;
while (cool === true) {
  console.log("whoa!");
  i++;
  if (i > 100) {
    cool = false;
  }
}
