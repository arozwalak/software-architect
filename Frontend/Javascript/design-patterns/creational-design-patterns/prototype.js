//----------------
// Prototype Pattern
//----------------

var car = {
    noOfWheels: 4,
    start() {
        return 'started';
    },
    stop() {
        return 'stopped';
    }
};

var myCar = Object.create(car, { owner: { value: 'John' }, year: { value: 2020 }});
console.log(myCar.__proto__ === car);
console.log(myCar.owner);