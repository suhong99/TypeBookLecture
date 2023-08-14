function sum2(a: number, b: number) {
  return a + b;
}

//console.log(sum(10, 20));

class Person {
  name: string;
  skill: string;

  constructor(name: string, skill: string) {
    this.name = name;
    this.skill = skill;
  }
}

var capt = new Person('캡틴', '방패던지기');
console.log(capt.name);
