function sum2(a, b) {
    return a + b;
}
//console.log(sum(10, 20));
var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    return Person;
}());
var capt = new Person("캡틴", "방패던지기");
console.log(capt.name);
