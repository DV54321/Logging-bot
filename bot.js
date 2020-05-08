const Eris = require('eris')
const bot = new Eris('Bot Token')
bot.on('ready', () => {
  console.log('Logged in and starting to log messages.')
})
bot.on('messageCreate', (message) => {
  console.log(`Author: ${message.author}`)
  console.log(`Channel: ${message.channel.id}`)
  console.log(`Message: ${message.content}`)
})
bot.connect()
