function Receptive() {
    this.observers = new Set();
}

Receptive.prototype.register = function(observer) {
    this.observers.add(observer);
};

Receptive.prototype.dispatch = function(owner) {
    for (let observer of this.observers) {
        observer.dispatch(owner);
    }
};

const singletonReceptivo = (function() {
    let receptivoInstance;

    function createInstance() {
        return new Receptive()
    }
    return {
        getReceptive: function() {
            if (!receptivoInstance) {
                receptivoInstance = createInstance();
            }
            return receptivoInstance;
        },
    };
})();

module.exports = singletonReceptivo;