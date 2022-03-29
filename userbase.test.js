const User = require('./classes');
const UserBase = require('./userbase');

describe('Userbase', () => {
  it('should return an array of all users', () => {
    userbase = new UserBase;
    expect(userbase.getNames()).toEqual(['Uma', 'Josh', 'Ollie']);
  })

  it('should return an array of introductions for each user', () => {
    userbase = new UserBase;
    expect(userbase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  })
})