// const addToBatch = (arr, num) => {
//   if (arr.length >= 5) {
//     return arr;
//   } else {
//     return arr.concat(num);
//   }
// }

// module.exports = addToBatch;

// const checkLength = (numberString) => {
//   return numberString.length <= 10;
// }

// const filterLongNumbers = (numberArray) => {
//   return numberArray.filter(checkLength);
// }

// const numbers = [
//   '1763687364',
//   '4763687363',
//   '7867867862',
//   'aaaaaaaabbbbbbbcccccdddddddd'
// ];

// const generateMessages = (namesAndDiscounts) => {
//   return namesAndDiscounts.map(item => {
//     const name = item.name;
//     const discount = item.discount;
//     return `Hi ${name}! ${discount}% off our best candies for you today`;
//   });
// }

// const namesAndDiscounts = [
//   { name: 'Anna', discount: 50 },
//   { name: 'Laura', discount: 40 },
//   { name: 'Josh', discount: 30 },
//   { name: 'Min', discount: 50 },
//   { name: 'Karla',discount:  6 }
// ];

// console.log(generateMessages(namesAndDiscounts))

const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (str, cost) => {
  return candies
    .filter(item => item.price <= cost)
    .filter(item => item.name.toLowerCase().startsWith(str.toLowerCase()))
    .map(item => item.name);
}

const checkPrice = (maxPrice) => {
  return 
}

module.exports = searchCandies;


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  return number % 2 == 0;
}

const evenNumbers = numbers.filter(isEvenNumber);

console.log(evenNumbers)