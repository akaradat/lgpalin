const { manacher } = require('./manacher');

describe('manacher', () => {
  it('should return the longest palindromic substring', () => {
    const tests = [
      { input: 'a', output: 'a' },
      { input: 'ac', output: 'a' },
      { input: 'cbbd', output: 'bb' },
      { input: 'babad', output: 'bab' },
      { input: 'abababa', output: 'abababa' },
      { input: 'abaxabaxabb', output: 'baxabaxab' },
      { input: 'abaxabaxabybaxabyb', output: 'baxabybaxab' },
    ];

    tests.forEach((test) => {
      const expected = test.output;
      const actual = manacher(test.input);

      expect(actual).toEqual(expected);
    });
  });
});
