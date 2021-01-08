// IMPORT MODULES under test here:
import { getDifference, getDividend, getProduct, getSum } from '../utils.js'

const test = QUnit.test;

// getSum tests

test('it should return 8 when provided 5 and 3', (expect) => {
    const expected = 8;
    const actual = getSum(5, 3);
    expect.equal(actual, expected);
});

test('it should return -8 when provided -5 and -3', (expect) => {
    const expected = -8;
    const actual = getSum(-5, -3);
    expect.equal(actual, expected);
});

// getDifference tests

test('it should return 8 when provided 15 and 7', (expect) => {
    const expected = 8;
    const actual = getDifference(15, 7);
    expect.equal(actual, expected);
});

test('it should return -8 when provided -5 and 3', (expect) => {
    const expected = -8;
    const actual = getDifference(-5, 3);
    expect.equal(actual, expected);
});

// getDividend tests

test('it should return 8 when provided 120 and 15', (expect) => {
    const expected = 8;
    const actual = getDividend(120, 15);
    expect.equal(actual, expected);
});

test('it should return -8 when provided 120 and -15', (expect) => {
    const expected = -8;
    const actual = getDividend(120, -15);
    expect.equal(actual, expected);
});

// getProduct tests

test('it should return 8 when provide 2 and 4', (expect) => {
    const expected = 8;
    const actual = getProduct(2, 4);
    expect.equal(actual, expected);
});

test('it should return -8 when provided 32 and -0.25', (expect) => {
    const expected = -8;
    const actual = getProduct(32, -0.25);
    expect.equal(actual, expected);
});