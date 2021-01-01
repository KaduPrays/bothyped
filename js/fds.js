const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  ''
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para mandar o foda-se');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Foda-se')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de mandar o foda-se ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Treta! Treta! Treta! Treta!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}