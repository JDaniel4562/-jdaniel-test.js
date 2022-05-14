Testing Package
--
Este es simplemente un Package de prueba para NPM, no le veo mucha utilidad, ya que literal, es todo el Utils de [Tohru](https://tohru.ga/)

Instaling Package
--
```sh
npm i @jdaniel/utils.js
```

Using Package
--
```js
const JDaniel_Util = require('@jdaniel/utils.js')
const util = new JDaniel_Util()
/**
Para Setearlo en el client es solo:
client.util = new JDaniel_Util()
**/
```

Command Handler
--
Depende de como lo definiste pero este sería un ejemplo
```js
const Test = require('@jdaniel/test.js')
const test = new Test()

test.loadCommands(client,'comandos')
```
Tambien te puede dar un error, ya que en el `index.js` no tienes definido los comandos, si es que si, debes cambiarlo a `comandos`, Ejemplo:
```js
//[Correcto]
client.comandos = new Discord.Collection()
//[Incorrecto]
client.commands = new Discord.Collection()
client.cmd = new Discord.Collection()
```
