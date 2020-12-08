//Constructor
function UfosPark() {

    this.fleet = new Map();
    this.fee = 500;

}

//Add a new Ufo
UfosPark.prototype.addUfo = function(ufo) {
    this.fleet.set(ufo, null);
}

//Find the Ufo of a guest
UfosPark.prototype.getUfoOf = function(owner) {
    for (let [k, v] of this.fleet.entries()) {
        if (owner == v) {
            return k;
        }
    }
    return "nope";
}

//Main process to dispatch a Ufo
UfosPark.prototype.dispatch = function(creditCard) {
    for (let [k, v] of this.fleet.entries()) {
        if (this.isUfoDispacheable(v, creditCard)) {
            this.payDispatch(k, creditCard);
            break;
        }
    }
}

//Check all 3 conditions
UfosPark.prototype.isUfoDispacheable = function(v, creditCard) {
    return !this.isOwnerAlreadyServed(creditCard) && v == null && creditCard.isPayable(this.fee);
}

//Process the payment of the Ufo
UfosPark.prototype.payDispatch = function(k, creditCard) {
    creditCard.pay(this.fee);
    this.fleet.set(k, creditCard.number)
}

//Check if owner already is dispatched
UfosPark.prototype.isOwnerAlreadyServed = function(creditCard) {
    return Array.from(this.fleet.values()).includes(creditCard.number, 0);
}

//Singleton Pattern


const singletonUfosPark = (function() {
    let ufosParkInstance;

    function createInstance() {
        return new UfosPark()
    }
    return {
        getUfo: function() {
            if (!ufosParkInstance) {
                ufosParkInstance = createInstance();
            }
            return ufosParkInstance;
        },
    };
})();

module.exports = singletonUfosPark;