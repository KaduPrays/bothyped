const Discord = require('discord.js');
const c = require('../criadores.json')

exports.run = async (client, message, args) => {
  let user = message.author
  user.send(`Fui criado pelo: ${c.OwnerGeral}`) 
}