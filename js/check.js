const Discord = require('discord.js');
const d = require('../criadores.json')

exports.run = (client, message, args) => {

    let date = client.user.createdAt
    let embed = new Discord.MessageEmbed()
    .setColor("#FF6B01")
    .setTitle('Welcome - Mr customers.')
    .setDescription(`**Note:** It is very important that we have control over our buyers. So react to the emoji to be checked!:
    ㅤ
    **:man_pouting:**  ➜ Member`)
    .setFooter(client.user.username, client.user.displayAvatarURL()) // para pegar o bot name: client.user.username

    .setTimestamp();
    
    message.channel.send(embed);
  
    /**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
  }
}

exports.help = {
  name: 'captchaus',
  aliases: ['verificarus']
}