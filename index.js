const config = require('./config.js')
const version = require('./package.json').version

class JDaniel_Util {
	constructor () {
		this.version = version,
		this.used = true,
		this.functions = {
			random(min, max){
				require('./functions/random.js')
			},
			randomText(array,length=1){
				require('./functions/randomText.js')
			},
			randomString(length){
				require('./functions/randomString.js')
			},
			ramUsage(decimals=2,type='MB'){
				require('./functions/ramUsage.js')
			},
			cpuUsage(decimals=2){
				require('./functions/cpuUsage.js')
			},
			async loadCommands(client,CmdFolder) {
				require('./functions/loadCommands.js')
			},
			async getMeme(type){
				require('./functions/getMeme.js')
			}
		}
	}
}
module.exports = JDaniel_Util