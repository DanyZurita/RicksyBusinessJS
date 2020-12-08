function CrystalExpender(stock, cost) {

    this.stock = stock;
    this.cost = cost;

}

CrystalExpender.prototype.dispatch = function(owner) {
    if (this.stock > 0 && owner.isPayable(this.cost)) {
        owner.pay(this.cost)
        this.stock -= 1;
    }
}

const singletonCrystal = (function() {
    let crystalInstance;

    function createInstance(stock, cost) {
        return new CrystalExpender(stock, cost)
    }
    return {
        getCrystal: function(stock, cost) {
            if (!crystalInstance) {
                crystalInstance = createInstance(stock, cost);
            }
            return crystalInstance;
        },
    };
})();

module.exports = singletonCrystal;