const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/neko`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`❤ Nekoooo ❤`)
    .setDescription(`Yay! ${message.author} toma sua nekozinha! =]`)
    .setImage(body.url)
    .setFooter("Owntttt", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);

}