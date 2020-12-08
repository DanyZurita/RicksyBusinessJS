# Ricksy Business JS

Examen de Febrero de 2020 principalmente programado en Java. La intencion de este proyecto es aprender las bases de JavaScript como la programacion prototipada, programacion funcional, ademas de aprender a usar el patron SINGLETON.

## Historias de usuario

Rick se queda a cargo Morty y Summer, y celebra una pedazo de fiesta.
Entre los invitados hay adolescentes, aliens, Gearhead, Squanchy, Birdpearson y Abradolph Lincler (una combinación de DNA de Adolf Hitler y Abraham Lincoln).

Cuando un invitado/a llega a la fiesta, se le da de alta en el receptivo del sistema mediante su tarjeta de crédito.

El receptivo carga en el crédito de la tarjeta:

- El coste del UberOvni de vuelta a casa
- El coste del pack de bienvenida (Collaxion crystals).

El componente de reserva de Ovnis y el componente de entrega del pack de bienvenida observan al componente receptivo, de modo que cuando el receptivo da de alta a un invitado/a automáticamente cargan en la tarjeta del invitado/a el coste de ambos servicios.

## Instalacion

### Si queremos ejecutar los casos test.

Primero entramos a la carpeta _src_:
`cd src/`

Segundo lanzamos el comando para instalar las dependencias de jest:
`npm install`

Tercer paso para lanzar los casos test:
`npm run test`

### Si queremos lanzar la aplicacion main:

Ejecutaremos el comando:
`npm run start`