const searchCandies = require('./candies')

describe('Searching Candies', () => {
  it('should return Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  })

  it('should return Mars', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  })

  it('should return Skitties, Skittles, Starburst', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  })

  it('should return Skitties and Skittles', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  })

  it('should return successfully when passed a lowercase inpu', () => {
    expect(searchCandies('s', 4)).toEqual(['Skitties', 'Skittles']);
  })
})