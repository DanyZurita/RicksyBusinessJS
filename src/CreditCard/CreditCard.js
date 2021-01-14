function CreditCard(owner, number) {

    this.owner = owner;
    this.number = number;
    this.credit = 3000;

}

// Pay the amount
CreditCard.prototype.pay = function(fee) {
    if (this.isPayable(fee)) {
        this.credit -= fee;
    }
}

// Conditions to pay
CreditCard.prototype.isPayable = function(fee) {
    return this.credit > 0 && this.credit >= fee;
}

// ToString
CreditCard.prototype.toString = function() {
    console.log(`Owner:  ${this.owner} \nNumber: ${this.number} \nCredit: ${this.credit} EZI\n`);
}

module.exports = CreditCard;