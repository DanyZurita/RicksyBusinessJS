function RickyMenu() {

    this.stock = 100;
    this.cost = 10;

}

RickyMenu.prototype.dispatch = function (owner) {
    if (this.stock > 0 && owner.isPayable(this.cost)) {
        owner.pay(this.cost)
        this.stock -= 1;
    }
}

module.exports = RickyMenu;