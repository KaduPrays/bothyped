const Discord = require('discord.js');
const d = require('../criadores.json')

exports.run = (client, message, args) => {

    let date = client.user.createdAt
    let embed = new Discord.MessageEmbed()
    .setColor("#FF6B01")
    .setTitle('HypedHosting ©')
    .setDescription(`**Lista de sites**:
    ㅤ
    **Inicio**| https://inicio.hypedhosting.tk
    **Painel** | https://painel.hypedhosting.tk
    **Area do cliente** https://financeiro.hypedhosting.tk
    **Status** | https://stats.uptimerobot.com/2GvpLTkglx
    **Status** https://status.hypedhosting.tk`) 
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
  name: 'site',
  aliases: ['sites']
}