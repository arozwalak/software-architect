//----------------
// Decorator Pattern
//----------------

function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.licence = '0000-000';
}

var testInstance = new Vehicle('car');
console.log(testInstance);

var truck = new Vehicle('truck');
truck.setModel = function(modelName) {
    this.model = modelName;
};
truck.setColor = function(color) {
    this.color = color;
};

truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

var secondInstance = new Vehicle('car');
console.log(secondInstance);