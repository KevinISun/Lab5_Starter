// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('Valid phone numbers', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid emails', () => {
  expect(isEmail('whaevner@we.com')).toBe(true);
  expect(isEmail('owie@google.com')).toBe(true);
});

test('Valid strong passwords', () => {
  expect(isStrongPassword('a1b2c3d4')).toBe(true);
  expect(isStrongPassword('A1234abcd')).toBe(true);
});

test('Valid dates', () => {
  expect(isDate('12/31/2020')).toBe(true);
  expect(isDate('1/1/2021')).toBe(true);
});

test('Valid hex colors', () => {
  expect(isHexColor('#123abc')).toBe(true);
  expect(isHexColor('#123')).toBe(true);
});

