const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => { 
  let erro = new MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sorteio\` - Faça sorteios com o bot`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}votar tempo(m/h/d) #NomeDaSala Votação\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}votar 1m #NomeDaSala Querem um novo mini-game?\``)
  .setColor('#8c0046')   

    if (!args[0]) return message.channel.send(erro);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Formato de tempo incorreto use d - para dias, h - para horas e m - para minutos!`
      );
    if (isNaN(args[0][0])) return message.channel.send(erro);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Canal não encontrado por favor use: /votação tempo #canal votação`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Votação não especificado!`);
    message.channel.send(`*votação criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Nova Votação!`)
      .setDescription(
        `Tempo restante: ${args[0]}\n` + `Hospedado por ${message.author}\n` + `Votação: **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
      channel.send('@everyone');
    let m = await channel.send(Embed);
    m.react("❎");
    m.react("✔️");
    setTimeout(() => {
      channel.send(
        `A votação foi encerrada`
      );
    }, ms(args[0]));
  }