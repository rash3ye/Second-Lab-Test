const withoutString = require('./withoutStringSolution');

test('The correctness of the function with a short string', () => {
  expect(withoutString('supernaturalandspiritual', 'al')).toBe('supernaturandspiritu');
});

test('for many occurrences of the remove parameter', () => {
  expect(withoutString('hello there hello mary hello ding-dong hello father hello ' +
    'mother', 'ello')).toBe('h there h mary h ding-dong h father h mother');
});

test('for binary numbers', () => {
  expect(withoutString('1101010010100101011100010101001010100101001010', '101'))
    .toBe('1010000011100001000100000');
});

test('for a single space', () => {
  expect(withoutString('i am glad to be here at the institute', ' '))
    .toBe('iamgladtobehereattheinstitute');
});

test('for special characters', () => {
  expect(withoutString('?¬!"£$%%¬!"££*&)((&^%£$%:@~>???>I%*^', ')('))
    .toBe('?¬!"£$%%¬!"££*&(&^%£$%:@~>???>I%*^', ')(');
});

test('for no occurrence of the remove string in the base', () => {
  expect(withoutString('please! please!! please!!! Is a virus a dangerous program?', 'snap'))
    .toBe('please! please!! please!!! Is a virus a dangerous program?');
});

test('for total reoccurrence of the remove in the base', () => {
  expect(withoutString('ooooooooooooooooooooooooooooooooo', 'ooo')).toBe('');
});

test('for total reoccurrence of the remove in the base with a trailing character', () => {
  expect(withoutString('oooooooooooooooooooooooooooooooooo', 'ooo')).toBe('o');
});