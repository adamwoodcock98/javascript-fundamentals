const addToBatch = (arr, num) => {
  if (arr.length >= 5) {
    return arr;
  } else {
    return arr.concat(num);
  }
}

module.exports = addToBatch;

const checkLength = (numberString) => {
  return numberString.length <= 10;
}

const filterLongNumbers = (numberArray) => {
  return numberArray.filter(checkLength);
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'
];

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(item => {
    const name = item.name;
    const discount = item.discount;
    return `Hi ${name}! ${discount}% off our best candies for you today`;
  });
}

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

console.log(generateMessages(namesAndDiscounts))