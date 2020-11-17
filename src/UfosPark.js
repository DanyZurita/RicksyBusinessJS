import Ufo from './Ufo.js';

function UfosPark() {

    this.flota = {Ufo};
    this.fee = 500;

}

UfosPark.prototype.add = function(ufo) {
    this.flota.push(ufo);
}


UfosPark.prototype.getUfoOf = function(owner) {
    return this.flota.includes(owner) ? this.flota[this.flota.indexOf(owner)] : null;
}

UfosPark.prototype.dispatcheable = function(creditCard) {
    for ( Ufo.prototype in this.flota){
        if (ufo.guest == null){
            // TODO logica pocha
            return creditCard;
            
        }
    }
}

export default UfosPark;