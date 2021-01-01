const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/b605b16f1ff8228a187f34fa97e423ac/tenor.gif',
  'https://media.tenor.com/images/d7454414101abb7556dd9f5f98089d02/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('SherekGif')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de sumonar um sherek em gif`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Sherek')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}