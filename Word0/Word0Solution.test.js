const word0 = require('./Word0Solution');

test('for the case of an array of a single string', () => {
  expect(word0(['single'])).toEqual({'single': 0});
});

test('for a case where the solution is correct', () => {
  expect(word0(['test', 'tests', 'testing'])).toEqual({'test': 0, 'tests': 0, 'testing': 0});
});

test('for another case where the solution is correct', () => {
  expect(word0(['test', 'tests', 'testing', 'testing', 'tests', 'test', 'tested']))
    .toEqual({'test': 0, 'tests': 0, 'testing': 0, 'tested': 0});
});

test('for a case where strings occur thrice in succession', () => {
  expect(word0(['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c'])).toEqual({'a': 0, 'b': 0, 'c': 0});
});

test('for a case where the given array is empty', () => {
  expect(word0([])).toEqual({});
});

test('for a case where only one re-occurring string is given', () => {
  expect(word0(['a', 'a', 'a', 'a', 'a', 'a'])).toEqual({'a': 0});
});

test('for a case where the given strings are special characters', () => {
  expect(word0(['?', '_', ' ', '#', '(', ')'])).toEqual({'?': 0, '_': 0, ' ': 0, '#': 0, '(': 0, ')': 0});
});

test('for a case where one re-occurrs 6 times and then another string', () => {
  expect(word0(['a', 'a', 'a', 'a', 'a', 'a', 'b'])).toEqual({'a': 0, 'b': 0});
});

test('for a case where there are more than 20 elements in the given array', () => {
  expect(word0(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])).toEqual({
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0
  });
});
