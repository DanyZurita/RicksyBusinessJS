function Ufo(name) {

    this.name = name;
    this.guest = null;

}

Ufo.prototype.dispatch = function(guest) {
    this.guest = guest;
}

Ufo.prototype.dispatched = function() {
    this.guest = null;
}


export default Ufo;