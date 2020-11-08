/**
 * Ricksy Business
 * ===============
 * Rick se queda a cargo Morty y Summer, 
 * y celebra una pedazo de fiesta. 
 * Entre los invitados hay adolescentes, aliens, 
 * Gearhead, Squanchy, Birdpearson y 
 * Abradolph Lincler (una combinación de DNA
 * de Adolf Hitler y Abraham Lincoln).
 *
 * Cuando un invitado/a llega a la fiesta, 
 * se le da de alta en el receptivo del sistema
 * mediante su tarjeta de crédito.
 *
 * El receptivo carga en el crédito de la tarjeta:
 * - El coste del UberOvni de vuelta a casa
 * - El coste del pack de bienvenida (Collaxion crystals).
 *
 * El componente de reserva de Ovnis y el componente
 * de entrega del pack de bienvenida observan al
 * componente receptivo, de modo que cuando el receptivo
 * da de alta a un invitado/a automáticamente cargan 
 * en la tarjeta del invitado/a el coste de ambos servicios. 
 */


var creditCards = [
    { id: 001, name: "Abradolph Lincler", numberCard: "4916119711304546" }, //posibilidad de añadir credit
    { id: 002, name: "Squanchy", numberCard: "4444444444444444" },
    { id: 003, name: "Morty", numberCard: "0000000000000000" },
    { id: 004, name: "GearHead", numberCard: "8888888888888888" },
    { id: 005, name: "BirdPearson", numberCard: "1111111111111111" }


];


function getOwnerCard(creditCardId) {
    for (let creditCard of creditCards) {
        if (creditCard.id == creditCardId) {
            let name = creditCard.name;
            return name;
        }
    }
}

function getNumberCard(creditCardId) {
    for (let creditCard of creditCards) {
        if (creditCard.id == creditCardId) {
            let number = creditCard.numberCard;
            return number;
        }
    }
}

var ownerCreditCard = getOwnerCard(001);
var numberCreditCard = getNumberCard(001);
var credit = 3000;

console.log("##########" + " Tarjet of " + ownerCreditCard + " ##########" + "\n");

console.log("Owner: " + ownerCreditCard);
console.log("Number: " + numberCreditCard);
console.log("Credit: " + credit + "EZI" + "\n");


//Ovnis

var cost = credit - 500;

console.log("##########" + " Ovni of " + ownerCreditCard + " ##########" + "\n");
console.log("Owner: " + null);
console.log("Credit of: " + ownerCreditCard + " " + cost + "\n");


//Abradolph quiere otro ovni

let cost2 = cost - 500;
console.log("########## " + ownerCreditCard + " wants other ovni" + " ##########" + "\n");
console.log("your credit don't changes: " + cost2);
console.log("Ovni of: " + ownerCreditCard + " " + null + "\n");


//Llega GearHead!

let creditZero = "0.0";
console.log("##########  Arrive GearHead ##########" + "\n");
console.log("Your credit is zero: " + creditZero);
console.log("You can't reserve a ovni: " + null + "\n");



//Llega Squanchy!

var ownerCreditCardSquanchy = getOwnerCard(002);

console.log("########## " + ownerCreditCardSquanchy + " is here!" + " ##########" + "\n");
console.log("Your credit is: " + credit);
console.log("Your ovni is: " + null + "\n");

//Algun ovni para Morty?


var ownerCreditCardMorty = getOwnerCard(003);

console.log("########## " + "Any ovni for" + ownerCreditCardSquanchy + " ##########" + "\n");
console.log("Your credit not changed: " + credit);
console.log("Not ovnis for " + ownerCreditCardMorty + ": " + null + "\n");


console.log("########## Ovnis flote ##########" + "\n");
console.log(["unox", "dox", "trex"]);

//Packs

var stock = 2;
var costPack = "50.0";
console.log("########## Packs ##########" + "\n");
console.log("Stock: " + stock);
console.log("Cost: " + costPack + "\n");

//Abradolph compra su pack
var cost3 = cost2 - costPack
console.log("########## " + ownerCreditCard + "buy one pack" + " ##########" + "\n");
console.log("Packs \n");
console.log("Stock: " + stock);
console.log("Cost: " + costPack);
console.log("Credit of Abradolph: " + cost3 + "\n");

//GearHead sin credito para su pack

console.log("########## GearHead without credit for buy pack ##########" + "\n");
console.log("Packs \n");
console.log("Stock: " + stock);
console.log("Cost: " + costPack);
console.log("Credit of GearHead: " + "0.0");


//LLega Squanchy!

var numberCreditCardSquanchy = getNumberCard(002);
var costSquanchy = cost - 50;
var pack = 1;
console.log("##########" + " Arrive " + ownerCreditCardSquanchy + "! ##########" + "\n");
console.log("Owner: " + ownerCreditCardSquanchy);
console.log("Number: " + numberCreditCardSquanchy);
console.log("Credit: " + costSquanchy + "EZI" + "\n");
console.log("Packs: " + pack);
console.log("Ovnis: " + null);


//LLega GearHead!

var ownerCreditGearHead = getOwnerCard(004);
var nameCreditGearHead = getNumberCard(004);
console.log("##########" + " Arrive " + ownerCreditGearHead + "! ##########" + "\n");
console.log("Owner: " + ownerCreditGearHead);
console.log("Number: " + nameCreditGearHead);
console.log("Credit: 0.0 EZI" + "\n");
console.log("Packs: " + pack);
console.log("Ovnis: " + null);

//LLega Birdpearson!


var ownerCreditBirdPerson = getOwnerCard(005);
var nameCreditBirdPerson = getNumberCard(005);
console.log("##########" + " Arrive " + ownerCreditBirdPerson + "! ##########" + "\n");
console.log("Owner: " + ownerCreditBirdPerson);
console.log("Number: " + nameCreditBirdPerson);
console.log("Credit: 2950.0 EZI" + "\n");
console.log("Packs: " + "0");
console.log("Ovnis: " + null);


//Morty quiere pack y ovni pero no quedan :(

var ownerCreditMorty = getOwnerCard(003);
var nameCreditMorty = getNumberCard(003);
console.log("########## " + ownerCreditMorty + " wants pack but 0 stock" + " ##########" + "\n");
console.log("Owner: " + ownerCreditMorty);
console.log("Number: " + nameCreditMorty);
console.log("Credit: 3000.0 EZI" + "\n");
console.log("Packs: " + "0");
console.log("Ovnis: " + null);