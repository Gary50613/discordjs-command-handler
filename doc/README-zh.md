# djs-command-handler
> 簡易的 discord.js 指令框架

[English](README.md)

***

## 安裝
在終端機輸入
```shell
npm i @gary50613/discord.js-command-handler
```

## 測試
```shell
npm i
npm test
```

## ✨ 特性

- 快速設置
- 完美兼容 discord.js
- **支持冷卻時間**
- **完整錯誤處理**
- 支援事件監聽
- 支援指令群組

## Usage

### JavaScript
初始化使用 [選項](#選項)
```js
const Discord = require('discord.js')

// 匯入一個指令
const ping = require("./commands/ping")

const bot = new Discord.Client()
require("@gary50613/djs-command-handler")(bot, {
	prefix: '.',
	// 選項
})

// 註冊整個資料夾的指令
bot.commands.loadCommands("./commands")

// 註冊一個指令
bot.commands.register(new ping())

// 或是一次註冊多個指令
bot.commands.register([new ping(), ..., ...])

// 監聽事件
bot.commands.on("dm", (m) => {
    m.channel.send("只能在伺服器使用指令!")
})

bot.login(process.env.TOKEN)
```

製作一個指令
```js
const { Command } = require("@gary50613/djs-command-handler")

class Ping extends Command {
    constructor() {
        super(
            "ping", // 名字
            "取得機器人延遲", // 簡介
            ".ping", // 使用說明
            "general", // 群組
            ["pong"] // 別名
        );
    }
    
    // 執行指令的方法
    execute(message, args, member, guild) {
        // 就像寫 discord.js 一樣!
        message.reply('pong!')
    }
}

module.exports = Ping
```

### TypeScript
初始化使用 [選項](#選項)
```ts
import { Client } from "discord.js"
import init from "@gary50613/discord.js-command-handler"

// 匯入一個指令
import ping from "./commands/Ping"

const bot = new Client()
init(bot, {
    prefix: ".",
    // 選項
})

// 註冊整個資料夾的指令
bot.commands.loadCommands("./commands")

// 註冊一個指令
bot.commands.register(new ping())

// 或是一次註冊多個指令
bot.commands.register([new ping(), ..., ...])

// 監聽事件
bot.commands.on("dm", (m) => {
    m.channel.send("u can only use command in a guild!")
})

bot.login(process.env.TOKEN)
```

製作一個指令
```ts
import { Command } from "@gary50613/discord.js-command-handler";
import { Client, Guild, GuildMember, Message } from "discord.js";

export default class Ping extends Command {
    public constructor() {
        super(
            "ping", // 名字
            "取得機器人延遲",  // 簡介
            ".ping", // 使用說明
            "general", // 群組
            ["pong"] // 別名
        );
    }

    // 執行指令的方法
    public async execute(bot: Client, message: Message, args: string[], member: GuildMember, guild: Guild) {
        // 就像寫 discord.js 一樣!
        message.reply("pong!")
    }
}
```
## Event
類型 | 簡介 | 參數
---|---|---
dm | 當私訊使用指令 | 訊息
ratelimit | 當使用者被冷卻 | 秒數, 訊息
execute | 指令成功執行 | 指令, 訊息
error | 指令執行時出錯 | 錯誤, 指令, 訊息
promiseError | 執行Promise時出錯 | 錯誤, 指令, 訊息

## 參考
### 選項
```js
{
    ratelimit: {
        enable: false, // 是否啟用冷卻
        interval: 5000, // 冷卻時間
        bypass: {
            users: [], // 特定可以略過冷卻的使用者ID 
            permissions: ["ADMINISTRATOR"], // 特定可以略過冷卻的權限
            roles: [] // // 特定可以略過冷卻的身分組ID
        }
    },
    prefix: "PREFIX", // 機器人的前綴
    dm: false, // 是否接受私訊指令
    bot: false // 是否接受機器人指令  
}
```

## 作者
🧑‍💻 **Kane**
- Github [@Gary50613](https://github.com/Gary50613)

## ❤️ 協作
可以發 [issue](https://github.com/Gary50613/discordjs-command-handler/issues) 給我或
加入 [我的Discord伺服器](https://discord.gg/ct2ufag)