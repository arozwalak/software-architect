//----------------
// Adapter Pattern
//----------------

function TicketPrice() {
    this.request = function(start, end, overweightLuggage) {
        // price calculation...
        return '$150.34';
    }
}

function NewTicketPrice() {
    this.login = function(credentials) {};
    this.setStart = function(start) {};
    this.setDestination = function(destination) {};
    this.calculate = function(overweightLuggage) {
        // price calculation...
        return '$120.20';
    };
}

function TicketAdapter(credentials) {
    var pricing = new NewTicketPrice();
    pricing.login(credentials);

    return {
        request: function (start, end, overweightLuggage) {
            pricing.setStart(start);
            pricing.setDestination(end);
            return pricing.calculate(overweightLuggage);
        }
    };
}

var pricing = new TicketPrice();
var credentials = { token: '30a8-6ee1' };

var adapter = new TicketAdapter(credentials);

var price = pricing.request('Bern', 'London', 20);

console.log('old price', price);

price = adapter.request('Bern', 'London', 20);

console.log('New price', price);