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

const generateMessages = (names) => {
  return names.map(addNameToMessage);
}

const addNameToMessage = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
}

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];