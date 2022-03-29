const { it, expect } = require("@jest/globals");
const fizzBuzz = require('./fizzbuzz.js');

describe('fizzbuzz', () => {
  it('should return Fizz if the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
  })

  it('should return Buzz if the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  })

  it('should return FizzBuzz if the number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  })

  it('should return the number if not Fizz, Buzz or FizzBuzz', () => {
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(11)).toBe(11)
  })
})