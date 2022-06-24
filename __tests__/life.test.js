
import { Life, lifeOnMercury } from '../src/life.js';

describe('Life', () => {

  test('should create a Life object with name, age, and life expectancy', () => {
    const earthLife = new Life("Mo",35, 135);
    expect(earthLife.name).toEqual("Mo")
    expect(earthLife.age).toEqual(35);
    expect(earthLife.lifeExpectancy).toEqual(135);
  });
});

test('should convert Earth age to age on mercury', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryAge();
  expect(earthLife.age).toEqual(145)
});

test('should convert Earth life expectancy to Mercury life expectancy', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryLifeExpectancy();
  expect(earthLife.lifeExpectancy).toEqual(562);
});