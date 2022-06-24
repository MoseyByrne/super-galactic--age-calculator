
import { Life} from '../src/life.js';

describe('Life', () => {

  test('should create a Life object with name, age, and life expectancy', () => {
    const earthLife = new Life("Mo",35, 135);
    expect(earthLife.name).toEqual("Mo")
    expect(earthLife.age).toEqual(35);
    expect(earthLife.lifeExpectancy).toEqual(135);
  });
});

test('should convert Earth age to age on Mercury', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryAge();
  expect(earthLife.age).toEqual(145)
});

test('should convert Earth life expectancy to Mercury life expectancy', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryLifeExpectancy();
  expect(earthLife.lifeExpectancy).toEqual(562);
});

test('should convert Earth age to age on Venus', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.venusAge();
  expect(earthLife.age).toEqual(56)
});

test('should convert Earth age to age on Mars', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.marsAge();
  expect(earthLife.age).toEqual(18)
});

test('should convert Earth age to age on Jupiter', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.jupiterAge();
  expect(earthLife.age).toEqual(2)
});