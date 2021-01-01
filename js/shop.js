const Discord = require('discord.js');
const d = require('../criadores.json')

exports.run = (client, message, args) => {

    let date = client.user.createdAt
    let embed = new Discord.MessageEmbed()
    .setColor("#FF6B01")
    .setTitle('HypedHosting ©')
    .setDescription(`**Lista de preços**:

    :flag_us: Localização: US

    Hospedagem Minecraft 1GB: R$5
    Hospedagem Minecraft 2GB: R$9
    Hospedagem Minecraft 3GB: R$14
    Hospedagem Minecraft 4GB: R$18
    Hospedagem Minecraft 5GB: R$22
    Hospedagem Minecraft 6GB: R$26
    Hospedagem Minecraft 7GB: R$30
    Hospedagem Minecraft 8GB: R$34
    
    Métodos de pagamento:
    <:mercadopago:793953767531347979>MercadoPago
    <:PayPal:793953784669536317>PayPal`)
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
  name: 'shop',
  aliases: ['precos']
}