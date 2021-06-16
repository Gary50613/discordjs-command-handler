# djs-command-handler
> Simple command handler for discord.js

[繁體中文](doc/README-zh.md)

***

## Install
run this in your terminal
```shell
npm i @gary50613/discord.js-command-handler
```

## Test
```shell
npm i
npm test
```

## ✨ Features

- easy to set up
- works perfectly with discord.js
- **ratelimit support**
- **error handling with event**
- event listening
- commands group support
- **SLASH COMMAND SUPPORT (beta)**

## Usage
basic how to initialize with [options](#options)
```js
const Discord = require('discord.js')

// import a command
const ping = require("./commands/ping")

const bot = new Discord.Client()
require("@gary50613/djs-command-handler")(bot, {
	prefix: '.',
	// options
})

// load a whole folder's commands
bot.commands.loadCommands("./commands")

// register a command
bot.commands.register(new ping())

// or register multiple command at the same time
bot.commands.register([ping, ..., ...])

// listen to event
bot.commands.on("dm", (m) => {
    m.channel.send("u can only use command in a guild!")
})

bot.login(process.env.TOKEN)
```

make a command
```js
const Command = require("@gary50613/djs-command-handler/Base/Command")

class Ping extends Command {
    constructor() {
        super(
            "ping", // name
            "ping the bot", // description
            ".ping", // usage
            "general", // group
            ["pong"] // alias
        );
    }
    
    // execute function to call
    execute(bot, message, args, member, guild) {
        // just write like normal discord.js
        message.reply('pong!')
    }
}

module.exports = Ping
```

## Event
type | description | parameter
---|---|---
dm | user execute a command in dm | Message
ratelimit | user get ratelimited | Millisecond, Message
execute | command successfully executed | Command, Message
error | command execute error | Error, Command, Message
promiseError | promise rejection | Error, Command, Message

## Reference
### options
```js
{
    ratelimit: {
        enable: false, // whether enable ratelimit
        interval: 5000, // interval to limit
        bypass: {
            users: [], // specific users ID can bypass ratelimit 
            permissions: ["ADMINISTRATOR"], // specific perimissions FLAG can bypass ratelimit
            roles: [] // // specific roles ID can bypass ratelimit
        }
    },
    prefix: "PREFIX", // bot's prefix
    dm: false, // whether accept dm commands
    bot: false // whether accept bot execute command  
}
```

## Author
🧑‍💻 **Kane**
- Github [@Gary50613](https://github.com/Gary50613)

## ❤️ Contributing
Feel free to open [issue](https://github.com/Gary50613/discordjs-command-handler/issues)
or join [my discord server](https://discord.gg/ct2ufag)