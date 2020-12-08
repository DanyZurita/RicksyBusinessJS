
function CreditCard(owner, number) {

    this.owner = owner;
    this.number = number;
    this.credit = 3000;

}

CreditCard.prototype.pay = function(fee) {
    if (this.isPayable(fee)) {
        this.credit -= fee;
    }
}

CreditCard.prototype.isPayable = function(fee) {
    return this.credit > 0 && this.credit >= fee;
}


module.exports = CreditCard;