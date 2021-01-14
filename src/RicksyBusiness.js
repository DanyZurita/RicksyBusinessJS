const singletonUfosPark = require('./UfosPark/UfosPark.js');
const singletonCrystal = require('./CrystalExpender/CrystalExpender.js');
const singletonMenu = require('./RickMenu/RickMenu.js');
const uferData = require('./data/uferService.json')
const crystalData = require('./data/crystalService.json')
const menusData = require('./data/menusService.json');
const CreditCard = require('./CreditCard/CreditCard.js');
const singletonReceptivo = require('./Receptive/Receptive.js');
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



function main() {

    /**
     * Crea una tarjeta de crédito para Abradolph.
     * Como es una AndromedanExpress
     * el crédito inicial es de 3000 EZIS
     */

    let abradolph = new CreditCard("Abradolph Lincler", "4916119711304546");

    console.log(`\nTarjeta de Abradolph \n==================== \n${abradolph}`);

    /**
     * Construye el componente de reserva de Ovnis.
     * Recibe el objeto tarjeta de crédito del invitado/a
     * en el método dispatch(card)
     * y realiza un cargo a la tarjeta.
     * Si hay saldo suficiente se reserva un UberOvni
     * de los que estén libres.
     * El coste del ovni es de 500 EZIs.
     */

    let ufosPark = singletonUfosPark.getUfo();

    // Da de alta los dos primeros Ufos de la flota del JSON

    let ufos = [uferData[0], uferData[1]];
    for (let ufo of ufos) {
        ufosPark.addUfo(ufo);
    }

    // Procesamos el pago y reserva de ovni de Abradolph
    ufosPark.dispatch(abradolph);

    // Mostramos el ID del ovni asignado a Abradolph
    // Mostramos el credito de la tarjeta de Abradolph
    console.log(`\nOvni de Abradolph \n================= \nOvni asignado : ${ufosPark.getUfoOf(abradolph.number)} \nCredito de Abradolph: ${abradolph.credit}`);

    // Abradolph quiere reservar otro ovni.
    // El sistema detecta que ya tiene uno 
    // e ignora la petición.

    console.log("\nAbradolph quiere otro ovni \n==========================");
    ufosPark.dispatch(abradolph);
    console.log(`Su credito no ha cambiado: ${abradolph.credit} \nOvni de Abradolph: ${ufosPark.getUfoOf(abradolph.number)}`);

    // A GearHead le vacía la tarjeta el alien "Cámara Lenta" 
    // mientras le daba la chapa, justo antes de pagar el ovni.
    // Intenta reservarlo y el componente de reserva de ovnis
    // no le asigna ninguno.

    console.log("\nLLega GearHead! \n===============");
    let gearHead = new CreditCard("Gearhead", "8888888888888888");

    gearHead.pay(3000); // le vacían la cartera

    ufosPark.dispatch(gearHead);
    console.log(`\nSu credito es cero: ${gearHead.credit} \nNo puede reservar ovni: ${ufosPark.getUfoOf(gearHead.number)}`);

    // Squanchy deja su ovni reservado
    // antes de irse a squanchear

    console.log("\nLlega Squanchy! \n==============");
    let squanchy = new CreditCard("Squanchy", "4444444444444444");
    ufosPark.dispatch(squanchy);
    console.log(`\nSu credito es: ${squanchy.credit} \nSu ovni es: ${ufosPark.getUfoOf(squanchy.number)}`);

    // Morty quiere un ovni para huir de la fiesta
    // pero ya no queda ninguno disponible

    console.log("\nAlgun ovni para Morty? \n======================");
    let morty = new CreditCard("Morty", "0000000000000000");
    ufosPark.dispatch(morty);
    console.log(`\nSu credito no ha cambiado: ${morty.credit} \nNo hay ovni Morty: ${ufosPark.getUfoOf(morty.number)}`);

    // Metemos un ovni más en la flota de ovnis
    // y mostramos la flota por consola

    console.log("\nFlota de ovnis \n==============");
    ufosPark.addUfo("trex");
    console.log(ufosPark);


    /**
     * Construye el dispensador de packs de bienvenida.
     * Indica el numero de unidades y el coste de cada
     * uno de ellos, que es de 50 EZIs
     */
    let packExpender = singletonCrystal.getCrystal(3, 50);

    // Muestra el total de packs y su precio unidad
    console.log("\nPacks \n=====");
    console.log(packExpender);

    // Abradolph compra su pack de bienvenida
    packExpender.dispatch(abradolph);

    console.log(`\nAbradolph compra su pack \n======================== \nPacks \n${packExpender} \nCredito de Abradolph: ${abradolph.credit}`);

    // El pobre GerHead no tiene crédito para comprar su pack
    console.log("\nGearHead sin credito para su pack \n=================================");
    packExpender.dispatch(gearHead);
    console.log(`\nPacks \n${packExpender} \nCredito de GearHead: ${gearHead.credit}`);


    /**
     * Vamos a automatizar ahora ambas tareas, de modo que
     * cuando llega un invitado/a se le asiga un ovni
     * y un pack y se realiza el cargo a la tarjeta.
     * 
     * Para ello, crea el componente receptivo
     * y registra (añade) los componentes UfosPark
     * y CrystalDispatcher al receptivo
     */

    let receptivo = singletonReceptivo.getReceptive();
    receptivo.register(packExpender);
    receptivo.register(ufosPark);

    // Implementa el metodo receptivo.dispatch()
    // para que invoque a UfosPark.dispatch()
    // y a CrystalExpender.dispatch()

    // Squanchy reserva ovni (ya tiene) y pack

    console.log("\nLLega Squanchy! \n===============");
    receptivo.dispatch(squanchy);
    mostrarReserva(squanchy, packExpender, ufosPark);

    // Gearhead reserva ovni y pack.
    // No tiene crédito.

    console.log("\nLLega GearHead! \n===============");
    gearHead.pay(3000); // no tiene crédito
    receptivo.dispatch(gearHead);
    mostrarReserva(gearHead, packExpender, ufosPark);

    // Birdpearson es recibido en la fiesta

    console.log("\nLlega Birdpearson! \n==================");
    let birdpearson = new CreditCard("Birdpearson", "1111111111111111");
    receptivo.dispatch(birdpearson);
    mostrarReserva(birdpearson, packExpender, ufosPark);

    // Morty intenta reserver un ovni y un pack pero no quedan

    console.log("\nMorty quiere pack y ovni pero no quedan :( \n==========================================");
    morty = new CreditCard("Morty", "0000000000000000");
    receptivo.dispatch(morty);
    mostrarReserva(morty, packExpender, ufosPark);
}

function mostrarReserva(card, expender, ufos) {
    console.log(`\nCredit: \n${card.toString()} \nPacks: ${expender.stock} \nOvni: ${ufos.getUfoOf(card.number)}`);
}

main();