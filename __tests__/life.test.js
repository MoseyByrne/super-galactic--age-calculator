
import { Life, mercuryLife } from '../src/life.js';

describe('Life', () => {

  test('should create a Life object with name, age, and life expectancy', () => {
    const earthLife = new Life("Mo",35, 135);
    expect(earthLife.name).toEqual("Mo")
    expect(earthLife.age).toEqual(35);
    expect(earthLife.lifeExpectancy).toEqual(135);
  });
});

test('should return earthLife age as mercuryLife age', () => {
  const earthLife = new Life("Mo",35, 135);
  earthLife.mercuryLife();
  expect(mercuryLife.age).toEqual(145)
});