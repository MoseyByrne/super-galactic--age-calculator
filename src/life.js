// Business Logic for Life
export class Life {
  constructor(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }


  mercuryAge() { 
    this.age /= .24;
    this.age = Math.floor(this.age);
    let mercuryAge = this.age;
    return mercuryAge;
  }

  mercuryLifeExpectancy() {
    this.lifeExpectancy /= .24;
    this.lifeExpectancy = Math.floor(this.lifeExpectancy);
    let mercuryLifeExpectancy = this.lifeExpectancy;
    return mercuryLifeExpectancy;
  }

  venusAge() { 
    this.age /= .62;
    this.age = Math.floor(this.age);
    let venusAge = this.age;
    return venusAge;
  }
}
