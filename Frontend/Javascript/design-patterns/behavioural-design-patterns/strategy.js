//----------------
// Strategy Pattern
//----------------

function FedEx() {
    this.calculate = package => {
        return 2.99;
    }
}

function UPS() {
    this.calculate = package => {
        return 1.59;
    }
}

function USPS() {
    this.calculate = package => {
        return 4.5;
    }
}

function Shipping() {
    this.company = '';
    this.setStrategy = (company) => {
        this.company = company;
    }

    this.calculate = package => {
        return this.company.calculate(package);
    }
}

const fedex = new FedEx();
const ups = new UPS();
const usps = new USPS();

const package = { from: 'Alabama', to: 'Georgia', weight: 1.5 };

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log('FedEx: ' + shipping.calculate(package));

shipping.setStrategy(ups);
console.log('UPS: ' + shipping.calculate(package));