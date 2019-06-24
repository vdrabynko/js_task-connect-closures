'use strict';

const connect = require('./connect');

const connected1 = connect({ x: 1, y: 2 });
const connected2 = connect({ x: 1, y: 2 });
const connected3 = connect();
const connected4 = connect();

test('Should work correctly in case of conflict', () => {
  expect(connected1({ z: 3, x: 10 }))
    .toStrictEqual({ x: 10, y: 2, z: 3 });
});

test('Should work correctly '
  + ' without extra parameters', () => {
  expect(connected2())
    .toStrictEqual({ x: 1, y: 2 });
});

test('Should work correctly without base parameters', () => {
  expect(connected3({ x: 1, y: 2, z: 3 }))
    .toStrictEqual({ x: 1, y: 2, z: 3 });
});

test('Should return undefined in the absence of both parameters', () => {
  expect(connected4())
    .toBe(undefined);
});
