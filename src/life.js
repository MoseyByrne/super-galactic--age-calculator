// Business Logic for Life
export class Life {
  constructor(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;

  }

  lifeOnMercury() {
    this.age /= .24;
    let mercuryAge = this.age;
    return (Math.floor(mercuryAge));
  }
}