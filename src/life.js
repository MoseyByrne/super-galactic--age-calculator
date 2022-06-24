// Business Logic for Life
export class Life {
  constructor(name, age, lifeExpectancy) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsLeft = lifeExpectancy - age;
  }

// Business Logic for Mercury
  mercuryAge() { 
    this.age /= .24;
    this.age = Math.floor(this.age);
    let mercuryAge = this.age;
    return mercuryAge;
  }
  
  yearsLeftOnMercury() {
    this.yearsLeft /= .24;
    this.yearsLeft = Math.floor(this.yearsLeft);
    let yearsLeftOnMercury = this.yearsLeft;
    return yearsLeftOnMercury;
  }

// Business Logic for Venus
  venusAge() { 
    this.age /= .62;
    this.age = Math.floor(this.age);
    let venusAge = this.age;
    return venusAge;
  }

  yearsLeftOnVenus() {
    this.yearsLeft /= .62;
    this.yearsLeft = Math.floor(this.yearsLeft);
    let yearsLeftOnVenus = this.yearsLeft;
    return yearsLeftOnVenus;
  }

// Business Logic for Mars
  marsAge() { 
    this.age /= 1.88;
    this.age = Math.floor(this.age);
    let marsAge = this.age;
    return marsAge;
  }

  yearsLeftOnMars() {
    this.yearsLeft /= 1.88;
    this.yearsLeft = Math.floor(this.yearsLeft);
    let yearsLeftOnMars = this.yearsLeft;
    return yearsLeftOnMars;
  }

// Business Logic for Jupiter
  jupiterAge() { 
    this.age /= 11.86;
    this.age = Math.floor(this.age);
    let jupiterAge = this.age;
    return jupiterAge;
  }

  yearsLeftOnJupiter() {
    this.yearsLeft /= 11.86;
    this.yearsLeft = Math.floor(this.yearsLeft);
    let yearsLeftOnJupiter = this.yearsLeft;
    return yearsLeftOnJupiter;
  }
}
