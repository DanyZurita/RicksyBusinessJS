function RickMenu() {

    this.stock = 100;
    this.cost = 10;

}

RickMenu.prototype.dispatch = function(owner) {
    if (this.stock > 0 && owner.isPayable(this.cost)) {
        owner.pay(this.cost)
        this.stock -= 1;
    }
}

const singletonMenu = (function() {
    let menuInstance;

    function createInstance() {
        return new RickMenu()
    }
    return {
        getMenu: function() {
            if (!menuInstance) {
                menuInstance = createInstance();
            }
            return menuInstance;
        },
    };
})();

module.exports = singletonMenu;