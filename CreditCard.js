
function CreditCard(owner, number) {

    this.owner = owner;
    this.number = number;
    this.credit = 3000;

}

CreditCard.prototype.pay = function(fee) {
    if (this.credit > 0 && this.credit > fee) {
        this.credit -= fee;
    }
}



export default CreditCard;