const packageName = 'Test'

class Test {
	constructor () {
		this.used = true
	}
	
	random(min, max){
		if(typeof min !== 'number') throw new Error(`[${packageName} Error] No se dió el Minimo`)
		if(typeof max !== 'number') throw new Error(`[${packageName} Error] No se dió el Maximo`)
		const res = Math.floor(Math.random() * (max - min)) + min
		return res
	}
	randomText(array,length=1){
		if(typeof array !== 'object') throw new Error(`[${packageName} Error] No se ha dado los Textos a elegir en Array`)
		if(typeof length !== 'number') throw new Error(`[${packageName} Error] No se ha dado el Numero de cuantos textos se darán`)
		let output;
		if(array.length < length) {
			output = array
		} else {
			let w3 = []
			let j = 0
			while(j < length) {
			const random = Math.floor(Math.random() * array.length)
			if(w3.includes(array[random]) === true) continue;
			w3.push(array[random]);
			j++
		}
			output = w3
		}
		return output
	}
	randomString(length){
		if(typeof size !== 'number') throw new Error(`[${packageName} Error] No se dió un numero`)
		const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
	}
	ramUsage(decimals=2,type='MB'){
		if(type !== 'MB' || type !== 'GB') throw new Error(`[${packageName} Error] No se dió un Typo valido, solo se es valido MB y GB`)
		if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
		let result = (process.memoryUsage().rss / 1024 / 1024).toFixed(decimals)
		return result+type
	}
	cpuUsage(decimals=2){
		if(typeof decimals !== 'number') throw new Error(`[${packageName} Error] No se dió un numero para las Decimales`)
		var result; 
		const cpus = require('os').cpus(); 
		const avgs = cpus.map(cpu => { 
			const total = Object.values(cpu.times).reduce((a, b) => a + b); 
			const nonIdle = total - cpu.times.idle; return nonIdle / total
		});
		result = (avgs.reduce((a, b) => a + b) / cpus.length).toFixed(decimals);
		return result
	}
	async loadCommands(client,CmdFolder) {
		if(typeof client !== 'object') throw new Error(`[${packageName} Error] No se dió le cliente de Discord`)
		if(!client.comandos) throw new Error(`[${packageName} Error] Para poder leer los comandos, en tu index.js escribe: \nclient.comandos = new Discord.Collection();`)
		if(typeof CmdFolder !== 'string') throw new Error(`[${packageName} Error] No se dió la Carpeta a leer Comandos`)
		const fs = require('fs')
		const foldersCommands = fs.readdirSync(`./${CmdFolder}`)
			for (const files of foldersCommands) {
				const folder = fs.readdirSync(`./${CmdFolder}/${files}/`).filter(file => file.endsWith(".js"))
				for (const commands of folder) {
					delete require.cache[require.resolve(`../${CmdFolder}/${files}/${commands}`)];
					const command = require(`../${CmdFolder}/${files}/${commands}`)
				try{
					if(!command.name) continue;
					client.comandos.delete(command.name)
					client.comandos.set(command.name, command)
				} catch(e) {
					console.log(`Error loading: ${command.name}`)
				}
			}
		}
	}
}
module.exports = Test
