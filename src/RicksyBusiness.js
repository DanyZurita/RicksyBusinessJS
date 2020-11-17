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

 /*
function main() {

    var creditCards = [
        { id: 001, name: "Abradolph Lincler", numberCard: "4916119711304546" },
        { id: 002, name: "Squanchy", numberCard: "4444444444444444" },
        { id: 003, name: "Morty", numberCard: "0000000000000000" },
        { id: 004, name: "GearHead", numberCard: "8888888888888888" },
        { id: 005, name: "BirdPearson", numberCard: "1111111111111111" }
    ];

     //Find creditCards in array

    function getOwnerCard(creditCardId) {
        for (let creditCard of creditCards) {
            if (creditCard.id == creditCardId) {
                return creditCard.name;
            }
        }
    }

    //Find numberCards in array

    function getNumberCard(creditCardId) {
        for (let creditCard of creditCards) {
            if (creditCard.id == creditCardId) {
                return creditCard.numberCard;
            }
        }
    }

    //Console.log de stats

    function printStats(owner, name, ezi, pack, ovnis) {
        console.log("Owner: " + owner);
        console.log("Number: " + name);
        console.log("Credit: " + ezi +" EZI" + "\n");
        console.log("Packs: " + pack);
        console.log("Ovnis: " + ovnis);
    }

    let credit = 3000;
    
    //Ovnis

    var cost = credit - 500;

    function asignOvnis() {
        let ownerCreditCard = getOwnerCard(001);
        let numberCreditCard = getNumberCard(001);
        

        console.log("##########" + " Tarjet of " + ownerCreditCard + " ##########" + "\n");
        printStats(ownerCreditCard, numberCreditCard, credit, 0, null);
        //

        console.log("##########" + " Ovni of " + ownerCreditCard + " ##########" + "\n");
        console.log("Owner: " + null);
        console.log("Credit of: " + ownerCreditCard + " " + cost + "\n");


        //Abradolph quiere otro ovni

        console.log("########## " + ownerCreditCard + " wants other ovni" + " ##########" + "\n");
        console.log("your credit don't changes: " + cost);
        console.log("Ovni of: " + ownerCreditCard + " " + null + "\n");
    }

    function initialArrival() {
        //Llega GearHead!

        let creditZero = "0.0";
        console.log("##########  Arrive GearHead ##########" + "\n");
        console.log("Your credit is zero: " + creditZero);
        console.log("You can't reserve a ovni: " + null + "\n");

        //Llega Squanchy!

        let ownerCreditCardSquanchy = getOwnerCard(002);

        console.log("########## " + ownerCreditCardSquanchy + " is here!" + " ##########" + "\n");
        console.log("Your credit is: " + credit);
        console.log("Your ovni is: " + null + "\n");
    }

    function ovnis() {
        //Algun ovni para Morty?

        let ownerCreditCardSquanchy = getOwnerCard(002);
        let ownerCreditCardMorty = getOwnerCard(003);

        console.log("########## " + "Any ovni for" + ownerCreditCardSquanchy + " ##########" + "\n");
        console.log("Your credit not changed: " + credit);
        console.log("Not ovnis for " + ownerCreditCardMorty + ": " + null + "\n");


        console.log("########## Ovnis flote ##########" + "\n");
        console.log(["unox", "dox", "trex"]);
    }

    
    function packs() {
        //Packs
        let stock = 2;
        let costPack = "50.0";
        console.log("########## Packs ##########" + "\n");
        console.log("Stock: " + stock);
        console.log("Cost: " + costPack + "\n");

        //Abradolph compra su pack

        var costA = cost - 500;
        costA -= costPack;
        let ownerCreditCard = getOwnerCard(001);
        console.log("########## " + ownerCreditCard + "buy one pack" + " ##########" + "\n");
        console.log("Packs \n");
        console.log("Stock: " + stock);
        console.log("Cost: " + costPack);
        console.log("Credit of Abradolph: " + costA + "\n");

        //GearHead sin credito para su pack

        console.log("########## GearHead without credit for buy pack ##########" + "\n");
        console.log("Packs \n");
        console.log("Stock: " + stock);
        console.log("Cost: " + costPack);
        console.log("Credit of GearHead: " + "0.0");
    } 


    function arrivals() {

        //LLega Squanchy!

        let numberCreditCardSquanchy = getNumberCard(002);
        let ownerCreditCardSquanchy = getOwnerCard(002);
        let costSquanchy = cost - 50;
        let pack = 1;
        console.log("##########" + " Arrive " + ownerCreditCardSquanchy + "! ##########" + "\n");
        printStats(ownerCreditCardSquanchy, numberCreditCardSquanchy, costSquanchy, pack, null);

        //LLega GearHead!

        let ownerCreditGearHead = getOwnerCard(004);
        let nameCreditGearHead = getNumberCard(004);
        console.log("##########" + " Arrive " + ownerCreditGearHead + "! ##########" + "\n");
        printStats(ownerCreditGearHead, nameCreditGearHead, 0, 0, null);

        //LLega Birdpearson!

        let ownerCreditBirdPerson = getOwnerCard(005);
        let nameCreditBirdPerson = getNumberCard(005);
        console.log("##########" + " Arrive " + ownerCreditBirdPerson + "! ##########" + "\n");
        printStats(ownerCreditBirdPerson, nameCreditBirdPerson, 2950, 0, null);

        //Morty quiere pack y ovni pero no quedan :(

        let ownerCreditMorty = getOwnerCard(003);
        let nameCreditMorty = getNumberCard(003);
        console.log("########## " + ownerCreditMorty + " wants pack but 0 stock" + " ##########" + "\n");
        printStats(ownerCreditMorty, nameCreditMorty, 3000, 0, null);
    }

    asignOvnis();
    initialArrival();
    ovnis();
    packs();
    arrivals();
}

main();

*/
import CreditCard from './CreditCard.js';
import UfosPark from './UfosPark.js';
import Ufo from './Ufo.js';

let danyCredit = new CreditCard("Dany", 123);
let mateuCredit = new CreditCard("Mateu", 1);

console.log(danyCredit);

danyCredit.pay(1000);

console.log(danyCredit);

mateuCredit.pay(999);

console.log(mateuCredit);

let ufosPark = new UfosPark();

let ufo1 =  new Ufo("Ufo1");
let ufo2 =  new Ufo("Ufo2");
let ufo3 =  new Ufo("Ufo3");

ufosPark.add(ufo1);
ufosPark.add(ufo2);
ufosPark.add(ufo3);


console.log(ufosPark);