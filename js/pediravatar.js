const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/avatar`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`❤ Avatar ❤`)
    .setDescription(`Hey! ${message.author} toma o seu avatar! =]`)
    .setImage(body.url)
    .setFooter("Avatar", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);

}