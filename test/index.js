require('dotenv').config()

const Discord = require('discord.js')

const bot = new Discord.Client({
 	intents: Object.values(Discord.Intents.FLAGS)
		.filter(x => x !== Discord.Intents.FLAGS.GUILD_PRESENCES)
})
require("../src")(bot, {
	prefix: '.',
	ratelimit: {
		enable: true
	}
})

// bot.commands.register(new (require("./commands/ping"))())

bot.commands.loadFolder('./commands')

bot.commands.on("error", (e) => console.error(e))
bot.commands.on("promiseError", (e) => console.error(e))

bot.commands.on("ratelimit", (c, m) => console.log(c))

bot.commands.middleware(async (executor, message, args, response) => {
	console.log(executor.name)
	response()
})

bot.interaction.register(new (require("./interactions/ping"))())

bot.on('ready', () => {
	console.log('bot ready')
})

bot.login(process.env.TOKEN)
	.catch(e => {
		console.error(e)
		process.exit(0)
	})