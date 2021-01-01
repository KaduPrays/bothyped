const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let facção = args.slice(1).join(" ");
  let channel = message.mentions.channels.first();
  let user = message.author
  let embed = new Discord.MessageEmbed()

    .setTitle(`Nova facção confirmada para o **Factions Crystal**`)
    .setDescription(`Facção: ${facção}`)
    .setFooter(`Confirmada por: ${user.username}`, message.author.displayAvatarURL())
    .setColor(`#5b00a8`)
    .setThumbnail(client.user.avatarURL())
  
  if (message.member.roles.cache.find( r => r.name === "📕❱-Gerente")) {
    user.send(`Você confirmou uma facção no Factions Crystal. Facção: ${facção}`);
    channel.send(embed);
}
}