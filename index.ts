import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
  ]  
})

client.on('ready', () => {
    console.log('Bing Bong is ready')
})


client.on('messageCreate', (message) => {
    
    if (message.content === 'bing') {
        message.reply({
            content: 'bong',
        })
    }
    if (message.content === 'LOL' || message.content === 'LMAO' || message.content === 'LMFAO') {
        message.reply({
            content: 'tf is so funny',
        })
    }
    if (message.content === 'val?' || message.content === 'Val?' || message.content === 'VAL?') {
        message.reply({
            content: '<@&746668463413526599>'
        })
    }
    if (message.content === 'games?' || message.content === 'GAMES?') {
        message.reply({
            content: '<@&268903406511325184>'
        })
    }
})

client.login(process.env.TOKEN)