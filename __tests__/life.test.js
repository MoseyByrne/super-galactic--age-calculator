
import { Life} from '../src/life.js';

describe('Life', () => {

  test('should create a Life object with name, age, and life expectancy', () => {
    const earthLife = new Life("Mo",35, 135, );
    expect(earthLife.name).toEqual("Mo")
    expect(earthLife.age).toEqual(35);
    expect(earthLife.lifeExpectancy).toEqual(135);
    expect(earthLife.yearsLeft).toEqual(100);
  });
});

test('should convert Earth age to age on Mercury', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryAge();
  expect(earthLife.age).toEqual(145)
});

test('should convert Earth life expectancy to Mercury life expectancy', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryLifeExpect();
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

test('should convert Earth life expectancy to Mercury life expectancy', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryLifeExpect();
  expect(earthLife.lifeExpectancy).toEqual(562);
});

test('should minus mercuryAge from mercuryLifeExpectancy and return yearsLeftOnMercury', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.yearsLeftOnMercury();
  expect(earthLife.yearsLeft).toEqual(416);
});