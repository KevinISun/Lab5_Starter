// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('Valid phone number 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('Valid phone number 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid email 1', () => {
  expect(isEmail('whaevner@we.com')).toBe(true);
});
test('Valid email 2', () => {
  expect(isEmail('owie@google.com')).toBe(true);
});

test('Valid strong password 1', () => {
  expect(isStrongPassword('a1b2c3d4')).toBe(true);
});
test('Valid strong password 2', () => {
  expect(isStrongPassword('A1234abcd')).toBe(true);
});

test('Valid date 1', () => {
  expect(isDate('12/31/2020')).toBe(true);
});
test('Valid date 2', () => {
  expect(isDate('1/1/2021')).toBe(true);
});

test('Valid hex colors 1', () => {
  expect(isHexColor('#123abc')).toBe(true);
});
test('Valid hex colors 2', () => {
expect(isHexColor('#123')).toBe(true);
});


