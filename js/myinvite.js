const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete
  let user = message.author
  let embedi = new Discord.MessageEmbed()
  .setTitle("Meu convite:")
  .setDescription("https://discord.com/oauth2/authorize?client_id=763835666944622592&scope=bot&permissions=805314622")

  user.send(embedi)
}