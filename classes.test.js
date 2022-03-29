const User = require('./classes');

describe('User', () => {
  it('should return the users name', () => {
    const user = new User('Adam');
    expect(user.getName()).toBe("Adam");
  })

  it('should return a greeting', () => {
    const user = new User('Adam');
    expect(user.getIntroduction()).toBe("Hi, my name is Adam")
  })
})