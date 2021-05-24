//----------------
// Chain Of Responsibility Pattern
//----------------

var Request = function (amount) {
    this.amount = amount;
    console.log('Request amount ' + this.amount);
};

Request.prototype = {
    get: function (bill) {
        var count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        console.log('Dispance ' + count + ' $' + bill + " bills");
        return this;
    }
}

function run () {
    var request = new Request(378); // requesting amount
    request.get(100).get(50).get(20).get(10).get(5).get(1);
}

run();