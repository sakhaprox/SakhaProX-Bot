const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
    if (message.content == "Helloo"){
        message.reply("Hi!")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "You can Talk"){
        message.reply("YES I Can Talk")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "oh ok"){
        message.reply("...")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Bye"){
        message.reply("Okay Bye")
    }
})

const welcomeChannelId = "971758109976567849"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send('<@${member.id}> Welcome to SakhaProX Discord Server!')
})

client.login(process.env.TOKEN)