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

test('Valid phone number 3', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Valid phone number 4', () => {
  expect(isPhoneNumber('123456--7890')).toBe(false);
});

test('Valid email 1', () => {
  expect(isEmail('whaevner@we.com')).toBe(true);
});
test('Valid email 2', () => {
  expect(isEmail('owie@google.com')).toBe(true);
});
test('Valid email 3', () => {
  expect(isEmail('hello')).toBe(false);
});
test('Valid email 4', () => {
  expect(isEmail('hello@@gmail.com')).toBe(false);
});

test('Valid strong password 1', () => {
  expect(isStrongPassword('a1b2c3d4')).toBe(true);
});
test('Valid strong password 2', () => {
  expect(isStrongPassword('A1234abcd')).toBe(true);
});
test('Valid strong password 3', () => {
  expect(isStrongPassword('1')).toBe(false);
});
test('Valid strong password 4', () => {
  expect(isStrongPassword('1234567890123456')).toBe(false);
});

test('Valid date 1', () => {
  expect(isDate('12/31/2020')).toBe(true);
});
test('Valid date 2', () => {
  expect(isDate('1/1/2021')).toBe(true);
});
test('Valid date 3', () => {
  expect(isDate('123456')).toBe(false);
});
test('Valid date 4', () => {
  expect(isDate('1/1/20212')).toBe(false);
});


test('Valid hex colors 1', () => {
  expect(isHexColor('#123abc')).toBe(true);
});
test('Valid hex colors 2', () => {
expect(isHexColor('#123')).toBe(true);
});
test('Valid hex colors 3', () => {
  expect(isHexColor('23abc')).toBe(false);
});
test('Valid hex colors 4', () => {
  expect(isHexColor('#123ab')).toBe(false);
});


