// Business Logic for Life
export class Life {
  constructor(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

// Business Logic for Mercury
  mercuryAge() { 
    this.age /= .24;
    this.age = Math.floor(this.age);
    let mercuryAge = this.age;
    return mercuryAge;
  }

  mercuryLifeExpectancy() {
    this.lifeExpectancy /= .24;
    this.lifeExpectancy = Math.floor(this.lifeExpectancy);
    const mercuryLifeExpectancy = this.lifeExpectancy;
    return mercuryLifeExpectancy;
  }

  yearsLeftOnMercury() {
    this.mercuryLifeExpectancy();
    this.mercuryAge(); 
    console.log(this.mercuryLifeExpectancy());
    console.log(this.mercuryAge());
    let yearsLeftOnMercury = this.mercuryLifeExpectancy;
    return yearsLeftOnMercury;
  }

  venusAge() { 
    this.age /= .62;
    this.age = Math.floor(this.age);
    let venusAge = this.age;
    return venusAge;
  }

  marsAge() { 
    this.age /= 1.88;
    this.age = Math.floor(this.age);
    let marsAge = this.age;
    return marsAge;
  }

  jupiterAge() { 
    this.age /= 11.86;
    this.age = Math.floor(this.age);
    let jupiterAge = this.age;
    return jupiterAge;
  }
}
