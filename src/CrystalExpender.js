
function CrystalExpender(stock, cost) {

    this.stock = stock;
    this.cost = cost;

}

CrystalExpender.prototype.dispatch = function (owner) {
    if (this.stock > 0 && owner.isPayable(this.cost)) {
        owner.pay(this.cost)
        this.cost -= 1;
    }
}

module.exports = CrystalExpender;