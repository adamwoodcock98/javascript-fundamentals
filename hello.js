// const fizzBuzz = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'FizzBuzz'
//   } else if (num % 5 === 0) {
//     return 'Buzz'
//   } else if (num % 3 === 0) {
//     return 'Fizz'
//   }
//   return num
// }

// for (let i = 0; i <= 50; i++) {
//   console.log(`Fizzbuzz result for ${i} is ${fizzBuzz(i)}`);
// }

const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to: ${number}`;
}

const notify = (contactDetails, notificationType) => {
  return notificationType(contactDetails);
}

console.log(notify("hello@makers.tech.test", notifyByEmail));

console.log(notify("+1000000000", notifyByText));