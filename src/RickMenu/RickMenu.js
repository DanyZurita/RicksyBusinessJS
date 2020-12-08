function RickMenu(stock, cost) {

    this.stock = stock || 100;
    this.cost = cost || 10;

}

RickMenu.prototype.dispatch = function(owner) {
    if (this.stock > 0 && owner.isPayable(this.cost)) {
        owner.pay(this.cost)
        this.stock -= 1;
    }
}

const singletonMenu = (function() {
    let menuInstance;

    function createInstance(stock, cost) {
        return new RickMenu(stock, cost)
    }
    return {
        getMenu: function(stock, cost) {
            if (!menuInstance) {
                menuInstance = createInstance(stock, cost);
            }
            return menuInstance;
        },
    };
})();

module.exports = singletonMenu;