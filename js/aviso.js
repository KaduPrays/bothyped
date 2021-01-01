const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => { 
  let erro = new MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`aviso\` - Faça aviso com o bot`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}aviso #NomeDaSala Anuncio\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}aviso #NomeDaSala Nitro Grátis com 100 membros\``)
  .setColor('#8c0046')   

    if (!args[0]) return message.channel.send(erro);
    let channel = message.mentions.channels.first();
    let prize = args.slice(1).join(" ");
    if (!prize) return message.channel.send(`Premio não especificado!`);
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`*Anuncio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Novo Anuncio!`)
      .setDescription(
        `Anunciado por ${message.author}\n` + `Anuncio **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
      channel.send('@everyone');
    let m = await channel.send(Embed);
  } else {
    message.channel.send(`Você não tem permissão para enviar um anuncio`)
  }
}