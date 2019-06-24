'use strict';

const connect = require('./connect');

const baseParams = { x: 1, y: 2 };
const extraParams = { z: 3, x: 10 };

const connected1 = connect(baseParams);
const connected2 = connect(baseParams);
const connected3 = connect();
const connected4 = connect();

test('Should work correctly in case of conflict', () => {
  expect(connected1(extraParams))
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

test('Should return empty object in the absence of both parameters', () => {
  expect(connected4())
    .toStrictEqual({ });
});

test('The received objects should not be changed', () => {
  expect(baseParams)
    .toStrictEqual({ x: 1, y: 2 });
  expect(extraParams)
    .toStrictEqual({ z: 3, x: 10 });
});
